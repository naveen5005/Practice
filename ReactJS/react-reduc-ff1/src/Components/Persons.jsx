import React from 'react'
import { useState,useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addDataFromServerAction, deleteDataFromServerAction, getDataFromServerAction, updateDataFromServerAction } from '../Store/Actions/personActions'

const Persons = () => {
    const data = useSelector((state)=> state.persons)
    const dispatch = useDispatch();

    const[person,setPerson] = useState({
        fname:"",
        lname:"",
        email:""
    })
    const[isEdit,setIsEdit] = useState(false)
    useEffect(() => {
        dispatch(getDataFromServerAction())
    }, [])


const handleChange = (e) =>{
    let newPerson = {...person};
    newPerson[e.target.name] = e.target.value;
    setPerson(newPerson);
}
const addPerson=()=>{
    console.log("Action Triggered");
    dispatch(addDataFromServerAction(person));
    clearForm();
}
const deletePerson =(element) =>{
    dispatch(deleteDataFromServerAction(element))
}
const editPerson =(element)=>{
    setPerson(element);
    setIsEdit(true);
}
const updatePerson = () =>{
    // setPerson(person)
    dispatch(updateDataFromServerAction(person));
    clearForm();
    setIsEdit(false)
}
const clearForm=()=>{
    setPerson({
        fname:"",
        lname:"",
        email:""
    })
}
  return (
    <div className='container'>
      <div className="row">
        <div className="col-4">
            <form action="">
                <label htmlFor="">First Name</label> <br />
                <input type="text" name="fname" value={person.fname} onChange ={(e)=>handleChange(e)}/> <br />

                <label htmlFor="">Last Name</label> <br />
                <input type="text" name="lname" value={person.lname} onChange ={(e)=>handleChange(e)}/> <br />

                <label htmlFor="">Email</label> <br />
                <input type="email" name="email" value={person.email} onChange ={(e)=>handleChange(e)}/> <br /> <br />

                {isEdit ? <button type='button' className='btn btn-primary' onClick={()=>updatePerson()}>Update Person</button>
                : <button type='button' className='btn btn-primary' onClick={()=>addPerson()}>Add Person</button>}
                                
            </form>
        </div>
        <div className="col-8">
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.persons.map((element,i) => 
                    <tr key={i}>
                        <td>{element.fname}</td>
                        <td>{element.lname}</td>
                        <td>{element.email}</td>
                        <td>
                            <button type='button' className='btn btn-warning' onClick={()=>editPerson(element)}>Edit</button>
                        </td>
                        <td>
                            <button type='button' className='btn btn-danger' onClick={()=>deletePerson(element)}>Delete</button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default Persons
