import React from 'react'
import Parent from './Parent'

const Main = ({users}) => {
  return (
    <div>
      <h2>Welcome to Main component</h2>
      <Parent users = {users}/>
    </div>
  )
}

export default Main
