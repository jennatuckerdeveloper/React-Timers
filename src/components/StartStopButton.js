import React from 'react'

const StartStopButton = ({ running }) => {

  return (

    <div
      className={`ui attached basic button ${running ? 'red' : 'green'}`}>
      {running ? 'Start' : 'Stop'}
    </div>
  )

}

export default StartStopButton
