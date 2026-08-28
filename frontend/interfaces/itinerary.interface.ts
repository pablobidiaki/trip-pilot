interface Tours {
    imageURL: string
    name: string
    description: string
    price: number
}

interface Tickets {
    boardingPoint: string
    flyTime: string
    disembarkationPoint: string
}

interface Weather {
    season: string
    recommendation: string
    averageTemperature: string
}

interface Requirements {
    visa: boolean
    passport: boolean
    vaccines: string[]
    documents: string[]
}

interface CostEstimate {
    ticket: number
    accommodations: number
    food: number
    transport: number
    activities: number
    extra: number
    total: number
}

interface Accommodations {
    imageURL: string
    name: string
    rating: number
    address: string
    includes: string
    roomType: string
    reviewCount: number
    costEstimate: number
}

interface Transportation{
    type: string
    averagePrice: number
}

interface TipicalFoods {
    imageURL: string
    title: string
    description: string
    averagePrice: number
    category: string
}

interface Hours{
    hour: string
    title: string
    description: string
    tip: string
}

interface DayToDay{
    imageURL: string
    day: string
    title: string
    morning: string
    afternoon: string
    nightLife: string
    dayCostEstimate: number
    hours: Hours[]
}

interface Itinerary {
    tips: string[]
    tours: Tours[]
    ticket: Tickets[]
    weather: Weather
    requirements: Requirements
    costEstimate: CostEstimate
    accommodations: Accommodations[]
    transportation: Transportation[]
    tipicalFoods: TipicalFoods[]
    dayToDay: DayToDay
}

export interface ItineraryInterface {
    id: string
    userId: string
    departure: string
    destination: string
    startDate: string
    endDate: string
    countryOrigin: string
    countryDestination: string
    departureDate: string
    travelType: string
    currency: string
    days: number
    travelers: number
    budgetTotal: number
    itinerary: Itinerary
}