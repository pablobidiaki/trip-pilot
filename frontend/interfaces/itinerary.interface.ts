export interface ToursInterface {
    imageURL: string
    name: string
    description: string
    price: number
}

export interface Tickets {
    isGoing: boolean
    boardingPoint: string
    flyTime: string
    disembarkationPoint: string
}

export interface WeatherInterface {
    season: string
    recommendation: string
    averageTemperature: string
}

export interface RequirementsInterface {
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

export interface AccommodationsInterface {
    googleMapsEmbed: string
    name: string
    rating: number
    address: string
    includes: string
    roomType: string
    reviewsCount: number
    costEstimate: number
}

export interface TransportationInterface{
    type: string
    averagePrice: number
}

export interface TipicalFoodsInterface {
    imageURL: string
    title: string
    description: string
    averagePrice: number
    category: string
}

export interface Hours{
    hour: string
    title: string
    description: string
    tip: string
}

export interface DayToDayInterface{
    imageURL: string
    day: string
    title: string
    morning: string
    afternoon: string
    night: string
    dayCostEstimate: number
    hours: Hours[]
}

interface Itinerary {
    tips: string[]
    tours: ToursInterface[]
    ticket: Tickets[]
    weather: WeatherInterface
    requirements: RequirementsInterface
    costEstimate: CostEstimate
    accommodations: AccommodationsInterface[]
    transportation: TransportationInterface[]
    tipicalFood: TipicalFoodsInterface[]
    dayToDay: DayToDayInterface[]
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
    countryOriginFlagURL: string
    countryDestinationFlagURL: string
    departureDate: string
    travelType: string
    currency: string
    days: number
    travelers: number
    budgetTotal: number
    itinerary: Itinerary
}