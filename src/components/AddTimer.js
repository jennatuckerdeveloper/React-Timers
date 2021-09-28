import React from 'react'
import { useState } from 'react'


const AddTimer = ({ addTimer, toggleNewTimerOpen }) => {

  const [title, setTitle] = useState('')
  const [project, setProject] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (title !== '') {
      addTimer({ title, project })
      setTitle('')
      setProject('')
    }
  }

  return (
    <div className="ui centered card">
      <div className="content">
        <form className="ui form" onSubmit={onSubmit}>
          <div className="field">
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="field">

            <label>Project</label>
            <input type="text" value={project} onChange={(e) => setProject(e.target.value)} />
          </div>
          <div className="ui two bottom attached buttons">
            <button className="ui basic blue button" type='submit'>Add</button>
            <button className="ui basic red button" onClick={toggleNewTimerOpen}>Cancel</button>
          </div>
        </form >
      </div>
    </div>
  )
}

export default AddTimer
