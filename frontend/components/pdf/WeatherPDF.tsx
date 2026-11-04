
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./stylesPDF";
import { WeatherInterface } from "@/interfaces/itinerary.interface";

interface WeatherPDFProps {
    weather: WeatherInterface;
}

export function WeatherPDF({ weather }: WeatherPDFProps) {
    return (
        <View style={styles.weatherSection}>

            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                    Clima e recomendações
                </Text>

                <Text style={styles.sectionDescription}>
                    Saiba o que esperar do clima durante sua viagem.
                </Text>
            </View>

            <View style={styles.weatherCard}>
                <View style={styles.weatherTop}>
                    <View style={styles.weatherTemperatureContainer}>
                        <Text style={styles.weatherLabel}>
                            Temperatura média
                        </Text>

                        <Text style={styles.weatherTemperature}>
                            {weather.averageTemperature}°C
                        </Text>
                    </View>

                    <View style={styles.weatherSeasonContainer}>
                        <Text style={styles.weatherLabel}>
                            Estação do ano
                        </Text>

                        <Text style={styles.weatherSeason}>
                            {weather.season}
                        </Text>
                    </View>
                </View>

                <View style={styles.weatherRecommendation}>
                    <Text style={styles.recommendationText}>
                        Dica: {weather.recommendation}
                    </Text>
                </View>

            </View>

        </View>
    );
}
