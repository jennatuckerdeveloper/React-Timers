import React from 'react'
import Timer from './Timer'

const AllTimers = ({ timers }) => {
  return (
    <div className='ui list' >
      {
        timers.map((timer) => {
          return (
            <Timer key={timer.id} timer={timer} />
          )
        })
      }
    </div >
  )
}

export default AllTimers