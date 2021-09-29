import React from "react"
import Timer from "./Timer"

const AllTimers = ({ timers, deleteTimer, updateTimer }) => {

  return (
    <div className='ui list' >
      {
        timers.map((timer) => {

          return (
            <Timer key={timer.id} timer={timer} updateTimer={updateTimer} deleteTimer={() => {

              deleteTimer(timer.id)

            }} />
          )

        })
      }
    </div >
  )

}

export default AllTimers
