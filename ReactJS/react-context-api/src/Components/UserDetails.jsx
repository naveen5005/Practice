import React from 'react'

const UserDetails = ({users}) => {
  return (
    <div>
      <h2>Welcome to User details component</h2>
      {users.map((data,i)=>{
        return <li key={i}>{data}</li>
      })}
    </div>
  )
}

export default UserDetails
