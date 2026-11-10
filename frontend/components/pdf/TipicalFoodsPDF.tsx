
import { Image, Text, View } from "@react-pdf/renderer";
import { styles } from "./stylesPDF";
import { TipicalFoodsInterface } from "@/interfaces/itinerary.interface";
import formatCurrent from "@/utils/formatCurrent";

interface TipicalFoodsPDFProps {
    typicalFood: TipicalFoodsInterface[];
}

export function TipicalFoodsPDF({ typicalFood }: TipicalFoodsPDFProps) {
    return (
        <View style={styles.typicalFoodSection}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                    Gastronomia local
                </Text>
                <Text style={styles.sectionDescription}>
                    Conheça alguns pratos típicos que vale a pena experimentar.
                </Text>
            </View>

            <View style={styles.typicalFoodGrid}>
                {typicalFood.slice(0, 3).map((food, index) => (
                    <View key={`${food.title}-${index}`} style={styles.typicalFoodCard} wrap={false} >
                        <Image src={food.imageURL} style={styles.typicalFoodImage} />

                        <View style={styles.typicalFoodContent}>
                            <Text style={styles.typicalFoodCategory}>
                                {food.category}
                            </Text>

                            <Text style={styles.typicalFoodTitle}>
                                {food.title}
                            </Text>

                            <Text style={styles.typicalFoodDescription}>
                                {food.description}
                            </Text>

                            <View style={styles.typicalFoodFooter}>
                                <Text style={styles.typicalFoodPriceLabel}>
                                    Preço médio
                                </Text>
                                <Text style={styles.typicalFoodPrice}>
                                    {formatCurrent(food.averagePrice)}
                                </Text>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}
