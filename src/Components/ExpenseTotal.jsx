import { useContext } from "react";
import {AppContext} from '../Context/AppProvider';

const ExpenseTotal = () => {
  const {expenses} = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return total += item.cost
  }, 0)
  return (
    <div className='expenseTotal'>
        <h1>Spent So Far: £{totalExpenses}</h1>
    </div>
  )
}

export default ExpenseTotal