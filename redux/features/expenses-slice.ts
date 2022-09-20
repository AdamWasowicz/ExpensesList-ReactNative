import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Expense } from '../../types/ExpensesOutputTypes'


interface ExpensesState {
    expensesArray: Expense[]
}

const initialState: ExpensesState = {
    expensesArray: [
        {
            id: 'e1',
            description: 'A pair of shoes',
            amount: 59.99,
            date: '2021-12-19'
        },
    
        {
            id: 'e2',
            description: 'A pair of trousers',
            amount: 89.99,
            date: '2022-01-05'
        },
    
        {
            id: 'e3',
            description: 'Banana',
            amount: 5.99,
            date: '2021-12-01'
        },
    
        {
            id: 'e4',
            description: 'Bingus',
            amount: 1.99,
            date: '2022-02-19'
        },
    
        {
            id: 'e5',
            description: 'Floppa',
            amount: 12.99,
            date: '2022-02-12'
        },
    ]
}


const expensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        clearExpensesState(state: ExpensesState) {
            state.expensesArray = [];
        },

        updateExpense(state: ExpensesState, action: PayloadAction<Expense>) {
            const itemId = state.expensesArray.findIndex((item) => item.id == action.payload.id);
            if (itemId != -1)
                state.expensesArray[itemId] = action.payload;
        },

        deleteExpense(state: ExpensesState, action: PayloadAction<Expense>) {
            state.expensesArray = state.expensesArray.filter((item) => item.id != action.payload.id);
        },

        addExpense(state: ExpensesState, action: PayloadAction<Expense>) {
            state.expensesArray.push(action.payload);
        }
    }
})

export const { 
    clearExpensesState, updateExpense, deleteExpense, 
    addExpense 
} = expensesSlice.actions;

export default expensesSlice.reducer;