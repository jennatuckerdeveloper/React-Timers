import React from 'react'
import TimerForm from './TimerForm'
import NewTimerButton from './NewTimerButton'

const HideableAddTimer = ({ newTimerOpen, toggleNewTimerOpen, addTimer }) => {

  return (
    <div>
      {newTimerOpen
        ? <TimerForm
          toggleFormOpen={toggleNewTimerOpen}
          onFormSubmit={addTimer}
        />
        : <NewTimerButton toggleNewTimerOpen={toggleNewTimerOpen} />
      }
    </div>
  )

}

export default HideableAddTimer
