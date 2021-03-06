import React, { useState } from 'react'

const TimerForm = ({ onFormSubmit, toggleFormOpen }) => {

  const [title, setTitle] = useState('')
  const [project, setProject] = useState('')

  const buttonText = onFormSubmit.name === 'addTimer' ? 'Create' : 'Update'

  const onSubmit = (e) => {

    e.preventDefault()
    if (title !== '') {

      onFormSubmit({ title, project })
      setTitle('')
      setProject('')
      toggleFormOpen()

    }

  }

  return (
    <div className='ui centered card'>
      <div className='content'>
        <form className='ui form' onSubmit={onSubmit}>
          <div className='field'>
            <label>Title</label>
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className='field'>

            <label>Project</label>
            <input type='text' value={project} onChange={(e) => setProject(e.target.value)} />
          </div>
          <div className='ui two bottom attached buttons'>
            <button className='ui basic blue button' type='submit'>{buttonText}</button>
            <button className='ui basic red button' onClick={toggleFormOpen}>Cancel</button>
          </div>
        </form >
      </div>
    </div>
  )

}

export default TimerForm
