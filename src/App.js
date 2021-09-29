import React, { useState, useEffect } from 'react'
import AllTimers from './components/AllTimers'
import HideableAddTimer from './components/HideableAddTimer'

const App = () => {

  const [newTimerOpen, changeNewTimerOpen] = useState(false)
  const [timers, setTimers] = useState([])

  useEffect(() => {

    const getTimers = async () => {

      const timers = await fetchTimers()
      setTimers(timers)

    }

    getTimers()

  }, [])

  const fetchTimers = async () => {

    const res = await fetch('http://localhost:7000/timers')
    const data = await res.json()
    return data

  }

  const addTimer = async (newTimer) => {

    const completeNewTimer = {
      ...newTimer,
      elapsed: 0,
      runningSince: null
    }
    const res = await fetch('http://localhost:7000/timers', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(completeNewTimer)
    })
    const data = await res.json()
    setTimers([...timers, data])
    toggleNewTimerOpen()

  }

  const startTimer = async (timerToStart) => {

    const now = Date.now()
    const runningTimer = { ...timerToStart, runningSince: now }
    await updateTimer(runningTimer)

  }

  const stopTimer = async (timerToStop) => {

    const now = Date.now()
    const elapsedToAdd = now - timerToStop.runningSince
    const updatedElapsed = elapsedToAdd + timerToStop.elapsed
    const stoppedTimer = { ...timerToStop, runningSince: null, elapsed: updatedElapsed }
    await updateTimer(stoppedTimer)

  }

  const updateTimer = async (newTimer) => {

    const res = await fetch(`http://localhost:7000/timers/${newTimer.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newTimer)
    })
    const data = await res.json()
    setTimers(timers.map(timer => timer.id === newTimer.id ? data : timer))

  }

  const deleteTimer = async (timerId) => {

    await fetch(`http://localhost:7000/timers/${timerId}`, {
      method: 'DELETE'
    })

    removeTimerFromState(timerId)

  }

  const removeTimerFromState = (timerId) => {

    const newTimersList = timers.filter(timer => timer.id !== timerId)
    setTimers(newTimersList)

  }

  const toggleNewTimerOpen = () => {

    const newOpenState = !newTimerOpen
    changeNewTimerOpen(newOpenState)

  }

  return (
    <div id='main' className='main ui ' style={{ marginTop: '6em' }}>
      <h1 className='ui dividing centered header'>Timers</h1>
      <div className='ui column centered grid padded '>
        <div className='column'>
          <AllTimers
            timers={timers}
            startTimer={startTimer}
            stopTimer={stopTimer}
            deleteTimer={deleteTimer}
            updateTimer={updateTimer}
          />
          <HideableAddTimer
            newTimerOpen={newTimerOpen}
            toggleNewTimerOpen={toggleNewTimerOpen}
            addTimer={addTimer} />
        </div>
      </div >
    </div >
  )

}

export default App
