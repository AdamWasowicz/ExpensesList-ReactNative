import { configureStore } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';

//Reducers
import expensesReducer from './features/expenses-slice';
import expenseFormReducer from './features/expenseForm-slice';

enableMapSet();

//Store
export const store = configureStore({
    reducer: {
        expenses: expensesReducer,
        expenseForm: expenseFormReducer,
    }
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;