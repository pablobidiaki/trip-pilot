import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenAI } from '@google/genai';
import { LlmProvider } from '../interfaces/llm-provider.interface';

@Injectable()
export class GeminiProvider implements LlmProvider {
    private ai: GoogleGenAI;

    constructor(
        private readonly configService: ConfigService,
    ) {
        this.ai = new GoogleGenAI({
            apiKey: this.configService.get<string>('GEMINI_API_KEY')!,
        });
    }

    async generate(prompt: string): Promise<string> {

        const response = await this.ai.models.generateContent({
            model: 'gemini-3.6-flash',
            contents: prompt,
        });

        return String(response.text);
    }
}