import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Expense } from '../../types/ExpensesOutputTypes';


interface ExpenseFormState {
    id: string,
    amount: string,
    description: string,
    date: string,

    isAmountValid: boolean,
    isDescriptionValid: boolean,
    isDateValid: boolean,
}

const initialState: ExpenseFormState = {
    id: '',
    amount: '',
    description: '',
    date: '',
    isAmountValid: true,
    isDescriptionValid: true,
    isDateValid: true,
}


const expenseFormSlice = createSlice({
    name: 'expenseForm',
    initialState,
    reducers: {
        setExpenseFormId(state: ExpenseFormState, action: PayloadAction<string>) {
            state.id = action.payload;
        },

        setExpenseFormAmount(state: ExpenseFormState, action: PayloadAction<string>) {
            state.amount = action.payload;
        },

        setExpenseFormDescription(state: ExpenseFormState, action: PayloadAction<string>) {
            state.description = action.payload;
        },

        setExpenseFormDate(state: ExpenseFormState, action: PayloadAction<string>) {
            state.date = action.payload;
        },

        setExpenseFormAmountValid(state: ExpenseFormState, action: PayloadAction<boolean>) {
            state.isAmountValid = action.payload;
        },

        setExpenseFormDateValid(state: ExpenseFormState, action: PayloadAction<boolean>) {
            state.isDateValid = action.payload;
        },

        setExpenseFormDescriptionValid(state: ExpenseFormState, action: PayloadAction<boolean>) {
            state.isDescriptionValid = action.payload;
        },

        setAllFormFields(state: ExpenseFormState, action: PayloadAction<Expense>) {
            state.id = action.payload.id;
            state.amount = action.payload.amount.toString();
            state.description = action.payload.description;
            state.date = action.payload.date;
        },

        clearExpenseFormState(state: ExpenseFormState) {
            state.id = initialState.id;
            state.amount = initialState.amount;
            state.description = initialState.description;
            state.date = initialState.date;

            state.isAmountValid = initialState.isAmountValid;
            state.isDescriptionValid = initialState.isDescriptionValid;
            state.isDateValid = initialState.isDateValid;
        },
    }
})

export const { 
    setExpenseFormId, setExpenseFormAmount, setExpenseFormDescription, 
    setExpenseFormDate, clearExpenseFormState, setAllFormFields,
    setExpenseFormAmountValid, setExpenseFormDateValid, setExpenseFormDescriptionValid
} = expenseFormSlice.actions;

export default expenseFormSlice.reducer;