import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsString, Min } from 'class-validator';

/* 
Body struct:
{
    "userId": "e7b48e14-b83c-4691-96a7-18c71f42faf2",
    "departure": "São Paulo",
    "destination": "China",
    "departureDate": "2026-01-20",
    "days": 5,
    "budget": 500,
    "travelers": 2,
    "travelType": "aventura",
    "aiProvider": "gemini"
}

Date formate: YYYY-MM-DD
*/

export class CreateItineraryDto {
    @ApiProperty({
        example: 'e7b48e14-b83c-4691-96a7-18c71f42faf2',
    })
    @IsString()
    userId: string;

    @ApiProperty({
        example: 'São Paulo',
    })
    @IsString()
    departure: string;

    @ApiProperty({
        example: 'Japão',
    })
    @IsString()
    destination: string;

    @ApiProperty({
        example: "2026-12-31",
    })
    @IsDateString()
    departureDate: string

    @ApiProperty({
        example: 5,
    })
    @IsInt()
    @Min(1)
    days: number;

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
    travelType: string

    @ApiProperty({
        example: "gemini"
    })
    @IsString()
    aiProvider: string
}