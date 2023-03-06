import React, { useEffect } from 'react'
import axios from 'axios'

const DeleteUser = () => {

    useEffect(()=>{
        getDataFromServer();
    },[])

    const getDataFromServer = () => {
        axios.get("http://localhost:3000/usersOne").then((res) => {
            // setPersons(res.data);
            // console.log(res.data)
        })
    }

    const confirmDelete = () =>{
        // axios.delete("http://localhost:3000/usersOne/")
        // Navigate("/")
    }
  return (
    <div>
        <h2>Welcome to Delete User Page..</h2>
        <form action="">
            <label htmlFor="">FirstName</label><br />
            <input type="text" name="fname" id="" /> <br />

            <label htmlFor="">Email</label> <br />
            <input type="email" name="" id="" /> <br />

            <label htmlFor="">Gender radio</label> <br />
            <input type="radio" name="gender" id="" />Male
            <input type="radio" name="gender" id="" />Female <br />

            <label htmlFor="">Gender Dropdown</label> <br />
            <select name="" id="">
                <option value="">--select the value--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select> <br />

            <label htmlFor="">Gender checkBox</label> <br />
            <input type="checkbox" name="" id="" /> Male <br />
            <input type="checkbox" name="" id="" /> Female <br />
            <input type="checkbox" name="" id="" /> Others <br />

            <button type='button' className='btn btn-danger' onClick={()=>{confirmDelete()}}>Confirm Delete</button>
        </form>
    </div>
  )
}

export default DeleteUser
