import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsObject, IsString, Min } from 'class-validator';

export class CreateItineraryDto {
    @ApiProperty({
        example: '5e9a0a38-4777-4358-93d5-afd69472f469',
    })
    @IsString()
    userId: string;

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
        example: '2026-01-24',
    })
    @IsString()
    endDate: string;

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
        example: "https://flags.restcountries.com/v5/w640/br.png",
    })
    @IsString()
    countryOriginFlagURL: string;

    @ApiProperty({
        example: "https://flags.restcountries.com/v5/w640/cn.png",
    })
    @IsString()
    countryDestinationFlagURL: string;

    @ApiProperty({
        example: 5,
    })
    @Min(1)
    @IsInt()
    days: number;

    @ApiProperty({
        example: '2026-08-31',
    })
    @IsString()
    departureDate: string;

    @ApiProperty({
        example: 500,
    })
    @Min(1)
    @IsInt()
    budgetTotal: number;

    @ApiProperty({
        example: 2,
    })
    @Min(1)
    @IsInt()
    travelers: number;

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
        example: 'gemini',
    })
    @IsString()
    aiProvider: string

    @ApiProperty({
        type: [Object],
        example: [
            {
                day: 1,
                title: 'Chegada em Pequim',
                morning: 'Chegada e check-in.',
                afternoon: 'Visita ao centro histórico.',
                evening: 'Jantar típico.',
            },
        ],
    })
    @IsObject()
    itinerary: object[];
}