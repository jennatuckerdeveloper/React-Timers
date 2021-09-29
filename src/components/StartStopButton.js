import React from 'react'

const StartStopButton = ({ running, onClick }) => {

  const buttonColor = running ? 'red' : 'green'
  const buttonText = running ? 'Stop' : 'Start'
  return (
    <div>
      <div
        className={`ui attached basic button ${buttonColor}`}
        onClick={onClick}
      >
        {buttonText}
      </div>

    </div >
  )

}

export default StartStopButton
