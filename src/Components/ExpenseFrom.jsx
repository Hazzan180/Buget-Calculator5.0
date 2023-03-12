import { useContext, useState } from "react";
import {AppContext} from '../Context/AppProvider';
import { v4 as uuidv4 } from 'uuid';

const ExpenseFrom = () => {
  const {dispatch} = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
		event.preventDefault();
		const expense = {
			id: uuidv4(),
			name,
			cost: parseInt(cost),
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});

		setName('');
		setCost('');
	};

  return (
    <div>
        <form onSubmit={onSubmit}>
            <div  className='form'>
            <div className='input'>
                <label>Name</label><br /><br />
                <input type="text" placeholder='Enter Expense' 
                 required='required'  value={name}
                 onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='input'>
                <label>Cost</label><br /><br />
                <input type="number" placeholder='Enter Cost' 
                 required='required' value={cost}
                 onChange={(e) => setCost(e.target.value)}/>
            </div>
            </div>
            <button className='save'>Save</button>
        </form>
    </div>
  )
}

export default ExpenseFrom