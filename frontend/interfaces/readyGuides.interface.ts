interface Overview {
    days: string
    title: string
    imageURL: string
    titleCity: string
    description: string
}

interface Accommodations {
    days: string
    name: string
    price: number
    review: number
    address: string
    imageURL: string
    description: string
}

interface CostDayEstimate {
    food: string
    transport: string
    tickets: string
    others: string
    total: string
}

interface Hours{
    hour: string
    title: string
    description: string
    tip: string
}

interface Itinerary{
    day: number
    abbreviatedDate: string
    city: string
    fullDate: string
    description: string
    dayTips: string[]
    costDayEstimate: CostDayEstimate
    hours: Hours[]
}

export interface ReadyGuide {
    id: string
    imageURL: string
    title: string
    description: string
    travelType: string
    bestTime: string
    language: string
    currenty: string
    overviewResume: string
    cities: string[]
    days: number
    price: number
    overview: Overview[]
    itinerary: Itinerary[]
    accommodations: Accommodations[]
    usefulInformation: JSON
}