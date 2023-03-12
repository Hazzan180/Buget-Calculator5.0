import ExpenseItem from './ExpenseItem';
import { AppContext } from '../Context/AppProvider';
import { useContext, useState, useEffect } from 'react';

const ExpenseList = () => {
    const {expenses} = useContext(AppContext)

    const [filteredExpenses,SetFilteredExpenses] = useState(expenses || []);

    useEffect(() => {
      SetFilteredExpenses(expenses);
    }, [expenses]);

    const handleChange = (event) => {
      const searchResult = expenses.filter((item) => 
        item.name.toLowerCase().includes(event.target.value)
      )
      SetFilteredExpenses(searchResult)
    }

  return (
    <div>
      <input type="text" className='search-input'
             onChange={handleChange} placeholder="Type To Search"
      />
       {filteredExpenses.map((expense => {
        return  <ExpenseItem id={expense.id} 
                             name={expense.name} 
                             cost={expense.cost}/>
       })) }
    </div>
  )
}

export default ExpenseList