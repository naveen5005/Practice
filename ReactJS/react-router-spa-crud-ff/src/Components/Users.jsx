import React, { useEffect, useState } from 'react'
import User from './User';

const Users = () => {

    const[users,setUsers] = useState([]);
    useEffect(()=>{
        getAllUsers();
    },[])
    const getAllUsers =async () =>{
        let response = await(await fetch("http://localhost:3000/usersOne")).json();
        console.log(response);
        setUsers(response)
    }
  return (
    <div>
      <table className='table'>
        <thead className='table-dark'>
            <tr>
                <th>S.No</th>
                <th>FullName</th>
                <th>Email</th>
                <th>Gender RB</th>
                <th>Gender DD</th>
                <th>Gender CB</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {users.map((data,i)=> <User myData = {data} key={i}/>)}
        </tbody>
      </table>
    </div>
  )
}

export default Users
