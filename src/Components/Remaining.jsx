import { useContext } from "react";
import {AppContext} from '../Context/AppProvider';

const Remaining = () => {
  const {expenses, budget} = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return total += item.cost
  }, 0)

  const alerType = totalExpenses > budget ? 'alert-danger' : 'alert-success'

  return (
    <div className={`remaining ${alerType}`}>
        <h1>Remaining: £{budget - totalExpenses}</h1>
    </div>
  )
}

export default Remaining