import React from "react";
import { useAppSelector } from "../../redux/hooks";

const useRecentExpenses = () => {

    const expenses = useAppSelector(state => state.expenses.expensesArray);


    return { expenses }
}

export default useRecentExpenses;