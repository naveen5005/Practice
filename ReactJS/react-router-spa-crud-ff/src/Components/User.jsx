import React from 'react'
import { useNavigate } from 'react-router-dom'

const User = ({ myData }) => {
    const navigate = useNavigate();

    const deleteUser =(user) =>{
        navigate("/delete/"+user.id);
    }
    const editUser = (user) =>{
        navigate("/edit/"+user.id);
    }
    return (
        <tr>
            <td>{myData.id}</td>
            <td>{myData.fname}</td>
            <td>{myData.email}</td>
            <td>{myData.gender}</td>
            <td>{myData.genderDropdown}</td>
            <td>{myData.genderCheckbox}</td>
            <td>
                <button type='button' className='btn btn-warning' onClick={()=>{editUser(myData)}}>Edit</button>
            </td>
            <td>
                <button type='button' className='btn btn-danger' onClick={()=>{deleteUser(myData)}}>Delete</button>
            </td>
        </tr>
    )
}

export default User
