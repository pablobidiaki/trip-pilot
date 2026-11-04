
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./stylesPDF";
import { AccommodationsInterface } from "@/interfaces/itinerary.interface";

interface AccomodationsPDFProps {
    accomodation: AccommodationsInterface[]
}

export function AccomodationsPDF({ accomodation }: AccomodationsPDFProps) {
    return (
        <View style={styles.accommodationSection}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                    Hospedagens recomendadas
                </Text>
                <Text style={styles.sectionDescription}>
                    Selecionamos 3 opções de hospedagem para sua viagem.
                </Text>
            </View>

            <View style={styles.hotelList}>
                {accomodation.map((hotel, index) => (
                    <View key={index} style={styles.hotelCard} wrap={false}>
                        <View style={styles.hotelTop}>
                            <View>
                                <Text style={styles.hotelName}>
                                    {hotel.name}
                                </Text>

                                <Text style={styles.hotelLocation}>
                                    {hotel.address}
                                </Text>
                            </View>
                        </View>

                        <Text style={styles.hotelDescription}>
                            {hotel.includes}
                        </Text>

                        <View style={styles.hotelFooter}>
                            <View>
                                <Text style={styles.hotelLabel}>
                                    Avaliação
                                </Text>
                                <Text style={styles.hotelRating}>
                                    {hotel.rating}
                                </Text>
                            </View>

                            <View style={styles.hotelPriceContainer}>
                                <Text style={styles.hotelLabel}>
                                    Preço estimado
                                </Text>
                                <Text style={styles.hotelPrice}>
                                    {hotel.costEstimate.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL"
                                    })}
                                </Text>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}
