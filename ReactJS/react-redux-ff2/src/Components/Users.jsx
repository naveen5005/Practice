import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addDataFromServerAction, deleteDataFromServerAction, getDataFromServerAction, updateDataFromServerAction } from '../Store/Actions/userActions';

const Users = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.user.users)

    const [user, setUser] = useState({
        fname: "",
        email: "",
        gender: "",
        genderDropdown: "",
        genderCheckbox: []
    });
    const [isEdit, setIsEdit] = useState(false)
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        dispatch(getDataFromServerAction())
    }, []);
    const validate = (user) => {
        console.log(user);
        const errors = {};
        const regexEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
        const regexFullName = /^[a-zA-Z]{2,40} [a-zA-Z]{2,40}$/
        if (!user.fname) {
            errors.fname = "fullName is required!"
        } else {
            if (!regexFullName.test(user.fname)) {
                errors.fname = "Two or more names, with 3 characters min and 40 max"
            }
        }
        if (!user.email) {
            errors.email = "Email is required!"
        } else {
            if (!regexEmail.test(user.email)) {
                errors.email = "This is not a valid email format. ends with @gmail.com"
            }
        }
        if (!user.gender) {
            errors.gender = "Gender is required!"
        }
        if (!user.genderDropdown) {
            errors.genderDropdown = "GenderDropDown is required!"
        }
        if (user.genderCheckbox.length === 0) {
            errors.genderCheckbox = "GenderCheckBox is required!"
        }
        return errors
    }

    const handleChange = (e) => {
        // console.log(e)
        let newUser = { ...user };
        if (e.target.name === "genderCheckbox") {
            let allCheckboxes = [...user.genderCheckbox];
            if (allCheckboxes.length === 0) {
                allCheckboxes.push(e.target.value)
            }
            else {
                let check = allCheckboxes.find((data) => data == e.target.value);
                if (check) {
                    allCheckboxes = allCheckboxes.filter((data) => data !== e.target.value);
                }
                else {
                    allCheckboxes.push(e.target.value);
                }
            }
            newUser[e.target.name] = allCheckboxes
        }
        else {
            newUser[e.target.name] = e.target.value;
        }
        setUser(newUser);
    }
    const addUser = () => {
        console.log(user)
        setFormErrors(validate(user));

        if (user.fname.length > 0 && (user.email.length > 0 && user.email.endsWith("@gmail.com")) && user.gender.length > 0
            && user.genderCheckbox.length > 0 && user.genderDropdown.length > 0) {
            dispatch(addDataFromServerAction(user));
            clearForm()
        } else {
            alert("Please fill all the required values")
        }
    }
    const deleteUser = (user) => {
        dispatch(deleteDataFromServerAction(user))
    }
    const editUser = (user) => {
        setUser(user);
        setIsEdit(true);
    }
    const updateUser = () => {
        setFormErrors(validate(user));

        if (user.fname.length > 0 && (user.email.length > 0 && user.email.endsWith(".com")) && user.gender.length > 0
            && user.genderCheckbox.length > 0 && user.genderDropdown.length > 0) {
            dispatch(updateDataFromServerAction(user));
            setIsEdit(false);
            clearForm();
        } 
        
        // else {
        //     alert("Please fill all the required values")
        // }

    }
    const clearForm = () => {
        setUser({
            fname: "",
            email: "",
            gender: "",
            genderDropdown: "",
            genderCheckbox: []
        })
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-4">
                    <form action="">
                        <label htmlFor="">FullName</label> <br />
                        <input type="text" name="fname" value={user.fname} onChange={(e) => handleChange(e)} /> <br />
                        <p style={{ color: "red" }}>{formErrors.fname}</p>

                        <label htmlFor="">Email</label> <br />
                        <input type="email" name="email" value={user.email} onChange={(e) => handleChange(e)} /> <br />
                        <p style={{ color: "red" }}>{formErrors.email}</p>

                        <label htmlFor="">gender Radio btn</label> <br />
                        <input type="radio" name="gender" checked={user.gender === "Male"} value={"Male"} onChange={(e) => handleChange(e)} /> Male
                        <input type="radio" name="gender" checked={user.gender === "Female"} value={"Female"} onChange={(e) => handleChange(e)} /> Female <br />
                        <p style={{ color: "red" }}>{formErrors.gender}</p>

                        <label htmlFor="">gender dropdown</label> <br />
                        <select name="genderDropdown" value={user.genderDropdown} onChange={(e) => handleChange(e)}>
                            <option value="">--select the gender--</option>
                            <option value="Male" >Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select> <br />
                        <p style={{ color: "red" }}>{formErrors.genderDropdown}</p>


                        <label htmlFor="">gender checkbox</label> <br />
                        <input type="checkbox" name="genderCheckbox" checked={user.genderCheckbox.indexOf("Male") > -1} onChange={(e) => handleChange(e)} value={"Male"} /> Male <br />
                        <input type="checkbox" name="genderCheckbox" checked={user.genderCheckbox.indexOf("Female") > -1} onChange={(e) => handleChange(e)} value={"Female"} /> Female <br />
                        <input type="checkbox" name="genderCheckbox" checked={user.genderCheckbox.indexOf("Others") > -1} onChange={(e) => handleChange(e)} value={"Others"} /> Others <br /> <br />
                        <p style={{ color: "red" }}>{formErrors.genderCheckbox}</p>

                        {isEdit ? <button type='button' className='btn btn-primary' onClick={() => updateUser()}>UpdateUser</button>
                            : <button type='button' className='btn btn-primary' onClick={() => addUser()}>AddUser</button>}
                    </form>
                </div>
                <div className="col-8">
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th>FullName</th>
                                <th>Email</th>
                                <th>Gender Radio</th>
                                <th>Gender dropdown</th>
                                <th>Gender checkbox</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((element, i) => {
                                return <tr key={i}>
                                    <td>{element.fname}</td>
                                    <td>{element.email}</td>
                                    <td>{element.gender}</td>
                                    <td>{element.genderDropdown}</td>
                                    <td>{element.genderCheckbox}</td>
                                    <td>
                                        <button type='button' className='btn btn-warning' onClick={() => editUser(element)}>Edit</button>
                                    </td>
                                    <td>
                                        <button type='button' className='btn btn-danger' onClick={() => deleteUser(element)}>Delete</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Users
