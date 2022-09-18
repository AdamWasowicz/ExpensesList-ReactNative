import React from "react";
import { useAppSelector } from "../../redux/hooks";


const useAllExpensesScreen = () => {

    const expenses = useAppSelector(state => state.expenses.expensesArray);


    return { expenses }
}

export default useAllExpensesScreen;