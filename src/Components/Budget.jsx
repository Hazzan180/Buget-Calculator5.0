import { useContext, useState } from "react";
import {AppContext} from '../Context/AppProvider';
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";

const Budget = () => {
  const {budget, dispatch} = useContext(AppContext);
  const [isEdited, setIsEdited] = useState(false);

  const handleEditClick = () => {
    setIsEdited(true);
  }

  const handleSaveClick = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    })
    setIsEdited(false)
  }

  return (
    <div>
      {isEdited ? 
      <EditBudget handleSaveClick={handleSaveClick} budget={budget}/> :
      <ViewBudget  handleEditClick={handleEditClick} budget={budget}/>
      }
    </div>
  )
}

export default Budget