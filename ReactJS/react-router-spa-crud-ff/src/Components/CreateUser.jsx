import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserForm from './UserForm'

const CreateUser = () => {
    const[users,setUsers] = useState({
        fname:"",
        email:"",
        gender:"",
        genderDropdown:"",
        genderCheckbox:[]
    });
    const navigate = useNavigate();

    const handleChange =(e) =>{
        console.log(e)
        let newUser ={...users};
        if(e.target.name === "genderCheckbox"){
            let allCheckboxes = [...users.genderCheckbox];
            if(allCheckboxes.length === 0){
                allCheckboxes.push(e.target.value)
            }else{
                let check = allCheckboxes.find((ele)=> ele === e.target.value);
                if(check){
                    allCheckboxes = allCheckboxes.filter((ele)=> ele !== e.target.value);
                }else{
                    allCheckboxes.push(e.target.value);
                }
            }
            newUser[e.target.name] = allCheckboxes
        }
        // else if(e.target.name === "genderDropDown" && e.target.isConnected === true){
        //     newUser[e.target.name] = e.target.value;
        // }
        else{
            newUser[e.target.name] = e.target.value
        }
        setUsers(newUser);
    }
    const addUser =() =>{
        console.log(users);
        fetch("http://localhost:3000/usersOne/",{
            method : 'POST',
            body : JSON.stringify(users),
            headers : {
                'Content-type' : 'application/json'
            }
        }).then(()=>{
            navigate("/");
        })
    }
  return (
    <div>
      {/* <h2>welcome to create user</h2> */}
      <br /><br />
      <UserForm users ={users} handleChange ={handleChange} handleButton = {addUser} btnName ={"create user"}/>
    </div>
  )
}

export default CreateUser
