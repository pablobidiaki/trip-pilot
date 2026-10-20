
import { Test, TestingModule } from '@nestjs/testing';

import { ItineraryService } from './itinerary.service';
import { LlmService } from '../../llm/services/llm.service';
import { ImagesService } from '../../images/services/images.service';
import { UsersService } from '../../users/services/users.service';
import { IItineraryRepository } from '../repositories/IItineraryRepository';

describe('ItineraryService', () => {
    let service: ItineraryService;

    const llmServiceMock = {
        generate: jest.fn(),
    };

    const imagesServiceMock = {
        getImages: jest.fn(),
    };

    const usersServiceMock = {
        getUserByEmail: jest.fn(),
    };

    const itineraryRepositoryMock = {
        findAll: jest.fn(),
        findUserItineraries: jest.fn(),
        findOne: jest.fn(),
        create: jest.fn(),
        removeAll: jest.fn(),
        removeOne: jest.fn(),
    };

    beforeEach(async () => {
        jest.clearAllMocks();

        const module: TestingModule =
            await Test.createTestingModule({
                providers: [
                    ItineraryService,
                    {
                        provide: LlmService,
                        useValue: llmServiceMock,
                    },
                    {
                        provide: ImagesService,
                        useValue: imagesServiceMock,
                    },
                    {
                        provide: UsersService,
                        useValue: usersServiceMock,
                    },
                    {
                        provide: IItineraryRepository,
                        useValue: itineraryRepositoryMock,
                    },
                ],
            }).compile();

        service = module.get<ItineraryService>(ItineraryService);
    });

    describe('getAll', () => {
        it('deve retornar todos os itinerários', async () => {
            const itineraries = [
                { id: '1', destination: 'Japão' },
                { id: '2', destination: 'Chile' },
            ];

            itineraryRepositoryMock.findAll.mockResolvedValue(
                itineraries,
            );

            await expect(service.getAll()).resolves.toEqual(
                itineraries,
            );

            expect(itineraryRepositoryMock.findAll)
                .toHaveBeenCalledTimes(1);
        });
    });

    describe('getUserItineraries', () => {
        it('deve retornar os itinerários de um usuário', async () => {
            const itineraries = [
                { id: '1', destination: 'Japão' },
            ];

            itineraryRepositoryMock.findUserItineraries
                .mockResolvedValue(itineraries);

            const result = await service.getUserItineraries(
                'user-123',
            );

            expect(
                itineraryRepositoryMock.findUserItineraries,
            ).toHaveBeenCalledWith('user-123');

            expect(result).toEqual(itineraries);
        });
    });

    describe('get', () => {
        it('deve buscar um itinerário pelo ID', async () => {
            const itinerary = {
                id: 'itinerary-123',
                destination: 'Japão',
            };

            itineraryRepositoryMock.findOne.mockResolvedValue(
                itinerary,
            );

            const result = await service.get('itinerary-123');

            expect(itineraryRepositoryMock.findOne)
                .toHaveBeenCalledWith('itinerary-123');

            expect(result).toEqual(itinerary);
        });
    });

    describe('deleteAll', () => {
        it('deve excluir todos os itinerários', async () => {
            itineraryRepositoryMock.removeAll.mockResolvedValue({
                count: 2,
            });

            const result = await service.deleteAll();

            expect(itineraryRepositoryMock.removeAll)
                .toHaveBeenCalledTimes(1);

            expect(result).toEqual({ count: 2 });
        });
    });

    describe('delete', () => {
        it('deve excluir um itinerário pelo ID', async () => {
            itineraryRepositoryMock.removeOne.mockResolvedValue({
                id: 'itinerary-123',
            });

            const result = await service.delete('itinerary-123');

            expect(itineraryRepositoryMock.removeOne)
                .toHaveBeenCalledWith('itinerary-123');

            expect(result).toEqual({ id: 'itinerary-123' });
        });
    });

    describe('calculateEndDate', () => {
        it('deve calcular a data final de uma viagem', () => {
            const result = service.calculateEndDate(
                '2026-10-20T12:00:00.000Z',
                5,
            );

            expect(result).toBe('2026-10-24');
        });

        it('deve retornar o mesmo dia para uma viagem de um dia', () => {
            const result = service.calculateEndDate(
                '2026-10-20T12:00:00.000Z',
                1,
            );

            expect(result).toBe('2026-10-20');
        });
    });

    describe('getAllImagesURLs', () => {
        it('deve adicionar URLs às atrações, comidas e atividades', async () => {
            const data = {
                tours: [
                    { name: 'Templo', photoPrompt: 'templo japonês' },
                ],
                tipicalFood: [
                    { name: 'Sushi', photoPrompt: 'sushi' },
                ],
                dayToDay: [
                    { title: 'Dia 1', photoPrompt: 'ruas de Tóquio' },
                ],
            };

            imagesServiceMock.getImages
                .mockResolvedValueOnce('tour.jpg')
                .mockResolvedValueOnce('food.jpg')
                .mockResolvedValueOnce('day.jpg');

            const result = await service.getAllImagesURLs(data);

            expect(result.tours[0].imageURL).toBe('tour.jpg');
            expect(result.tipicalFood[0].imageURL).toBe('food.jpg');
            expect(result.dayToDay[0].imageURL).toBe('day.jpg');

            expect(imagesServiceMock.getImages).toHaveBeenCalledTimes(3);

            expect(imagesServiceMock.getImages).toHaveBeenNthCalledWith(
                1,
                'templo japonês',
            );

            expect(imagesServiceMock.getImages).toHaveBeenNthCalledWith(
                2,
                'sushi',
                'square',
            );

            expect(imagesServiceMock.getImages).toHaveBeenNthCalledWith(
                3,
                'ruas de Tóquio',
                'landscape',
            );
        });
    });

    describe('create', () => {
        const dto = {
            userId: 'pablo@email.com',
            departure: 'São Paulo',
            destination: 'Tóquio',
            startDate: '2026-10-20T12:00:00.000Z',
            countryOrigin: 'Brazil',
            countryDestination: 'Japan',
            travelType: 'Cultural',
            currency: 'BRL',
            days: 5,
            travelers: 2,
            budgetTotal: 10000,
        } as any;

        it('deve criar um itinerário com sucesso', async () => {
            usersServiceMock.getUserByEmail.mockResolvedValue({
                id: 'user-123',
            });

            llmServiceMock.generate.mockResolvedValue(
                JSON.stringify({
                    tours: [
                        { name: 'Templo', photoPrompt: 'templo' },
                    ],
                    tipicalFood: [
                        { name: 'Sushi', photoPrompt: 'sushi' },
                    ],
                    dayToDay: [
                        { title: 'Dia 1', photoPrompt: 'Tóquio' },
                    ],
                }),
            );

            jest.spyOn(service, 'getCountryFlag')
                .mockResolvedValueOnce('brazil.png')
                .mockResolvedValueOnce('japan.png');

            imagesServiceMock.getImages
                .mockResolvedValueOnce('tour.jpg')
                .mockResolvedValueOnce('food.jpg')
                .mockResolvedValueOnce('day.jpg');

            itineraryRepositoryMock.create.mockResolvedValue({
                id: 'itinerary-123',
                destination: 'Tóquio',
            });

            const result = await service.create(dto);

            expect(usersServiceMock.getUserByEmail)
                .toHaveBeenCalledWith(dto.userId);

            expect(llmServiceMock.generate)
                .toHaveBeenCalledWith(dto);

            expect(service.getCountryFlag)
                .toHaveBeenNthCalledWith(1, dto.countryOrigin);

            expect(service.getCountryFlag)
                .toHaveBeenNthCalledWith(2, dto.countryDestination);

            expect(itineraryRepositoryMock.create).toHaveBeenCalledWith(
                expect.objectContaining({
                    userId: 'user-123',
                    departure: 'São Paulo',
                    destination: 'Tóquio',
                    endDate: '2026-10-24',
                    countryOriginFlagURL: 'brazil.png',
                    countryDestinationFlagURL: 'japan.png',
                    itinerary: expect.objectContaining({
                        tours: [
                            expect.objectContaining({
                                imageURL: 'tour.jpg',
                            }),
                        ],
                    }),
                }),
            );

            expect(result).toEqual({
                id: 'itinerary-123',
                destination: 'Tóquio',
            });
        });

        it('deve lançar erro quando o usuário não existir', async () => {
            usersServiceMock.getUserByEmail.mockResolvedValue(null);

            await expect(service.create(dto)).rejects.toThrow(
                'User not found',
            );

            expect(llmServiceMock.generate).not.toHaveBeenCalled();
            expect(itineraryRepositoryMock.create).not.toHaveBeenCalled();
        });
    });
});
