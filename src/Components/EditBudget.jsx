import { useState } from "react"

const EditBudget = (props) => {
	const [value, setVale] = useState(props.budget)
  return (
	<div className='budget'>
		<input type="number" className="budget-input"
		       value={value}
			   placeholder="Enter Your Budget"
			   onChange={(e) => setVale(e.target.value)}
		/>
		<button className="editbtn" onClick={() => props.handleSaveClick(value)}>Save</button>

	</div>
  )
}

export default EditBudget