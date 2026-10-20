
import { Test, TestingModule } from '@nestjs/testing';

import { ReadyGuideService } from '../services/readyGuide.service';
import { PrismaService } from '../../prisma/prisma.service';
import { IReadyGuideRepository } from '../repositories/IReadyGuideRepository';

describe('ReadyGuideService', () => {
    let service: ReadyGuideService;

    const readyGuideRepositoryMock = {
        create: jest.fn(),
        findAll: jest.fn(),
        findOne: jest.fn(),
        removeAll: jest.fn(),
        removeOne: jest.fn(),
    };

    const prismaMock = {
        savedReadyGuides: {
            findUnique: jest.fn(),
            delete: jest.fn(),
            create: jest.fn(),
            findMany: jest.fn(),
        },
    };

    beforeEach(async () => {
        jest.clearAllMocks();

        const module: TestingModule =
            await Test.createTestingModule({
                providers: [
                    ReadyGuideService,
                    {
                        provide: PrismaService,
                        useValue: prismaMock,
                    },
                    {
                        provide: IReadyGuideRepository,
                        useValue: readyGuideRepositoryMock,
                    },
                ],
            }).compile();

        service = module.get<ReadyGuideService>(
            ReadyGuideService,
        );
    });

    describe('create', () => {
        it('deve criar um guia', async () => {
            const dto = {
                title: 'Guia do Japão',
            } as any;

            const guide = {
                id: 'guide-123',
                ...dto,
            };

            readyGuideRepositoryMock.create.mockResolvedValue(guide);

            const result = await service.create(dto);

            expect(readyGuideRepositoryMock.create)
                .toHaveBeenCalledWith(dto);

            expect(result).toEqual(guide);
        });
    });

    describe('getAll', () => {
        it('deve retornar todos os guias', async () => {
            const guides = [
                { id: '1', title: 'Japão' },
                { id: '2', title: 'Chile' },
            ];

            readyGuideRepositoryMock.findAll.mockResolvedValue(guides);

            await expect(service.getAll()).resolves.toEqual(guides);

            expect(readyGuideRepositoryMock.findAll)
                .toHaveBeenCalledTimes(1);
        });
    });

    describe('get', () => {
        it('deve buscar um guia pelo ID', async () => {
            const guide = { id: 'guide-123', title: 'Japão' };

            readyGuideRepositoryMock.findOne.mockResolvedValue(guide);

            const result = await service.get('guide-123');

            expect(readyGuideRepositoryMock.findOne)
                .toHaveBeenCalledWith('guide-123');

            expect(result).toEqual(guide);
        });
    });

    describe('deleteAll', () => {
        it('deve excluir todos os guias', async () => {
            readyGuideRepositoryMock.removeAll.mockResolvedValue({
                count: 2,
            });

            const result = await service.deleteAll();

            expect(readyGuideRepositoryMock.removeAll)
                .toHaveBeenCalledTimes(1);

            expect(result).toEqual({ count: 2 });
        });
    });

    describe('delete', () => {
        it('deve excluir um guia pelo ID', async () => {
            readyGuideRepositoryMock.removeOne.mockResolvedValue({
                id: 'guide-123',
            });

            const result = await service.delete('guide-123');

            expect(readyGuideRepositoryMock.removeOne)
                .toHaveBeenCalledWith('guide-123');

            expect(result).toEqual({ id: 'guide-123' });
        });
    });

    describe('favorite', () => {
        it('deve favoritar um guia quando ainda não estiver favoritado', async () => {
            prismaMock.savedReadyGuides.findUnique.mockResolvedValue(null);

            prismaMock.savedReadyGuides.create.mockResolvedValue({
                id: 'favorite-123',
                userId: 'user-123',
                readyGuideId: 'guide-123',
            });

            const result = await service.favorite(
                'user-123',
                'guide-123',
            );

            expect(prismaMock.savedReadyGuides.findUnique)
                .toHaveBeenCalledWith({
                    where: {
                        userId_readyGuideId: {
                            userId: 'user-123',
                            readyGuideId: 'guide-123',
                        },
                    },
                });

            expect(prismaMock.savedReadyGuides.create)
                .toHaveBeenCalledWith({
                    data: {
                        userId: 'user-123',
                        readyGuideId: 'guide-123',
                    },
                });

            expect(result).toEqual({ isFavorite: true });

            expect(prismaMock.savedReadyGuides.delete)
                .not.toHaveBeenCalled();
        });

        it('deve remover dos favoritos quando o guia já estiver favoritado', async () => {
            prismaMock.savedReadyGuides.findUnique.mockResolvedValue({
                id: 'favorite-123',
                userId: 'user-123',
                readyGuideId: 'guide-123',
            });

            prismaMock.savedReadyGuides.delete.mockResolvedValue({
                id: 'favorite-123',
            });

            const result = await service.favorite(
                'user-123',
                'guide-123',
            );

            expect(prismaMock.savedReadyGuides.delete)
                .toHaveBeenCalledWith({
                    where: {
                        id: 'favorite-123',
                    },
                });

            expect(result).toEqual({ isFavorite: false });

            expect(prismaMock.savedReadyGuides.create)
                .not.toHaveBeenCalled();
        });
    });

    describe('getAllFavorites', () => {
        it('deve retornar os guias favoritados pelo usuário', async () => {
            const favorites = [
                {
                    userId: 'user-123',
                    readyGuideId: 'guide-123',
                    readyGuide: {
                        id: 'guide-123',
                        title: 'Japão',
                    },
                },
            ];

            prismaMock.savedReadyGuides.findMany.mockResolvedValue(
                favorites,
            );

            const result = await service.getAllFavorites('user-123');

            expect(prismaMock.savedReadyGuides.findMany)
                .toHaveBeenCalledWith({
                    where: {
                        userId: 'user-123',
                    },
                    include: {
                        readyGuide: true,
                    },
                });

            expect(result).toEqual(favorites);
        });
    });
});
