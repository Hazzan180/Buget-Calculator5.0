import React from 'react'

const ViewBudget = (props) => {
  return (
	<div className='budget'>
		<h1>Budget: £{props.budget}</h1>
        <button className='editbtn' onClick={props.handleEditClick}>Edit</button>
	</div>
  )
}

export default ViewBudget