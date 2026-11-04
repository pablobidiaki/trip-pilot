
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./stylesPDF";

interface ProvidedDataPDFProps {
    destination: string
    departure: string
    budget: number
    days: number
    travelers: number
    startDate: string
    endDate: string
}

export function ProvidedDataPDF({ destination, departure, budget, days, travelers, startDate, endDate }: ProvidedDataPDFProps) {
    return (
        <View style={styles.tripHeader}>
            <Text style={styles.brandName}>TripPilot</Text>

            <View style={styles.destinationContainer}>
                <Text style={styles.destinationLabel}>
                    Seu roteiro para:
                </Text>

                <Text style={styles.destinationTitle}>
                    {destination}
                </Text>

                <Text style={styles.routeText}>
                    Origem: {departure}  Destino: {destination} 
                </Text>
            </View>

            <View style={styles.tripDetailsContainer}>
                <View style={styles.summaryContainer}>
                    <View style={styles.summaryItem}>
                        <Text style={styles.summaryValue}>
                            {startDate}
                        </Text>
                        <Text style={styles.summaryLabel}>Partida</Text>
                    </View>
                    <View style={styles.summaryItem}>
                        <Text style={styles.summaryValue}>
                            {endDate}
                        </Text>
                        <Text style={styles.summaryLabel}>Retorno</Text>
                    </View>
                    <View style={styles.summaryItem}>
                        <Text style={styles.summaryValue}>{days}</Text>
                        <Text style={styles.summaryLabel}>Dias</Text>
                    </View>

                    <View style={styles.summaryItem}>
                        <Text style={styles.summaryValue}>{travelers}</Text>
                        <Text style={styles.summaryLabel}>{travelers === 1 ? "Viajante" : "Viajantes"}</Text>
                    </View>

                    <View style={styles.summaryItem}>
                        <Text style={styles.summaryValue}>
                            {budget.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                            })}
                        </Text>
                        <Text style={styles.summaryLabel}>Orçamento</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
