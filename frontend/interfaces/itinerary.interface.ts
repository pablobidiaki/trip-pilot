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
    itinerary: JSON
}