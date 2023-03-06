import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import DeleteUser from './DeleteUser';


const Persons = () => {
    const [persons,setPersons] = useState([]);

    const navigate = useNavigate();

     useEffect(()=>{
        getDataFromServer();
    },[])
    const getDataFromServer = () => {
        axios.get("http://localhost:3000/usersOne").then((res) => {
            setPersons(res.data);
            // console.log(res.data)
        })
    }

    const deleteUser = (user)=>{
        navigate("/delete/"+user.id)
        
        console.log(user)
    }
    return (
        <div>
            <table className='table'>
                <thead className='table-dark'>
                    <tr>
                        <th>S.No</th>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Gender Dropdown</th>
                        <th>Gender checkBox</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map((data,i)=>
                        <tr key={i}>
                            <td>{data.id}</td>
                            <td>{data.fname}</td>
                            <td>{data.email}</td>
                            <td>{data.gender}</td>
                            <td>{data.genderDropdown}</td>
                            <td>{data.genderCheckbox}</td>
                            <td>
                                {/* <button type='button' className='btn btn-warning'>Edit</button> */}
                                <Link className='btn btn-warning'>Edit</Link>
                            </td>
                            <td>
                                {/* <button type='button' className='btn btn-danger' onClick={()=>{deleteUser(data)}}>Delete</button> */}
                                <Link to={"/delete/"+data.id} className='btn btn-danger' onClick={()=>{deleteUser(data)}}>Delete</Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Persons
