import { useLayoutEffect } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackNavigationParams } from "../../types/AppNavigationTypes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import { addExpense, deleteExpense, updateExpense } from "../../redux/features/expenses-slice";
import { Expense } from "../../types/ExpensesOutputTypes";
import { clearExpenseFormState, setAllFormFields, setExpenseFormAmountValid, setExpenseFormDateValid, setExpenseFormDescriptionValid } from "../../redux/features/expenseForm-slice";
import { useAppSelector } from "../../redux/hooks";
import { Alert } from "react-native";


const useManageExpenses = () => {

    const route = useRoute<RouteProp<RootStackNavigationParams, 'ManageExpenses'>>();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigationParams>>();
    const dispatch = useDispatch();


    const mode = route.params.mode;
    const expense = route.params.expense;
    const id = useAppSelector(state => state.expenseForm.id);
    const amount = useAppSelector(state => state.expenseForm.amount);
    const description = useAppSelector(state => state.expenseForm.description);
    const date = useAppSelector(state => state.expenseForm.date);


    const isFormValid = (): boolean => {
        const resultAmount = isAmountValid(amount);
        const resultDate = isDateValid(date);
        const resultDescription = isDescriptionValid(description);
        
        return resultAmount && resultDate && resultDescription;
    }

    const isDateValid = (value: string): boolean => {
        if (new Date(value).toString() === 'Invalid Date' || value == '')
        {
            dispatch(setExpenseFormDateValid(false));
            return false; 
        }
        else {
            dispatch(setExpenseFormDateValid(true));
            return true;
        }

    }

    const isAmountValid = (value: string): boolean => {
        if (isNaN(+value) || +value < 0 || value == '') {
            dispatch(setExpenseFormAmountValid(false));
            return false;
        }
        else {
            dispatch(setExpenseFormAmountValid(true));
            return true;
        }
    }

    const isDescriptionValid = (value: string): boolean => {
        if (value == '') {
            dispatch(setExpenseFormDescriptionValid(false));
            return false;
        }
        else {
            dispatch(setExpenseFormDescriptionValid(true));
            return true;
        }
    }

    const handleCancel = () => {
        handleGoBack();
    }

    const handleGoBack = () => {
        dispatch(clearExpenseFormState());
        navigation.goBack();
    }

    const handleExpenseAdd = () => {
        const newExpense: Expense = {
            id: Date.now().toLocaleString() + (Math.random() * 10).toString(),
            amount: +amount,
            description: description,
            date: date,
        }

        if (isFormValid()) {
            dispatch(addExpense(newExpense));
            handleGoBack();
        }
        else {
            Alert.alert('Invalid input', 'Please check your input values');
            return;
        }
    }

    const handleExpenseUpdate = () => {
        const updatedExpense: Expense = {
            id: id,
            amount: +amount,
            description: description,
            date: date,
        }

        if (isFormValid()) {
            dispatch(updateExpense(updatedExpense));
            handleGoBack();
        }
        else {
            Alert.alert('Invalid input', 'Please check your input values');
            return;
        }
    }

    const handleExpenseDelete = () => {
        const expenseToBeDeleted: Expense = {
            id: id,
            amount: +amount,
            description: description,
            date: date,
        }

        dispatch(deleteExpense(expenseToBeDeleted));
        handleGoBack();
    }

    const handleConfirm = () => {
        if (mode == 'edit')
            handleExpenseUpdate();
        if (mode == 'add')
            handleExpenseAdd();
    }
    

    useLayoutEffect(() => {
        navigation.setOptions({
            title: mode === 'add' ? 'Add Expense' : 'Edit Expense'
        });

        if (mode == 'edit')
            dispatch(setAllFormFields(expense!));
    }, [navigation, mode])


    return { 
        mode, handleCancel, handleExpenseDelete, 
        handleConfirm, handleExpenseAdd, handleExpenseUpdate,
     }
}

export default useManageExpenses;