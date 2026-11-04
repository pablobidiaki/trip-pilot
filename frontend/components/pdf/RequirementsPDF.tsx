
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./stylesPDF";
import { RequirementsInterface } from "@/interfaces/itinerary.interface";

interface RequirementsPDFProps {
    requirements: RequirementsInterface;
}

export function RequirementsPDF({ requirements }: RequirementsPDFProps) {
    const checklist = [
        {
            title: "Visto",
            required: requirements.visa,
            description: requirements.visa ? "Verifique os requisitos e providencie o visto antes da viagem." : "Não é necessário visto, conforme os dados fornecidos."
        },
        {
            title: "Passaporte",
            required: requirements.passport,
            description: requirements.passport ? "Providencie um passaporte válido para a viagem." : "Passaporte não indicado como obrigatório nos dados fornecidos."
        },
    ];

    return (
        <View style={styles.requirementsSection}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                    Documentação e requisitos
                </Text>
                <Text style={styles.sectionDescription}>
                    Confira os documentos e as exigências para sua viagem.
                </Text>
            </View>

            <View style={styles.requirementsGrid}>
                {checklist.map((item) => (
                    <View
                        key={item.title}
                        style={styles.requirementCard}
                        wrap={false}
                    >
                        <View style={styles.requirementHeader}>
                            <Text style={styles.requirementTitle}>
                                {item.title}
                            </Text>
                            <Text
                                style={
                                    item.required
                                        ? styles.requirementBadgeRequired
                                        : styles.requirementBadgeOptional
                                }
                            >
                                {item.required ? "NECESSÁRIO" : "NÃO INDICADO"}
                            </Text>
                        </View>

                        <Text style={styles.requirementDescription}>
                            {item.description}
                        </Text>
                    </View>
                ))}
            </View>


            <View style={styles.requirementsListsGrid}>
                <View style={styles.requirementsListCard} wrap={false}>
                    <Text style={styles.requirementsListTitle}>
                        Vacinas
                    </Text>

                    {requirements.vaccines.length > 0 ? (
                        requirements.vaccines.map((vaccine, index) => (
                            <View
                                key={`${vaccine}-${index}`}
                                style={styles.requirementListItem}
                            >
                                <Text style={styles.requirementBullet}>•</Text>
                                <Text style={styles.requirementListText}>
                                    {vaccine}
                                </Text>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.requirementEmpty}>
                            Nenhuma vacina informada.
                        </Text>
                    )}
                </View>

                <View style={styles.requirementsListCard} wrap={false}>
                    <Text style={styles.requirementsListTitle}>
                        Outros documentos
                    </Text>

                    {requirements.documents.length > 0 ? (
                        requirements.documents.map((document, index) => (
                            <View
                                key={`${document}-${index}`}
                                style={styles.requirementListItem}
                            >
                                <Text style={styles.requirementBullet}>•</Text>
                                <Text style={styles.requirementListText}>
                                    {document}
                                </Text>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.requirementEmpty}>
                            Nenhum documento adicional informado.
                        </Text>
                    )}
                </View>
            </View>


            <Text style={styles.requirementsDisclaimer}>
                Consulte fontes oficiais antes do embarque. As exigências podem variar conforme sua nacionalidade, o destino e as regras vigentes na data da viagem.
            </Text>
        </View>
    );
}
