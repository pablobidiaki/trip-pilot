
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./stylesPDF";
import { CostEstimateInterface } from "@/interfaces/itinerary.interface";
import formatCurrent from "@/utils/formatCurrent";

interface CostsPDFProps {
    costs: CostEstimateInterface;
}

export function CostsPDF({ costs }: CostsPDFProps) {
    if (!costs) return null;

    const expenses = [
        { label: "Passagens", value: formatCurrent(costs.ticket) },
        { label: "Hospedagem", value: formatCurrent(costs.accommodations) },
        { label: "Alimentação", value: formatCurrent(costs.food) },
        { label: "Transporte", value: formatCurrent(costs.transport) },
        { label: "Atividades", value: formatCurrent(costs.activities) },
        { label: "Extras", value: formatCurrent(costs.extra) },
    ];

    return (
        <View style={styles.costsSection}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                    Custos estimados
                </Text>

                <Text style={styles.sectionDescription}>
                    Confira a distribuição dos gastos previstos para sua viagem.
                </Text>
            </View>

            <View style={styles.totalCostCard}>
                <Text style={styles.totalCostLabel}>
                    Orçamento total estimado
                </Text>

                <Text style={styles.totalCostValue}>
                    {formatCurrent(costs.total)}
                </Text>

                <Text style={styles.totalCostDescription}>
                    Valor previsto para toda a viagem
                </Text>
            </View>

            <View style={styles.expensesGrid}>
                {expenses.map((expense, index) => (
                    <View key={index} style={styles.expenseCard}>
                        <Text style={styles.expenseLabel}>
                            {expense.label}
                        </Text>

                        <Text style={styles.expenseValue}>
                            {expense.value}
                        </Text>
                    </View>
                ))}
            </View>

        </View>
    );
}
