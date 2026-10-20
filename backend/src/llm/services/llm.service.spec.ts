
import { Test, TestingModule } from '@nestjs/testing';

import { LlmService } from './llm.service';
import { GeminiProvider } from '../providers/gemini.provider';
import { createItineraryPrompt } from '../prompts/itinerary.prompt';

jest.mock('../prompts/itinerary.prompt', () => ({
    createItineraryPrompt: jest.fn(),
}));

describe('LlmService', () => {
    let service: LlmService;

    const geminiProviderMock = {
        generate: jest.fn(),
    };

    beforeEach(async () => {
        jest.clearAllMocks();

        const module: TestingModule =
            await Test.createTestingModule({
                providers: [
                    LlmService,
                    {
                        provide: GeminiProvider,
                        useValue: geminiProviderMock,
                    },
                ],
            }).compile();

        service = module.get<LlmService>(LlmService);
    });

    describe('generate', () => {
        it('deve gerar o prompt e chamar o GeminiProvider', async () => {
            const dto = {
                destination: 'Japão',
            } as any;

            const prompt = 'Crie um roteiro de viagem para o Japão';

            const response = {
                title: 'Viagem ao Japão',
                tours: [],
            };

            (createItineraryPrompt as jest.Mock).mockReturnValue(
                prompt,
            );

            geminiProviderMock.generate.mockResolvedValue(response);

            const result = await service.generate(dto);

            expect(createItineraryPrompt).toHaveBeenCalledWith(dto);

            expect(geminiProviderMock.generate).toHaveBeenCalledWith(
                prompt,
            );

            expect(result).toEqual(response);
        });

        it('deve propagar o erro quando o provider falhar', async () => {
            const dto = {
                destination: 'Japão',
            } as any;

            const error = new Error('Erro ao gerar roteiro');

            (createItineraryPrompt as jest.Mock).mockReturnValue(
                'prompt de teste',
            );

            geminiProviderMock.generate.mockRejectedValue(error);

            await expect(service.generate(dto)).rejects.toThrow(
                'Erro ao gerar roteiro',
            );
        });
    });
});
