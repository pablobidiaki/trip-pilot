import { Document, Page, Text } from "@react-pdf/renderer";
import { ItineraryInterface } from "@/interfaces/itinerary.interface";
import { styles } from "./stylesPDF";
import { ProvidedDataPDF } from "./ProvidedDataPDF";
import formatDate from "@/utils/formatDate";
import { AccomodationsPDF } from "./AccomodationsPDF";
import { ToursPDF } from "./ToursPDF";
import { CostsPDF } from "./CostsPDF";
import { WeatherPDF } from "./WeatherPDF";
import { TransportsPDF } from "./TransportsPDF";
import { RequirementsPDF } from "./RequirementsPDF";
import { TipsPDF } from "./TipsPDF";
import { TicketsPDF } from "./TicketsPDF";
import { TipicalFoodsPDF } from "./TipicalFoodsPDF";
import { DayToDayPDF } from "./DayToDayPDF";

interface ItineraryPDFProps {
    itinerary: ItineraryInterface
}

export function ItineraryPDF({ itinerary }: ItineraryPDFProps) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
               <ProvidedDataPDF  destination={itinerary.destination}
                    departure={itinerary.departure}
                    budget={itinerary.budgetTotal}
                    days={itinerary.days}
                    travelers={itinerary.travelers}
                    startDate={formatDate(itinerary.startDate)}
                    endDate={formatDate(itinerary.endDate)}
                />
                <AccomodationsPDF accomodation={itinerary.itinerary.accommodations} />
                <ToursPDF tours={itinerary.itinerary.tours} />
            </Page>
            <Page size="A4" style={styles.page}>
                <CostsPDF costs={itinerary.itinerary.costEstimate} />
                <WeatherPDF weather={itinerary.itinerary.weather} />
                <TransportsPDF transports={itinerary.itinerary.transportation} />
            </Page>
            <Page size="A4" style={styles.page}>
                <RequirementsPDF requirements={itinerary.itinerary.requirements} />
                <TipsPDF tips={itinerary.itinerary.tips} />
            </Page>
            <Page size="A4" style={styles.page}>
                <TicketsPDF tickets={itinerary.itinerary.ticket} />
                <TipicalFoodsPDF typicalFood={itinerary.itinerary.tipicalFood} />
            </Page>
            <Page size="A4" style={styles.page}>
                <DayToDayPDF days={itinerary.itinerary.dayToDay} />
            </Page>
        </Document>
    );
}