import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsObject, IsString, Min } from 'class-validator';

interface Attraction {
    image: string,
    name: string,
    short_description: string,
    estimate_cost: number
}

interface AverageCost {
    accommodations: string,
    food: string,
    transport: string,
    tours: string
}

export class CreateDestinationDto {
    @ApiProperty({
        example: 'Tóquio, Japão',
    })
    @IsString()
    destination: string

    @ApiProperty({
        example: 'A fascinante mistura de tradições milenares, tecnologia futurista e gastronomia de classe mundial',
    })
    @IsString()
    description: string

    @ApiProperty({
        example: 'Japão',
    })
    @IsString()
    country: string

    @ApiProperty({
        example: 'Cultura e Tecnologia',
    })
    @IsString()
    travelType: string

    @ApiProperty({
        example: 'Mar a Maio - Set a Nov',
    })
    @IsString()
    bestTime: string

    @ApiProperty({
        example: 'Japonês',
    })
    @IsString()
    language: string

    @ApiProperty({
        example: 'Iene',
    })
    @IsString()
    currenty: string

    @ApiProperty({
        example: 'Temperado',
    })
    @IsString()
    weather: string

    @ApiProperty({
        example: 14,
    })
    @Min(1)
    @IsInt()
    dayReccomended: number

    @ApiProperty({
        example: {
            "documents": [
                "Passaporte válido",
                "Isenção de visto eletrônico (e-Visa) para estadias de curta duração"
            ],
            "vaccines_and_health": [
                "Nenhuma vacina obrigatória (Recomendado seguro viagem com alta cobertura)"
            ],
            "bagagem": [
                "Adaptador de tomada universal",
                "Sapatos confortáveis e fáceis de tirar",
                "Powerbank",
                "Mochila leve para passeios diários"
            ],
            "exchange_rate": [
                "Iene (JPY)",
                "1 real = 27.50 Ienes"
            ],
            "power_outlet_and_voltage": [
                "Tipo A e B (2 pinos chatos)",
                "100V"
            ],
            "internet": [
                "eSIM internacional ou aluguel de Pocket Wi-Fi"
            ],
            "local_transport": [
                "Trem de Alta Velocidade (Shinkansen)",
                "Metrô com cartão Suica ou Pasmo"
            ],
            "culture": [
                "Extremamente educados e silenciosos em transportes públicos",
                "Culturas de respeito às filas e regras locais",
                "Não é costume dar gorjetas"
            ],
            "security": [
                "Um dos países mais seguros do mundo; taxas de criminalidade extremamente baixas"
            ]
        }
    })
    @IsObject()
    usefulInformation: object

    @ApiProperty({
        example: {
            "culture": [
                "Participar de uma tradicional Cerimônia do Chá",
                "Visitar templos e santuários históricos em Kyoto",
                "Assistir a um treino ou torneio de Sumô"
            ],
            "tipical_food": [
                "Ramen",
                "Sushi",
                "Takoyaki"
            ],
            "nature": [
                "Montanha Sagrada Monte Fuji",
                "Parque de Arashiyama e o Bosque de Bambu",
                "Parque Nacional de Nikko"
            ],
            "famous_stores": [
                "Akihabara (Eletrônicos e Pop Culture)",
                "Ginza Six",
                "Shibuya 109"
            ],
            "night_life": [
                "Bairro de Shinjuku (Kabukicho)",
                "Bares de Golden Gai",
                "Roppongi Hills"
            ]
        },
    })
    @IsObject()
    whatToDo: object

    @ApiProperty({
        example: {
            "image": "fuji.jpg",
            "name": "Monte Fuji",
            "short_description": "A montanha mais icônica e sagrada do Japão",
            "estimate_cost": 150
        },
    })
    @IsObject()
    attractions: object

    @ApiProperty({
        example: {
            "hospedagem": "R$ 400–800/dia"
        },
    })
    @IsObject()
    averageCost: object
}