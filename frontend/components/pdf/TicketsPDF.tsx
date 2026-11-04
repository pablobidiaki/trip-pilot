
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./stylesPDF";
import { Tickets } from "@/interfaces/itinerary.interface";

interface TicketsPDFProps {
    tickets: Tickets[];
}

export function TicketsPDF({ tickets }: TicketsPDFProps) {
    return (
        <View style={styles.ticketsSection}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                    Passagens e voos
                </Text>
                <Text style={styles.sectionDescription}>
                    Confira os detalhes dos deslocamentos da sua viagem.
                </Text>
            </View>

            <View style={styles.ticketsGrid}>
                {tickets.map((ticket, index) => (
                    <View key={`${ticket.boardingPoint}-${index}`} style={styles.ticketCard} wrap={false} >
                        <View style={styles.ticketHeader}>
                            <Text style={styles.ticketTitle}>
                                {`Voo ${index + 1}`}
                            </Text>

                            <Text style={ticket.isGoing ? styles.ticketBadgeGoing : styles.ticketBadgeReturn} >
                                {ticket.isGoing ? "Ida" : "Volta"}
                            </Text>
                        </View>

                        <View style={styles.ticketRoute}>
                            <View style={styles.ticketLocation}>
                                <Text style={styles.ticketLabel}>
                                    Embarque
                                </Text>
                                <Text style={styles.ticketLocationName}>
                                    {ticket.boardingPoint}
                                </Text>
                            </View>

                            <View style={styles.ticketArrow}>
                                <Text style={styles.ticketArrowText}>
                                    -
                                </Text>
                            </View>

                            <View style={styles.ticketLocation}>
                                <Text style={styles.ticketLabel}>
                                    Desembarque
                                </Text>
                                <Text style={styles.ticketLocationName}>
                                    {ticket.disembarkationPoint}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.ticketTimeContainer}>
                            <Text style={styles.ticketLabel}>
                                Horário do voo
                            </Text>
                            <Text style={styles.ticketTime}>
                                {ticket.flyTime}
                            </Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}
