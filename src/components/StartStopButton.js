import React from 'react'

const StartStopButton = ({ runningSince, startTimer, stopTimer }) => {

  return (
    <div>
      {!runningSince
        ? (
          <div
            className={'ui attached basic button green'}
            onClick={startTimer}
          >
            Start
          </div>
        )
        : (
          <div
            className={'ui attached basic button red'}
            onClick={stopTimer}
          >
            Stop
          </div>
        )}

    </div>
  )

}

export default StartStopButton
