import React from 'react';
import ExpensesOutput from '../../components/ExpensesOutput';
import useRecentExpenses from './utils';


const RecentExpensesScreen: React.FC = () => {

    const { expenses } = useRecentExpenses();

    return (
        <ExpensesOutput
            periodName='21 days'
            expenses={expenses}
        />
    )
}

export default RecentExpensesScreen;