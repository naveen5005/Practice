import React from 'react'
import GrandChild from './GrandChild'

const Child = () => {
  return (
    <div>
      <h2>Welcome to child component</h2>
      <GrandChild/>
    </div>
  )
}

export default Child
