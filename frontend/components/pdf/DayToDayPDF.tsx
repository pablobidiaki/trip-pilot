
import { Image, Text, View } from "@react-pdf/renderer";
import { styles } from "./stylesPDF";
import { DayToDayInterface } from "@/interfaces/itinerary.interface";

interface DayToDayPDFProps {
    days: DayToDayInterface[];
}

export function DayToDayPDF({ days }: DayToDayPDFProps) {
    const periods = [
        { label: "Manhã", key: "morning" as const },
        { label: "Tarde", key: "afternoon" as const },
        { label: "Noite", key: "night" as const },
    ];

    return (
        <View style={styles.dayToDaySection}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                    Roteiro dia a dia
                </Text>
                <Text style={styles.sectionDescription}>
                    Confira o planejamento das atividades durante sua viagem.
                </Text>
            </View>

            {days.map((day, index) => (
                <View key={`${day.day}-${index}`} style={styles.dayCard} wrap={false} >
                    <View style={styles.dayHeader}>
                        <Image src={day.imageURL} style={styles.dayImage} />

                        <View style={styles.dayHeaderContent}>
                            <Text style={styles.dayLabel}>
                                {day.day}
                            </Text>

                            <Text style={styles.dayTitle}>
                                {day.title}
                            </Text>

                            <View style={styles.dayCostContainer}>
                                <Text style={styles.dayCostLabel}>
                                    Custo médio do dia
                                </Text>
                                <Text style={styles.dayCost}>
                                    {day.dayCostEstimate.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    })}
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.dayPeriodsGrid}>
                        {periods.map((period) => (
                            <View key={period.key} style={styles.dayPeriodCard} >
                                <Text style={styles.dayPeriodLabel}>
                                    {period.label}
                                </Text>

                                <Text style={styles.dayPeriodText}>
                                    {day[period.key]}
                                </Text>
                            </View>
                        ))}
                    </View>

                    {day.hours.length > 0 && (
                        <View style={styles.daySchedule}>
                            <Text style={styles.dayScheduleTitle}>
                                Programação do dia
                            </Text>

                            {day.hours.map((item, hourIndex) => (
                                <View key={`${item.hour}-${hourIndex}`} style={styles.dayScheduleItem} >
                                    <View style={styles.dayScheduleTime}>
                                        <Text style={styles.dayScheduleHour}>
                                            {item.hour}
                                        </Text>
                                    </View>

                                    <View style={styles.dayScheduleContent}>
                                        <Text style={styles.dayScheduleItemTitle}>
                                            {item.title}
                                        </Text>

                                        <Text style={styles.dayScheduleDescription}>
                                            {item.description}
                                        </Text>

                                        {item.tip && (
                                            <View style={styles.dayScheduleTip}>
                                                <Text style={styles.dayScheduleTipText}>
                                                    Dica: {item.tip}
                                                </Text>
                                            </View>
                                        )}
                                    </View>
                                </View>
                            ))}
                        </View>
                    )}
                </View>
            ))}
        </View>
    );
}
