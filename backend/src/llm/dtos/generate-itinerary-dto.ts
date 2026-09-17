import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Min } from 'class-validator';

export class CreateItineraryLlmDto {    
        @ApiProperty({
            example: 'São Paulo',
        })
        @IsString()
        departure: string;
    
        @ApiProperty({
            example: 'China',
        })
        @IsString()
        destination: string;
    
        @ApiProperty({
            example: '2026-01-20',
        })
        @IsString()
        startDate: string;
    
        @ApiProperty({
            example: 'Brazil',
        })
        @IsString()
        countryOrigin: string;
    
        @ApiProperty({
            example: 'China',
        })
        @IsString()
        countryDestination: string;
        
        @ApiProperty({
            example: 'Adventure',
        })
        @IsString()
        travelType: string;
    
        @ApiProperty({
            example: 'BRL',
        })
        @IsString()
        currency: string;
    
        @ApiProperty({
            example: 5,
        })
        @Min(1)
        @IsInt()
        days: number;
    
        @ApiProperty({
            example: 2,
        })
        @Min(1)
        @IsInt()
        travelers: number;
    
        @ApiProperty({
            example: 500,
        })
        @Min(1)
        @IsInt()
        budgetTotal: number;
    
        @ApiProperty({
            example: 'gemini',
        })
        @IsString()
        aiProvider: string
}