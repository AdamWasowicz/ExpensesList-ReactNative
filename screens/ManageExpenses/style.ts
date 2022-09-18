import { StyleSheet } from "react-native";
import appColorScheme from "../../constants/Colors";


const manageExpensesStyle = StyleSheet.create({
    root: {
        flex: 1,
        padding: 24,
        backgroundColor: appColorScheme.primary._800,
    },

    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: appColorScheme.primary._200,
        alignItems: 'center',
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
});

export default manageExpensesStyle;