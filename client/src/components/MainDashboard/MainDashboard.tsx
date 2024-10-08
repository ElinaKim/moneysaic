import { BudgetSlider } from './BudgetSlider/BudgetSlider';
import { BudgetSummary } from './BudgetSummary/BudgetSummary';
import { DateSelector } from './DateSelector/DateSelector';
import TransactionList from './TransactionList/TransactionList';

export function MainDashboard() {
    return (
        <>
            <DateSelector />
            <BudgetSummary />
            <BudgetSlider />
            <TransactionList />
        </>
    )
}
