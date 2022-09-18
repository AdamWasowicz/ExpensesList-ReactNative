export interface Expense {
    id: string
    amount: number;
    description: string,
    date: string
}

export type expensesPeriodName = 
| 'All'
| '7 days'
| '14 days'
| '21 days';
