import React from "react";
import { View } from "react-native";
import ExpensesOutput from "../../components/ExpensesOutput";
import useAllExpensesScreen from './utils';


const AllExpensesScreen: React.FC = () => {

    const { expenses } = useAllExpensesScreen();

    return (
        <ExpensesOutput
            periodName="All"
            expenses={expenses}
        />
    )
}

export default AllExpensesScreen;