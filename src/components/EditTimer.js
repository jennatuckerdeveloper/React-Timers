import React, { useState } from 'react'

const EditTimer = ({ timer, updateTimer, closeEditTimer }) => {

  const [title, setTitle] = useState('')
  const [project, setProject] = useState('')

  const onSubmit = (e) => {

    e.preventDefault()
    if (title !== '') {

      updateTimer({ ...timer, title, project })
      setTitle('')
      setProject('')
      closeEditTimer()

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
          <div>
            <label>Project</label>
            <input type='text' value={project} onChange={(e) => setProject(e.target.value)} />
          </div>
          <div className='ui two bottom attached buttons'>
            <button className='ui basic blue button' type='submit'>Edit</button>
            <button className='ui basic red button' onClick={closeEditTimer}>Cancel</button>
          </div>
        </form >
      </div>
      {' '}
    </div>
  )

}
export default EditTimer
