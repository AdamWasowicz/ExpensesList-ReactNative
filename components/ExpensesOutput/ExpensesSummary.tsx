import React from "react";
import { View, Text, StyleSheet } from "react-native";
import appColorScheme from "../../constants/Colors";
import { Expense, expensesPeriodName } from "../../types/ExpensesOutputTypes";


const ExpensesSummary: React.FC<{expenses: Expense[], periodName: expensesPeriodName}>  = (props) => {

    const expensesSum = props.expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);

    return (
        <View style={style.root}>
            <Text style={style.period}>Last 8 days</Text>
            <Text style={style.sum}>${expensesSum.toFixed(2)}</Text>
        </View>
    )
};

const style = StyleSheet.create({
    root: {
        padding: 8,
        backgroundColor: appColorScheme.primary._50,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    period: {
        fontSize: 16,
        color: appColorScheme.primary._400,
    },

    sum: {
        fontSize: 24,
        fontWeight: 'bold',
        color: appColorScheme.primary._500,
    },
});

export default ExpensesSummary;