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
}

export interface Destination {
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
    usefulInformation: JSON
    whatToDo: JSON
    attractions: Attraction[]
    averageCost: AverageCost
}