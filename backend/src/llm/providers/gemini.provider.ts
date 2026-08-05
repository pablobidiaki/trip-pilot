import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenAI } from '@google/genai';

@Injectable()
export class GeminiProvider {
    private ai: GoogleGenAI;

    constructor(
        private readonly configService: ConfigService,
    ) {
        this.ai = new GoogleGenAI({
            apiKey: this.configService.get<string>('GEMINI_API_KEY')!,
        });
    }

    async generate(prompt: string) {

        const response = await this.ai.models.generateContent({
            model: 'gemini-3.6-flash',
            contents: prompt,
        });

        return response.text;
    }
}