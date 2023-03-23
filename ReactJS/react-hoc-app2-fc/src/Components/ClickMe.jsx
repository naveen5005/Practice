import React from 'react'
import HOC_component from './HOC_component'

const ClickMe = ({count,handleIncrement}) => {
  return (
    <div>
      <button type='button' onClick={handleIncrement}>Click Me</button>
      <h2>You clicked me {count} times</h2>
    </div>
  )
}

export default HOC_component(ClickMe)
