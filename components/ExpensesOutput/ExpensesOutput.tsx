import React from "react";
import { View, StyleSheet, Text } from "react-native";
import appColorScheme from "../../constants/Colors";
import { Expense, expensesPeriodName } from "../../types/ExpensesOutputTypes";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const ExpensesOutput: React.FC<{expenses: Expense[], periodName: expensesPeriodName}> = (props) => {


    if (props.expenses.length === 0)
        return <NoExpensesOutput textContent="Woah...looks like you have no expenses"/>

    return (
        <View style={style.root}>
            <ExpensesSummary
                expenses={props.expenses}
                periodName={props.periodName}
            />
            <ExpensesList
                expenses={props.expenses}
            />
        </View>
    )
};

const NoExpensesOutput: React.FC<{textContent: string}> = (props) => {

    return (
        <View style={style.root}>
            <Text style={style.infoText}>{props.textContent}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: appColorScheme.primary._700,
    },

    infoText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32,
    }
});

export default ExpensesOutput;