
import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
    page: {
        fontFamily: "Helvetica",
    },

    //ProvidedData
    tripHeader: {
        padding: 5,
    },

    brandIcon: {
        width: 25,
        height: 25,
        marginRight: 7,
    },

    brandName: {
        fontSize: 16,
        fontWeight: 700,
        color: "#2563EB",
        textAlign: "center",
        marginBottom: 10,
    },

    brandSubtitle: {
        fontSize: 7,
        color: "#8491A5",
        marginLeft: 9,
    },

    destinationContainer: {
        marginBottom: 22,
    },

    destinationLabel: {
        fontSize: 8,
        fontWeight: 700,
        color: "#64748B",
        marginBottom: 2,
        textAlign: "center"
    },

    destinationTitle: {
        fontSize: 27,
        fontWeight: 700,
        color: "#172554",
        marginBottom: 7,
        textAlign: "center"
    },

    routeText: {
        fontSize: 10,
        color: "#64748B",
        textAlign: "center"
    },

    tripDetailsContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 16,
        borderTopWidth: 1,
        borderColor: "#E2E8F0",
    },

    datesContainer: {
        flex: 1,
        justifyContent: "center",
        gap: 14,
    },

    dateItem: {
        flexDirection: "column",
    },

    summaryContainer: {
        flex: 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 12,
    },

    summaryItem: {
        flex: 1,
        alignItems: "center",
    },

    summaryValue: {
        fontSize: 12,
        fontWeight: 700,
        color: "#2563EB",
        marginBottom: 5,
    },

    summaryLabel: {
        fontSize: 9,
        fontWeight: 700,
        color: "#94A3B8",
    },

    // Accomodations

    accommodationSection: {
        marginTop: 10,
        marginBottom: 0,
    },

    sectionHeader: {
        marginTop: 10,
        marginBottom: 10,
    },

    sectionTitle: {
        fontSize: 19,
        fontWeight: 700,
        color: "#172554",
        marginBottom: 5,
        textAlign: "center",
    },

    sectionDescription: {
        fontSize: 9,
        color: "#64748B",
        textAlign: "center",
    },

    hotelList: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
    },

    hotelCard: {
        width: "32%",
        padding: 5,
        backgroundColor: "#F7F9FC",
        borderRadius: 9,
        borderWidth: 1,
        borderColor: "#E5EAF2",
        flexDirection: "column"
    },

    hotelTop: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },

    hotelNumberText: {
        fontSize: 10,
        fontWeight: 700,
        color: "#2563EB",
    },

    hotelName: {
        fontSize: 12,
        fontWeight: 700,
        color: "#172554",
        marginBottom: 4,
    },

    hotelLocation: {
        fontSize: 8,
        color: "#64748B",
    },

    hotelDescription: {
        fontSize: 9,
        lineHeight: 1.5,
        color: "#475569",
        marginBottom: 13,
    },

    hotelFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 10,
        borderTopWidth: 1,
        borderColor: "#E2E8F0",
        marginTop: "auto",
    },

    hotelLabel: {
        fontSize: 8,
        fontWeight: 700,
        color: "#94A3B8",
        marginBottom: 5,
    },

    hotelRating: {
        fontSize: 10,
        fontWeight: 700,
        color: "#2563EB",
    },

    hotelPriceContainer: {
        alignItems: "flex-end",
    },

    hotelPrice: {
        fontSize: 10,
        fontWeight: 700,
        color: "#172554",
    },

    hotelCardLink: {
        width: "32%",
        textDecoration: "none",
    },

    // Tours
    toursSection: {
        marginTop: 0,
        marginBottom: 0,
    },

    toursGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "stretch",
    },

    tourCard: {
        width: "32%",
        height: "90%",
        backgroundColor: "#F7F9FC",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#E5EAF2",
        marginBottom: 5,
        overflow: "hidden",
        flexDirection: "column",
    },

    tourImage: {
        padding: 0,
        width: "100%",
        height: 95,
        objectFit: "cover",
    },

    tourContent: {
        padding: 4,
        flex: 1,
        flexDirection: "column",
    },

    tourName: {
        fontSize: 11,
        fontWeight: 700,
        color: "#172554",
        marginBottom: 5,
    },

    tourDescription: {
        fontSize: 8,
        lineHeight: 1.5,
        color: "#64748B",
    },

    tourFooter: {
        marginTop: "auto",
        paddingTop: 2,
        paddingBottom: 2,
        borderTopWidth: 1,
        borderColor: "#E2E8F0",
    },

    tourPriceLabel: {
        marginTop: 1,
        marginBottom: 1,
        fontSize: 8,
        fontWeight: 700,
        color: "#94A3B8"
    },

    tourPrice: {
        fontSize: 12,
        fontWeight: 700,
        color: "#2563EB",
    },

    //Costs
    costsSection: {
        marginTop: 0,
        marginBottom: 0,
    },

    totalCostCard: {
        alignSelf: "center",
        width: "auto",
        backgroundColor: "#EFF6FF",
        borderWidth: 1,
        borderColor: "#DBEAFE",
        borderRadius: 10,
        padding: 18,
        marginBottom: 14,
        textAlign: "center",
        alignItems: "center",
    },

    totalCostLabel: {
        fontSize: 8,
        fontWeight: 700,
        color: "#64748B",
        marginBottom: 8,
    },

    totalCostValue: {
        fontSize: 25,
        fontWeight: 700,
        color: "#2563EB",
        marginBottom: 5,
    },

    totalCostDescription: {
        fontSize: 8,
        color: "#64748B",
    },

    expensesGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
    },

    expenseCard: {
        width: "32%",
        backgroundColor: "#F7F9FC",
        borderWidth: 1,
        borderColor: "#E5EAF2",
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
    },

    expenseLabel: {
        fontSize: 8,
        color: "#64748B",
        marginBottom: 7,
        textAlign: "center"
    },

    expenseValue: {
        fontSize: 11,
        fontWeight: 700,
        color: "#172554",
        textAlign: "center"
    },

    //Weather
    weatherSection: {
        marginLeft: 4,
        marginRight: 4,
    },

    weatherCard: {
        backgroundColor: "#F7F9FC",
        borderWidth: 1,
        borderColor: "#E5EAF2",
        borderRadius: 10,
        padding: 18,
    },

    weatherTop: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 18,
    },

    weatherTemperatureContainer: {
        flex: 1,
    },

    weatherLabel: {
        fontSize: 7,
        fontWeight: 700,
        color: "#94A3B8",
        marginBottom: 7,
    },

    weatherTemperature: {
        fontSize: 28,
        fontWeight: 700,
        color: "#2563EB",
    },

    weatherSeasonContainer: {
        flex: 1,
        alignItems: "flex-end",
    },

    weatherSeason: {
        fontSize: 13,
        fontWeight: 700,
        color: "#172554",
    },

    weatherRecommendation: {
        paddingTop: 13,
        borderTopWidth: 1,
        borderColor: "#E2E8F0",
    },

    recommendationText: {
        fontSize: 9,
        lineHeight: 1.6,
        color: "#475569",
        textAlign: 'center'
    },

    //Transports
    transportsSection: {
        marginTop: 0,
        marginBottom: 20,
        marginLeft: 4,
        marginRight: 4,
    },

    transportsGrid: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "stretch",
    },

    transportCard: {
        width: "48.5%",
        padding: 16,
        backgroundColor: "#F7F9FC",
        borderRadius: 9,
        borderWidth: 1,
        borderColor: "#E5EAF2",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: 105,
    },

    transportType: {
        fontSize: 12,
        fontWeight: 700,
        color: "#172554",
        marginBottom: 18,
        textAlign: "center"
    },

    transportPriceContainer: {
        paddingTop: 10,
        borderTopWidth: 1,
        borderColor: "#E2E8F0",
    },

    transportPriceLabel: {
        fontSize: 7,
        fontWeight: 700,
        color: "#94A3B8",
        marginBottom: 6,
        textAlign: "center"
    },

    transportPrice: {
        fontSize: 16,
        fontWeight: 700,
        color: "#2563EB",
        textAlign: "center"
    },

    //Requirements

    requirementsSection: {
        marginTop: 15,
        marginBottom: 0,

    },

    requirementsGrid: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginBottom: 12,
    },

    requirementCard: {
        width: "48.5%",
        padding: 14,
        backgroundColor: "#F7F9FC",
        borderRadius: 9,
        borderWidth: 1,
        borderColor: "#E5EAF2",
    },

    requirementHeader: {
        marginBottom: 10,
    },

    requirementTitle: {
        fontSize: 12,
        fontWeight: 700,
        color: "#172554",
        marginBottom: 8,
    },

    requirementBadgeRequired: {
        alignSelf: "flex-start",
        fontSize: 7,
        fontWeight: 700,
        color: "#1D4ED8",
        backgroundColor: "#DBEAFE",
        paddingVertical: 4,
        paddingHorizontal: 6,
        borderRadius: 4,
    },

    requirementBadgeOptional: {
        alignSelf: "flex-start",
        fontSize: 7,
        fontWeight: 700,
        color: "#475569",
        backgroundColor: "#E2E8F0",
        paddingVertical: 4,
        paddingHorizontal: 6,
        borderRadius: 4,
    },

    requirementDescription: {
        fontSize: 9,
        lineHeight: 1.5,
        color: "#64748B",
    },

    requirementsListTitle: {
        fontSize: 11,
        fontWeight: 700,
        color: "#172554",
        marginBottom: 10,
    },

    requirementListItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 7,
    },

    requirementBullet: {
        fontSize: 10,
        color: "#2563EB",
        marginRight: 8,
    },

    requirementListText: {
        flex: 1,
        fontSize: 9,
        lineHeight: 1.5,
        color: "#475569",
    },

    requirementEmpty: {
        fontSize: 9,
        lineHeight: 1.5,
        color: "#94A3B8",
    },

    requirementsDisclaimer: {
        marginTop: 4,
        fontSize: 8,
        lineHeight: 1.5,
        color: "#94A3B8",
        textAlign: 'center'
    },


    requirementsListsGrid: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "stretch",
    },

    requirementsListCard: {
        width: "48.5%",
        padding: 14,
        marginBottom: 12,
        backgroundColor: "#FFFFFF",
        borderRadius: 9,
        borderWidth: 1,
        borderColor: "#E5EAF2",
    },

    //Tips

    tipsSection: {
        marginTop: 15,
        marginBottom: 0,
    },

    tipsGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
    },

    tipCard: {
        width: "48.5%",
        padding: 5,
        marginBottom: 12,
        backgroundColor: "#F7F9FC",
        borderRadius: 9,
        borderWidth: 1,
        borderColor: "#E5EAF2",
    },

    tipType: {
        fontSize: 11,
        fontWeight: 700,
        color: "#2563EB",
        marginBottom: 8,
        textAlign: "center"
    },

    tipText: {
        fontSize: 9,
        lineHeight: 1.5,
        color: "#475569",
        textAlign: "center"
    },

    //Tickets
    ticketsSection: {
        marginTop: 0,
        marginBottom: 0,
    },

    ticketsGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
    },

    ticketCard: {
        width: "48.5%",
        padding: 5,
        marginBottom: 12,
        backgroundColor: "#F7F9FC",
        borderRadius: 9,
        borderWidth: 1,
        borderColor: "#E5EAF2",
    },

    ticketHeader: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginBottom: 16,
    },

    ticketTitle: {
        fontSize: 12,
        fontWeight: 700,
        color: "#172554",
    },

    ticketBadgeGoing: {
        fontSize: 7,
        fontWeight: 700,
        color: "#1D4ED8",
        backgroundColor: "#DBEAFE",
        paddingVertical: 4,
        paddingHorizontal: 7,
        borderRadius: 4,
    },

    ticketBadgeReturn: {
        fontSize: 7,
        fontWeight: 700,
        color: "#475569",
        backgroundColor: "#E2E8F0",
        paddingVertical: 4,
        paddingHorizontal: 7,
        borderRadius: 4,
    },

    ticketRoute: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 16,
    },

    ticketLocation: {
        flex: 1,
    },

    ticketLabel: {
        fontSize: 7,
        fontWeight: 700,
        color: "#94A3B8",
        marginBottom: 6,
    },

    ticketLocationName: {
        fontSize: 9,
        fontWeight: 700,
        color: "#334155",
    },

    ticketArrow: {
        paddingHorizontal: 8,
    },

    ticketArrowText: {
        fontSize: 14,
        color: "#2563EB",
    },

    ticketTimeContainer: {
        paddingTop: 10,
        borderTopWidth: 1,
        borderColor: "#E2E8F0",
    },

    ticketTime: {
        fontSize: 10,
        fontWeight: 700,
        color: "#2563EB",
    },

    typicalFoodSection: {
        marginTop: 0,
        marginBottom: 0,
    },

    typicalFoodGrid: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "stretch",
    },

    typicalFoodCard: {
        width: "32%",
        backgroundColor: "#F7F9FC",
        borderRadius: 9,
        borderWidth: 1,
        borderColor: "#E5EAF2",
        overflow: "hidden",
        flexDirection: "column",
    },

    typicalFoodImage: {
        width: "100%",
        height: 90,
        objectFit: "cover",
    },

    typicalFoodContent: {
        padding: 10,
        flexDirection: "column",
        flexGrow: 1,
    },

    typicalFoodCategory: {
        fontSize: 7,
        fontWeight: 700,
        color: "#2563EB",
        marginBottom: 6,
        textTransform: "uppercase",
    },

    typicalFoodTitle: {
        fontSize: 10,
        fontWeight: 700,
        color: "#172554",
        marginBottom: 7,
    },

    typicalFoodDescription: {
        fontSize: 8,
        lineHeight: 1.5,
        color: "#64748B",
        marginBottom: 12,
    },

    typicalFoodFooter: {
        marginTop: "auto",
        paddingTop: 8,
        borderTopWidth: 1,
        borderColor: "#E2E8F0",
    },

    typicalFoodPriceLabel: {
        fontSize: 6,
        fontWeight: 700,
        color: "#94A3B8",
        letterSpacing: 0.5,
        marginBottom: 4,
    },

    typicalFoodPrice: {
        fontSize: 11,
        fontWeight: 700,
        color: "#2563EB",
    },

    //Day-to-day

    dayToDaySection: {
        marginTop: 15,
        marginBottom: 20,
    },

    dayCard: {
        marginBottom: 18,
        padding: 14,
        backgroundColor: "#FFFFFF",
        borderRadius: 9,
        borderWidth: 1,
        borderColor: "#E5EAF2",
    },

    dayHeader: {
        flexDirection: "row",
        marginBottom: 14,
    },

    dayImage: {
        width: 115,
        height: 105,
        borderRadius: 7,
        objectFit: "cover",
    },

    dayHeaderContent: {
        flex: 1,
        marginLeft: 14,
        justifyContent: "center",
    },

    dayLabel: {
        fontSize: 8,
        fontWeight: 700,
        color: "#2563EB",
        marginBottom: 5,
        textTransform: "uppercase",
    },

    dayTitle: {
        fontSize: 13,
        fontWeight: 700,
        color: "#172554",
        marginBottom: 12,
    },

    dayCostContainer: {
        paddingTop: 8,
        borderTopWidth: 1,
        borderColor: "#E2E8F0",
    },

    dayCostLabel: {
        fontSize: 7,
        fontWeight: 700,
        color: "#94A3B8",
        marginBottom: 4,
    },

    dayCost: {
        fontSize: 12,
        fontWeight: 700,
        color: "#2563EB",
    },

    dayPeriodsGrid: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
    },

    dayPeriodCard: {
        width: "32%",
        padding: 9,
        backgroundColor: "#F7F9FC",
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#E5EAF2",
    },

    dayPeriodLabel: {
        fontSize: 7,
        fontWeight: 700,
        color: "#2563EB",
        marginBottom: 6,
    },

    dayPeriodText: {
        fontSize: 8,
        lineHeight: 1.5,
        color: "#475569",
    },

    daySchedule: {
        paddingTop: 12,
        borderTopWidth: 1,
        borderColor: "#E2E8F0",
    },

    dayScheduleTitle: {
        fontSize: 10,
        fontWeight: 700,
        color: "#172554",
        marginBottom: 12,
    },

    dayScheduleItem: {
        flexDirection: "row",
        marginBottom: 12,
    },

    dayScheduleTime: {
        width: 48,
        paddingTop: 1,
    },

    dayScheduleHour: {
        fontSize: 9,
        fontWeight: 700,
        color: "#2563EB",
    },

    dayScheduleContent: {
        flex: 1,
        paddingLeft: 10,
        borderLeftWidth: 2,
        borderColor: "#DBEAFE",
    },

    dayScheduleItemTitle: {
        fontSize: 9,
        fontWeight: 700,
        color: "#334155",
        marginBottom: 4,
    },

    dayScheduleDescription: {
        fontSize: 8,
        lineHeight: 1.5,
        color: "#64748B",
    },

    dayScheduleTip: {
        marginTop: 6,
        padding: 7,
        backgroundColor: "#EFF6FF",
        borderRadius: 4,
    },

    dayScheduleTipText: {
        fontSize: 7,
        lineHeight: 1.4,
        color: "#1D4ED8",
    },

});
