import React, { useState } from "react"
import StartStopButton from "./StartStopButton"
import EditTimer from "./EditTimer"

const Timer = ({ timer, updateTimer, deleteTimer }) => {

  const [editTimerOpen, setEditTimerOpen] = useState(false)

  return (
    <div className='ui centered card'>
      <div className='content'>
        {editTimerOpen
          ? <EditTimer timer={timer} updateTimer={updateTimer} closeEditTimer={() => setEditTimerOpen(false)} />
          : <div>
            <h3>
              {" "}
              {timer.title}
              {" "}
            </h3>
            <h5>
              {" "}
              {timer.project}
              {" "}
            </h5>
            <h1>
              {" "}
              {timer.elapsed}
              {" "}
            </h1>
            {/* <button onClick={() => setEditTimerOpen(!editTimerOpen)}>edit</button> */}

            <div className='ui container' style={{ height: "20px" }}>
              <div
                className='right floated edit icon'
              // onClick={this.props.onEditClick}
              >
                <i className='edit icon' onClick={() => setEditTimerOpen(true)} />
              </div>
              <div
                className='right floated trash icon'
              >
                <i className='trash icon' onClick={deleteTimer} />
              </div>
            </div>
            <StartStopButton />
          </div>
        }
      </div>
    </div>

  )

}

export default Timer
