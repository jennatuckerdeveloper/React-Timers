import React, { useState } from 'react'
import Timer from './Timer'
import TimerForm from './TimerForm'

const EditableTimer = (props) => {

  const [editTimerOpen, setEditTimerOpen] = useState(false)

  const toggleFormOpen = () => setEditTimerOpen(!editTimerOpen)

  return (
    <div className='ui centered card'>
      <div className='content'>
        {editTimerOpen
          ? <TimerForm
            toggleFormOpen={toggleFormOpen}
            onFormSubmit={({ title, project }) => props.updateTimer({ ...props.timer, title, project })}
          />

          : <Timer
            {...props}
            toggleFormOpen={toggleFormOpen}
          />
        }
      </div>
    </div>

  )

}

export default EditableTimer
