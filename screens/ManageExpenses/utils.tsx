import React, { useLayoutEffect } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackNavigationParams } from "../../types/AppNavigationTypes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { addExpense, deleteExpense, updateExpense } from "../../redux/features/expenses-slice";
import { Expense } from "../../types/ExpensesOutputTypes";


const useManageExpenses = () => {

    const route = useRoute<RouteProp<RootStackNavigationParams, 'ManageExpenses'>>();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigationParams>>();
    const dispatch = useDispatch();
    const expenses = useAppSelector(state => state.expenses.expensesArray);


    const mode = route.params.mode;
    const expense = route.params.expense;
    const dummyNewExpense: Expense = {
        id: Date.now().toLocaleString() + (Math.random() * 10).toString(),
        amount: 12.05,
        description: 'Big Bingus',
        date: '2022-08-12',
    }
    

    const handleDelete = () => {
        dispatch(deleteExpense(expense!));
        navigation.goBack();
    }

    const handleCancel = () => {
        navigation.goBack();
    }

    const handleConfirm = () => {
        if (mode == 'edit')
            dispatch(updateExpense(expense!));
        if (mode == 'add')
            dispatch(addExpense(dummyNewExpense));
        navigation.goBack();
    }
    

    useLayoutEffect(() => {
        navigation.setOptions({
            title: mode === 'add' ? 'Add Expense' : 'Edit Expense'
        });
    }, [navigation, mode])


    return { mode, expense, handleDelete, handleCancel, handleConfirm }
}

export default useManageExpenses;