import { Expense } from "./ExpensesOutputTypes"


export type RootStackNavigationParams = {
    ManageExpenses: {
        mode: 'add' | 'edit',
        expense?: Expense,
    },

    ExpensesOverview: {

    },
}

export type BottomTabsNavigationParams = {
    RecentExpenses: {

    },

    AllExpenses: {

    },
}