
import { Test, TestingModule } from '@nestjs/testing';
import { ImagesService } from './images.service';

describe('ImagesService', () => {
  let service: ImagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImagesService],
    }).compile();

    service = module.get<ImagesService>(ImagesService);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('deve ser definido', () => {
    expect(service).toBeDefined();
  });

  it('deve buscar uma imagem sem orientação', async () => {
    const mockResponse = {
      photos: [
        {
          src: {
            original: 'https://images.pexels.com/test.jpg',
          },
        },
      ],
    };

    const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    } as unknown as Response);

    const result = await service.getImages('Japan');

    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.pexels.com/v1/search?query=Japan&per_page=1',
      {
        headers: {
          Authorization: expect.any(String),
        },
      },
    );

    expect(result).toBe('https://images.pexels.com/test.jpg');
  });

  it('deve buscar uma imagem com orientação', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        photos: [
          {
            src: {
              original: 'https://images.pexels.com/landscape.jpg',
            },
          },
        ],
      }),
    } as unknown as Response);

    const result = await service.getImages('Japan', 'landscape');

    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.pexels.com/v1/search?query=Japan&per_page=1&orientation=landscape',
      expect.any(Object),
    );

    expect(result).toBe('https://images.pexels.com/landscape.jpg');
  });

  it('deve retornar undefined se nenhuma imagem for encontrada', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        photos: [],
      }),
    } as unknown as Response);

    const result = await service.getImages('UnknownPlace');

    expect(result).toBeUndefined();
  });
});
