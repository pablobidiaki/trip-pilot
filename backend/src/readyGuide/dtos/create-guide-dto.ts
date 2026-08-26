import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, IsObject, IsString, Min } from 'class-validator';

export class CreateGuideDto {
    @ApiProperty({
        example: 'https://i.imgur.com/9LtXPOR.jpeg',
    })
    @IsString()
    imageURL: string

    @ApiProperty({
        example: 'Tóquio, Japão',
    })
    @IsString()
    title: string

    @ApiProperty({
        example: 'A fascinante mistura de tradições milenares, tecnologia futurista e gastronomia de classe mundial',
    })
    @IsString()
    description: string
    
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
        example: 'Descubra o charme dos canais de Amsterdã, a arquitetura futurista de Roterdã e o encanto medieval de Utrecht.',
    })
    @IsString()
    overviewResume: string

    @ApiProperty({
        example: 'Temperado',
    })
    @IsArray()
    cities: string[]

    @ApiProperty({
        example: 14,
    })
    @Min(1)
    @IsInt()
    days: number

    @ApiProperty({
        example: 14,
    })
    @Min(1)
    price: number

    @ApiProperty({
        example: `
        {
            "imageURL": "",
            "days": "Dia 1 - 4",
            "title": "Amsterdã",
            "titleCity": "Amsterdã",
            "description": "Canais icônicos, museus renomados e a atmosfera acolhedora da capital holandesa."
        },
        {
            "imageURL": "",
            "days": "Dia 5 - 7",
            "title": "Roterdã",
            "titleCity": "Roterdã",
            "description": "Design inovador, o maior porto da Europa e arquitetura arrojada."
        },
        {
            "imageURL": "",
            "days": "Dia 8 - 10",
            "title": "Utrecht",
            "titleCity": "Utrecht",
            "description": "Canais com cais exclusivos, torres medievais e um ritmo de vida vibrante."
        }
        `
    })
    @IsArray()
    overview: object[]

    @ApiProperty({
        example: `
        {
            "day": 1,
            "abbreviatedDate": "Qua, 10 Jun",
            "fullDate": "Quarta-feira, 10 de Junho",
            "city": "Amsterdã",
            "description": "Chegada à capital, check-in e exploração inicial do centro histórico e seus canais.",
            "dayTips": [
                "Compre o passe de transporte público GVB para deslocamentos ilimitados",
                "Atenção constante às ciclovias; os ciclistas sempre têm preferência",
                "Tenha um casaco corta-vento sempre à mão devido às brisas nos canais",
                "Use sapatos confortáveis para caminhar pelas pontes de pedra"
            ],
            "costDayEstimate": {
                "food": "R$ 200 - R$ 350",
                "tickets": "R$ 100 - R$ 180",
                "transport": "R$ 40 - R$ 80",
                "others": "R$ 50 - R$ 100",
                "total": "R$ 390 - R$ 710"
            },
            "hours": [
                {
                    "hour": "08:00",
                    "title": "Chegada e Check-in",
                    "description": "Chegada em Amsterdã, desembarque e acomodação no hotel",
                    "tip": "Deixe as malas no hotel mesmo se o quarto ainda não estiver liberado"
                },
                {
                    "hour": "10:00",
                    "title": "Passeio pela Praça Dam",
                    "description": "Caminhada pelo coração histórico da cidade conhecendo o Palácio Real",
                    "tip": ""
                },
                {
                    "hour": "12:00",
                    "title": "Almoço em um Café Tradicional",
                    "description": "Degustação de pratos locais como o famoso Bitterballen",
                    "tip": "Experimente os cafés históricos chamados Bruin Cafés"
                },
                {
                    "hour": "14:00",
                    "title": "Cruzeiro pelos Canais",
                    "description": "Passeio de barco coberto descobrindo a arquitetura icônica dos canais",
                    "tip": ""
                },
                {
                    "hour": "16:00",
                    "title": "Exploração do Bairro Jordaan",
                    "description": "Caminhada pelas galerias de arte, boutiques e ruas charmosas",
                    "tip": ""
                },
                {
                    "hour": "18:30",
                    "title": "Visita à Casa de Anne Frank",
                    "description": "Imersão histórica emocionante no museu dedicado à memória de Anne Frank",
                    "tip": "Reserve o ingresso obrigatoriamente online com semanas de antecedência"
                },
                {
                    "hour": "20:00",
                    "title": "Jantar na região das Nove Ruas",
                    "description": "Refeição aconchegante em um dos bairros mais charmosos da cidade",
                    "tip": ""
                }
            ]
        }
        `
    })
    @IsArray()
    itinerary: object[]

    @ApiProperty({
        example: `
        {
            "imageURL": "",
            "days": "Dia 1 - 4",
            "name": "CitizenM Amsterdã South",
            "review": 4.8,
            "address": "Prinses Irenestraat 30, Amsterdã",
            "description": "Quartos modernos e tecnológicos, excelente localização com acesso fácil ao centro por transporte público.",
            "price": 180.00
        }
        `
    })
    @IsArray()
    accommodations: object[]

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
}