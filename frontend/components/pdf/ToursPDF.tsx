
import { Text, View, Image } from "@react-pdf/renderer";
import { styles } from "./stylesPDF";
import { ToursInterface } from "@/interfaces/itinerary.interface";

interface ToursPDFProps {
    tours: ToursInterface[];
}

export function ToursPDF({ tours }: ToursPDFProps) {
    return (
        <View style={styles.toursSection}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                    Experiências e passeios
                </Text>

                <Text style={styles.sectionDescription}>
                    Descubra experiências selecionadas para aproveitar ao máximo seu destino.
                </Text>
            </View>

            <View style={styles.toursGrid}>
                {tours.map((tour, index) => (
                    <View key={index} style={styles.tourCard} wrap={false}>
                        <Image src={tour.imageURL} style={styles.tourImage} />

                        <View style={styles.tourContent}>
                            <Text style={styles.tourName}>
                                {tour.name}
                            </Text>

                            <Text style={styles.tourDescription}>
                                {tour.description}
                            </Text>

                            <View style={styles.tourFooter}>
                                <Text style={styles.tourPriceLabel}>
                                    Preço estimado
                                </Text>

                                <Text style={styles.tourPrice}>
                                    {tour.price.toLocaleString("pt-BR", {
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
