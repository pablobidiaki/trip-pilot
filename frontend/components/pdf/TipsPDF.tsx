
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./stylesPDF";
import { TipsInterface } from "@/interfaces/itinerary.interface";

interface TipsPDFProps {
    tips: TipsInterface[];
}

export function TipsPDF({ tips }: TipsPDFProps) {
    return (
        <View style={styles.tipsSection}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                    Dicas para sua viagem
                </Text>
                <Text style={styles.sectionDescription}>
                    Recomendações úteis para aproveitar melhor seu destino.
                </Text>
            </View>

            <View style={styles.tipsGrid}>
                {tips.slice(0, 4).map((tip, index) => (
                    <View
                        key={`${tip.type}-${index}`}
                        style={styles.tipCard}
                        wrap={false}
                    >
                        <Text style={styles.tipType}>
                            {tip.type}
                        </Text>

                        <Text style={styles.tipText}>
                            {tip.text}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    );
}
