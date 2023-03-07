import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import UserForm from './UserForm';

const UpdateUser = () => {
    const[users,setUsers] = useState({
        fname:"",
        email:"",
        gender:"",
        genderDropdown:"",
        genderCheckbox:[]
    });
    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=>{
        fetch("http://localhost:3000/usersOne/"+params.id).then((res) => res.json())
        .then((data)=>{
            setUsers(data)
        })
    },[])
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
        else{
            newUser[e.target.name] = e.target.value
        }
        setUsers(newUser);
    }
    const confirmUpdate =() =>{
        console.log(users);
        fetch("http://localhost:3000/usersOne/" + params.id,{
            method : 'PUT',
            body : JSON.stringify(users),
            headers :{
                'Content-Type' : 'application/json'
            }
        }).then(()=>{
            navigate("/");
        })
    }
  return (
    <div>
      {/* <h2>welcome to create user</h2> */}
      <br /><br />
      <UserForm users ={users} handleChange ={handleChange} handleButton = {confirmUpdate} btnName ={"Update User"}/>
    </div>
  )
}

export default UpdateUser
