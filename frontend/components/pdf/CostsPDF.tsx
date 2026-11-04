
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./stylesPDF";
import { CostEstimateInterface } from "@/interfaces/itinerary.interface";

interface CostsPDFProps {
    costs: CostEstimateInterface;
}

export function CostsPDF({ costs }: CostsPDFProps) {
    if (!costs) return null;

    const expenses = [
        { label: "Passagens", value: costs.ticket.toLocaleString("pt-BR", { style: "currency", currency: "BRL", }) },
        { label: "Hospedagem", value: costs.accommodations.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) },
        { label: "Alimentação", value: costs.food.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) },
        { label: "Transporte", value: costs.transport.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) },
        { label: "Atividades", value: costs.activities.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) },
        { label: "Extras", value: costs.extra.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) },
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
                    {costs.total.toLocaleString("pt-BR", {style: "currency",currency: "BRL"})}
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
