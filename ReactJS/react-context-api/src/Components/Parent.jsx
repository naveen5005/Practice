import React from 'react'
import Child from './Child'

const Parent = ({users}) => {
  return (
    <div>
      <h2>Welcome to Parent Component</h2>
      <Child users={users}/>
    </div>
  )
}

export default Parent
