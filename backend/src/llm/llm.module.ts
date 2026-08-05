import { Module } from '@nestjs/common';

import { LlmController } from './controllers/llm.controller';
import { LlmService } from './services/llm_service';
import { GeminiProvider } from './providers/gemini.provider';

@Module({
  controllers: [LlmController],
  providers: [
    LlmService,
    GeminiProvider,
  ],
})
export class LlmModule {}