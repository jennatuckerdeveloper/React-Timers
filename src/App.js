import React from 'react'
import { useState } from 'react'
import AddTimer from './components/AddTimer'
import AllTimers from './components/AllTimers'
import NewTimerButton from './components/NewTimerButton'

// DEV hardcoded state object 

const hardcodedTimers = [
  {
    "title": "i can add a title",
    "project": "app building ",
    "id": "ce936a9f-ca3b-4345-a0fa-0fa3e3a0f87c",
    "elapsed": 442389074132,
    "runningSince": 1456468632194
  },
  {
    "title": "new timer ",
    "project": "work timers",
    "id": "de174572-0521-4971-8835-134fec7ecfea",
    "elapsed": 294914788943,
    "runningSince": null
  }
]


const App = () => {

  const [newTimerOpen, changeNewTimerOpen] = useState(false)
  const [timers, updateTimers] = useState([])

  const toggleNewTimerOpen = () => {
    const newOpenState = !newTimerOpen
    changeNewTimerOpen(newOpenState)
  }

  const addTimer = () => {
    toggleNewTimerOpen()
  }

  return (
    <div id="main" class="main ui " style={{ marginTop: '6em' }}>
      <h1 class="ui dividing centered header">Timers</h1>
      <div className="ui column centered grid padded ">
        <div className="column">
          <AllTimers timers={hardcodedTimers} />

          {newTimerOpen ?
            <AddTimer addTimer={addTimer} toggleNewTimerOpen={toggleNewTimerOpen} /> :
            <NewTimerButton toggleNewTimerOpen={toggleNewTimerOpen} />
          }


        </div>
      </div >
    </div >
  )
}




export default App
