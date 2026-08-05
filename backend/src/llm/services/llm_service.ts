import { Injectable } from '@nestjs/common';

import { GenerateItineraryDto } from '../dtos/generate-itinerary-dto';
import { GeminiProvider } from '../providers/gemini.provider';
import { createItineraryPrompt } from '../prompts/itinerary.prompt';

@Injectable()
export class LlmService {
  constructor(
    private readonly geminiProvider: GeminiProvider,
  ) {}

  async generate(dto: GenerateItineraryDto) {
    const prompt = createItineraryPrompt(dto);

    const itinerary = await this.geminiProvider.generate(prompt);
    console.log(itinerary)

    // 3. Futuramente salvaremos no banco aqui
    // await this.prisma.itinerary.create(...);

    return {
      success: true,
      itinerary,
    };
  }
}