
import { Test, TestingModule } from '@nestjs/testing';
import { DestinationService } from './destination.service';
import { PrismaService } from '../../prisma/prisma.service';
import { IDestinationRepository } from '../repositories/IDestinationRepository';

describe('DestinationService', () => {
  let service: DestinationService;

  const destinationRepositoryMock = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    removeAll: jest.fn(),
    removeOne: jest.fn(),
  };

  const prismaMock = {
    savedDestinations: {
      findUnique: jest.fn(),
      delete: jest.fn(),
      create: jest.fn(),
      findMany: jest.fn(),
    },
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DestinationService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
        {
          provide: IDestinationRepository,
          useValue: destinationRepositoryMock,
        },
      ],
    }).compile();

    service = module.get<DestinationService>(DestinationService);
  });

  it('deve ser definido', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('deve criar um destino usando o repositório', async () => {
      const dto = {
        imageURL: 'image.jpg',
        bannerURL: 'banner.jpg',
        destination: 'Tóquio',
        description: 'Cidade japonesa',
        country: 'Japão',
        travelType: 'Cultura',
        bestTime: 'Primavera',
        language: 'Japonês',
        currenty: 'JPY',
        weather: 'Temperado',
        dayReccomended: 5,
        usefulInformation: [],
        whatToDo: [],
        attractions: [],
        averageCost: 5000,
      };

      const expectedDestination = { id: 'destination-1', ...dto };

      destinationRepositoryMock.create.mockResolvedValue(expectedDestination);

      const result = await service.create(dto as any);

      expect(destinationRepositoryMock.create).toHaveBeenCalledWith(dto);
      expect(result).toEqual(expectedDestination);
    });
  });

  describe('getAll', () => {
    it('deve retornar todos os destinos', async () => {
      const destinations = [{ id: 'destination-1', destination: 'Tóquio' }];

      destinationRepositoryMock.findAll.mockResolvedValue(destinations);

      await expect(service.getAll()).resolves.toEqual(destinations);
      expect(destinationRepositoryMock.findAll).toHaveBeenCalledTimes(1);
    });
  });

  describe('get', () => {
    it('deve retornar um destino pelo ID', async () => {
      const destination = { id: 'destination-1', destination: 'Tóquio' };

      destinationRepositoryMock.findOne.mockResolvedValue(destination);

      await expect(service.get('destination-1')).resolves.toEqual(destination);
      expect(destinationRepositoryMock.findOne).toHaveBeenCalledWith(
        'destination-1',
      );
    });
  });

  describe('deleteAll', () => {
    it('deve excluir todos os destinos', async () => {
      destinationRepositoryMock.removeAll.mockResolvedValue({ count: 1 });

      await expect(service.deleteAll()).resolves.toEqual({ count: 1 });
      expect(destinationRepositoryMock.removeAll).toHaveBeenCalledTimes(1);
    });
  });

  describe('delete', () => {
    it('deve excluir um destino pelo ID', async () => {
      destinationRepositoryMock.removeOne.mockResolvedValue({
        id: 'destination-1',
      });

      await expect(service.delete('destination-1')).resolves.toEqual({
        id: 'destination-1',
      });

      expect(destinationRepositoryMock.removeOne).toHaveBeenCalledWith(
        'destination-1',
      );
    });
  });

  describe('favorite', () => {
    it('deve favoritar um destino quando ainda não estiver favoritado', async () => {
      prismaMock.savedDestinations.findUnique.mockResolvedValue(null);
      prismaMock.savedDestinations.create.mockResolvedValue({
        id: 'favorite-1',
        userId: 'user-1',
        destinationId: 'destination-1',
      });

      const result = await service.favorite('user-1', 'destination-1');

      expect(prismaMock.savedDestinations.findUnique).toHaveBeenCalledWith({
        where: {
          userId_destinationId: {
            userId: 'user-1',
            destinationId: 'destination-1',
          },
        },
      });

      expect(prismaMock.savedDestinations.create).toHaveBeenCalledWith({
        data: {
          userId: 'user-1',
          destinationId: 'destination-1',
        },
      });

      expect(result).toEqual({ isFavorite: true });
    });

    it('deve remover dos favoritos quando já estiver favoritado', async () => {
      prismaMock.savedDestinations.findUnique.mockResolvedValue({
        id: 'favorite-1',
        userId: 'user-1',
        destinationId: 'destination-1',
      });

      prismaMock.savedDestinations.delete.mockResolvedValue({
        id: 'favorite-1',
      });

      const result = await service.favorite('user-1', 'destination-1');

      expect(prismaMock.savedDestinations.delete).toHaveBeenCalledWith({
        where: { id: 'favorite-1' },
      });

      expect(prismaMock.savedDestinations.create).not.toHaveBeenCalled();
      expect(result).toEqual({ isFavorite: false });
    });
  });

  describe('getAllFavorites', () => {
    it('deve retornar os destinos favoritos do usuário', async () => {
      const favorites = [
        {
          id: 'favorite-1',
          userId: 'user-1',
          destinationId: 'destination-1',
          destination: {
            id: 'destination-1',
            destination: 'Tóquio',
          },
        },
      ];

      prismaMock.savedDestinations.findMany.mockResolvedValue(favorites);

      const result = await service.getAllFavorites('user-1');

      expect(prismaMock.savedDestinations.findMany).toHaveBeenCalledWith({
        where: { userId: 'user-1' },
        include: { destination: true },
      });

      expect(result).toEqual(favorites);
    });
  });
});
