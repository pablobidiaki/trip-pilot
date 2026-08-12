import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Min } from 'class-validator';

/* 
Body struct:
{
    "departure": "São Paulo",
    "destination": "China",
    "days": 5,
    "departure_date": "2026-10-01"
    "budget": 9000,
    "travelers": 2,
    "travel_type": "adventure",
    "ai_provider": "gemini"
}
*/

export class GenerateItineraryDto {
  @ApiProperty({
    example: 'São Paulo',
  })
  @IsString()
  departure: string;

  @ApiProperty({
    example: 'Gramado',
  })
  @IsString()
  destination: string;

  @ApiProperty({
    example: 5,
  })
  @IsInt()
  @Min(1)
  days: number;

  @ApiProperty({
    example: "01-01-2030", //MM-DD-YYYY
  })
  @IsString()
  departure_date: string

  @ApiProperty({
    example: 3000,
  })
  @IsInt()
  budget: number;
  
  @ApiProperty({
    example: 2,
  })
  @IsInt()
  @Min(1)
  travelers: number

  @ApiProperty({
    example: "adventure"
  })
  @IsString()
  travel_type: string

  @ApiProperty({
    example: "gemini"
  })
  @IsString()
  ai_provider: string
}