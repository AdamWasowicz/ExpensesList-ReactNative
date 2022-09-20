import React from 'react';
import { useDispatch } from 'react-redux';
import { setExpenseFormAmount, setExpenseFormDate, setExpenseFormDescription } from '../../redux/features/expenseForm-slice';
import { useAppSelector } from '../../redux/hooks';


const useExpenseForm = () => {

    const dispatch = useDispatch();

    
    let amount = useAppSelector(state => state.expenseForm.amount);
    let description = useAppSelector(state => state.expenseForm.description);
    let date = useAppSelector(state => state.expenseForm.date);
    const amonutValid = useAppSelector(state => state.expenseForm.isAmountValid);
    const dateValid = useAppSelector(state => state.expenseForm.isDateValid);
    const descriptionValid = useAppSelector(state => state.expenseForm.isDescriptionValid);


    const handleAmountChange = (value: string) => {
        dispatch(setExpenseFormAmount(value));
    }

    const handleDateChange = (value: string) => {
        dispatch(setExpenseFormDate(value));
    }

    const handleDescriptionChange = (value: string) => {
        dispatch(setExpenseFormDescription(value));
    }

    
    return { 
        handleAmountChange, handleDateChange, handleDescriptionChange,
        amount, description, date,
        amonutValid, dateValid, descriptionValid
    }
}

export default useExpenseForm;