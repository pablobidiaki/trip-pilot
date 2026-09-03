import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateItineraryDto {
    @ApiProperty({
        example: '5e9a0a38-4777-4358-93d5-afd69472f469',
    })
    userId: string;

    @ApiProperty({
        example: 'São Paulo',
    })
    departure: string;

    @ApiProperty({
        example: 'China',
    })
    destination: string;

    @ApiProperty({
        example: '2026-01-20',
    })
    startDate: string;

    @ApiProperty({
        example: '2026-01-24',
    })
    endDate: string;

    @ApiProperty({
        example: 'Brazil',
    })
    countryOrigin: string;

    @ApiProperty({
        example: 'China',
    })
    countryDestination: string;

    @ApiProperty({
        example: 5,
    })
    days: number;

    @ApiProperty({
        example: '2026-08-31',
    })
    departureDate: string;

    @ApiProperty({
        example: 500,
    })
    budgetTotal: number;

    @ApiProperty({
        example: 2,
    })
    travelers: number;

    @ApiProperty({
        example: 'Adventure',
    })
    travelType: string;

    @ApiProperty({
        example: 'BRL',
    })
    currency: string;

    @ApiProperty({
        example: [
            'Leve roupas confortáveis.',
            'Tenha sempre água durante os passeios.',
            'Verifique os horários das atrações.',
        ],
    })
    tips: string[];

    @ApiProperty({
        type: [Object],
        example: [
            {
                name: 'Cidade Proibida',
                description: 'Um dos principais pontos turísticos de Pequim.',
                value: 80,
            },
        ],
    })
    tours: object[];

    @ApiProperty({
        type: Object,
        example: {
            type: 'Plane',
            duration: '11h30',
            price: 3500,
        },
    })
    ticket: object;

    @ApiProperty({
        type: Object,
        example: {
            averageTemperature: '25°C',
            description: 'Quente e parcialmente nublado',
        },
    })
    weather: object;

    @ApiProperty({
        type: Object,
        example: {
            passport: true,
            visa: true,
            vaccines: [],
            documents: ['Passaporte válido'],
        },
    })
    requirements: object;

    @ApiProperty({
        type: Object,
        example: {
            accommodation: 1800,
            food: 900,
            transportation: 500,
            tours: 600,
            other: 200,
            total: 4000,
        },
    })
    costEstimate: object;

    @ApiProperty({
        type: [Object],
        example: [
            {
                name: 'Hotel Example',
                address: 'Beijing, China',
                rating: 4.5,
                price: 350,
            },
        ],
    })
    accommodations: object[];

    @ApiProperty({
        type: [Object],
        example: [
            {
                type: 'Public transport',
                averagePrice: 40,
            },
            {
                type: 'Rental car',
                averagePrice: 180,
            },
        ],
    })
    transportation: object[];

    @ApiProperty({
        type: [Object],
        example: [
            {
                name: 'Pato de Pequim',
                description: 'Prato tradicional chinês.',
                averagePrice: 80,
            },
        ],
    })
    typicalFood: object[];

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
    itinerary: object[];

    @ApiProperty({
        example: "gemini"
    })
    @IsString()
    aiProvider: string
}