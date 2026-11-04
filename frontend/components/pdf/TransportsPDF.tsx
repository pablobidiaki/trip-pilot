
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./stylesPDF";
import { TransportationInterface } from "@/interfaces/itinerary.interface";

interface TransportsPDFProps {
    transports: TransportationInterface[];
}

export function TransportsPDF({ transports }: TransportsPDFProps) {
    return (
        <View style={styles.transportsSection}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                    Como se locomover
                </Text>

                <Text style={styles.sectionDescription}>
                    Compare as opções de transporte disponíveis no destino.
                </Text>
            </View>

            <View style={styles.transportsGrid}>
                {transports.map((transport, index) => (
                    <View key={`${transport.type}-${index}`} style={styles.transportCard} wrap={false}>
                        <Text style={styles.transportType}>
                            {transport.type}
                        </Text>

                        <View style={styles.transportPriceContainer}>
                            <Text style={styles.transportPriceLabel}>
                                Preço médio
                            </Text>

                            <Text style={styles.transportPrice}>
                                {transport.averagePrice.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                })}
                            </Text>
                        </View>
                    </View>
                ))}
            </View>

        </View>
    );
}
