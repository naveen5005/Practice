import React from 'react'
import HOC_component from './HOC_component'

const MouseOver = ({count,handleIncrement}) => {
  return (
    <div>
      <h1 onMouseOver={handleIncrement}>MouseOver</h1>
      <h2>You mouse overed {count} times</h2>
    </div>
  )
}

export default HOC_component(MouseOver)
