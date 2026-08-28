interface Attraction {
    image: string
    name: string
    shortDescription: string
    estimateCost: number
}

interface AverageCost {
    accommodations: string
    food: string
    transport: string
    tours: string
    total: string
    dayTips: string[]
}

interface usefulInformation {
    bagagem: string[]
    culture: string[]
    internet: string[]
    security: string[]
    documents: string[]
    exchangeRate: string[]
    localTransport: string[]
    vaccinesAndHealth: string[]
    powerOutletAndVoltage: string[]
}

export interface DestinationInterface {
    id: string
    imageURL: string
    bannerURL: string
    destination: string
    description: string
    country: string
    travelType: string
    bestTime: string
    language: string
    currenty: string
    weather: string
    dayReccomended: number
    usefulInformation: usefulInformation
    whatToDo: JSON
    attractions: Attraction[]
    averageCost: AverageCost
}