import React from 'react'
import {MdClose} from 'react-icons/md'
import { useContext} from "react";
import {AppContext} from '../Context/AppProvider';

const ExpenseItem = (props) => {
  const {dispatch} = useContext(AppContext);
  
  const handleDeletedExpense = () => {
    dispatch({type:'DELETED_EXPENSE', payload:props.id})
  }
  return (
    <div className='expensitem'>
        {props.name}
        <div>
            <span>{props.cost}</span>
            <MdClose className='del' onClick={handleDeletedExpense}/>
        </div>
    </div>
  )
}

export default ExpenseItem