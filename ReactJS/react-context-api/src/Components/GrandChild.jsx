import React from 'react'
import UserDetails from './UserDetails'

const GrandChild = ({users}) => {
  return (
    <div>
      <h2>Welcome to grand child component</h2>
      <UserDetails users={users}/>
    </div>
  )
}

export default GrandChild
