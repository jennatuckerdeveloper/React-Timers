import React from 'react'

const AddEditTimer = ({ toggleNewTimerOpen }) => {
  return (
    <div className='ui basic content center aligned segment'>
      <button className='ui basic button icon' onClick={toggleNewTimerOpen}>
        <i className="plus icon" />
      </button>
    </div>
  )
}

export default AddEditTimer
