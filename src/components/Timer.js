import React, { useState, useReducer } from 'react'
import StartStopButton from './StartStopButton'
import EditTimer from './EditTimer'
import { renderElapsedString } from '../helpers'

const Timer = ({ timer, startTimer, stopTimer, updateTimer, deleteTimer }) => {

  const [editTimerOpen, setEditTimerOpen] = useState(false)
  const intitialValue = renderElapsedString(timer.elapsed, timer.runningSince)
  const [displayElapsed, dispatch] = useReducer((state, action) => {

    if (timer.runningSince) {

      return renderElapsedString(timer.elapsed, timer.runningSince)

    }
    return state

  }, intitialValue)
  setInterval(dispatch, 50)

  return (
    <div className='ui centered card'>
      <div className='content'>
        {editTimerOpen
          ? <EditTimer timer={timer} updateTimer={updateTimer} closeEditTimer={() => setEditTimerOpen(false)} />
          : <div>
            <h3>
              {timer.title}
            </h3>
            <h5>
              {timer.project}
            </h5>
            <h1>
              {displayElapsed}
            </h1>
            <div className='ui container' style={{ height: '20px' }}>
              <div
                className='right floated edit icon'
              >
                <i className='edit icon' onClick={() => setEditTimerOpen(true)} />
              </div>
              <div
                className='right floated trash icon'
              >
                <i className='trash icon' onClick={deleteTimer} />
              </div>
            </div>
            <StartStopButton
              runningSince={timer.runningSince}
              startTimer={() => startTimer(timer)}
              stopTimer={() => stopTimer(timer)}
            />
          </div>
        }
      </div>
    </div>

  )

}

export default Timer
