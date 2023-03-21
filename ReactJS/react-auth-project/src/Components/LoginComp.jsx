import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth'

const LoginComp = () => {
  const[userName,setUserName] = useState("");
  const navigate = useNavigate();
    const auth = useAuth();
    console.log(auth)

    const handleLogin =()=>{
      auth.Login(userName);
      navigate("/products");
    }
  return (
    <div>
      <h2>welcome to login component</h2>
      <form action="">
        <input type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}} /> <br /><br />
        <button type='button' className='btn btn-primary' onClick={handleLogin}>Login</button>
      </form>
    </div>
  )
}

export default LoginComp
