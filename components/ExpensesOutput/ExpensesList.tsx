import React from "react";
import { View, Text, FlatList, ListRenderItemInfo } from "react-native";
import { Expense } from "../../types/ExpensesOutputTypes";
import ExpensesItem from "./ExpensesItem";


const ExpensesList: React.FC<{expenses: Expense[]}> = (props) => {

    return (
        <FlatList
            data={props.expenses}
            renderItem={renderExpenseItem}
            keyExtractor={(item) => item.id}
        />
    )
}

const renderExpenseItem = (itemData: ListRenderItemInfo<Expense>) => {
    return <ExpensesItem itemData={itemData}/>     
}

export default ExpensesList;