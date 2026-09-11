import { Injectable } from '@nestjs/common';

import { CreateItineraryLlmDto } from '../dtos/generate-itinerary-dto';
import { GeminiProvider } from '../providers/gemini.provider';
import { createItineraryPrompt } from '../prompts/itinerary.prompt';

@Injectable()
export class LlmService {
  constructor(private readonly geminiProvider: GeminiProvider,) { }

  async generate(dto: CreateItineraryLlmDto) {
    const prompt = createItineraryPrompt(dto);

    return await this.geminiProvider.generate(prompt)
  }
}