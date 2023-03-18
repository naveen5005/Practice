import React from 'react'
import { MyContextConsumer } from './MyContext'

const UserDetails = () => {
  return (
    <div>
      <h2>Welcome to User Details component</h2>
      <MyContextConsumer>
        {(userInfo)=>{
          return  <ul>
                {userInfo.map((data,i)=>(
                    <li key={i}>{data}</li>
                ))}
            </ul>
        }}
      </MyContextConsumer>
    </div>
  )
}

export default UserDetails
