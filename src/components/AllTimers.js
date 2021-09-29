import React from 'react'
import Timer from './Timer'

const AllTimers = ({ timers, startTimer, stopTimer, deleteTimer, updateTimer }) => {

  return (
    <div className='ui list' >
      {
        timers.map((timer) => {

          return (
            <Timer
              key={timer.id}
              timer={timer}
              startTimer={startTimer}
              stopTimer={stopTimer}
              updateTimer={updateTimer}
              deleteTimer={() => {

                deleteTimer(timer.id)

              }} />
          )

        })
      }
    </div >
  )

}

export default AllTimers
