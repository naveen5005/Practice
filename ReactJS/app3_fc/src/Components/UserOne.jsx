import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserOne = () => {

    const [users, setUsers] = useState({
        fname: "",
        email: "",
        gender: "",
        genderDropdown: "",
        genderCheckbox: []
    })
    const [allUsers, setAllUsers] = useState([]);
    const [isEdit, setIsEdit] = useState(false)

    const [formErrors, setFormErrors] = useState({});

    const validate = (user) => {
        console.log(user);
        const errors = {};
        const regexEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
        const regexFullName = /^[a-zA-Z]{2,40} [a-zA-Z]{2,40}$/
        if (!user.fname) {
            errors.fname = "fullName is required!"
        } else {
            if (!regexFullName.test(users.fname)) {
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
        if (users.genderCheckbox.length === 0) {
            errors.genderCheckbox = "GenderCheckBox is required!"
        }
        return errors
    }

    const handleChange = (e) => {
        // console.log(e)
        let newUser = { ...users };
        if (e.target.name === "genderCheckbox") {
            let allCheckboxes = [...users.genderCheckbox];
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
        setUsers(newUser);
    }

    const addUser = () => {
        console.log(typeof users.email)
        console.log(validate(users).fname)
        setFormErrors(validate(users));

        if (users.fname.length > 0 && (users.email.length > 0 && users.email.endsWith("@gmail.com")) && users.gender.length > 0
            && users.genderCheckbox.length > 0 && users.genderDropdown.length > 0) {
            axios.post("http://localhost:3001/usersOne/", users).then(() => {
                getDataFromServer();
                clearForm();
            }).catch(() => {
                alert("Server is busy, please try after sometime")
            })
        } else {
            alert("Please fill all the required values")
        }


    }

    const editUser = (user, i) => {
        setUsers(user)
        setIsEdit(true)
    }

    const deleteUser = (user) => {
        axios.delete("http://localhost:3001/usersOne/" + user.id).then(() => {
            getDataFromServer();
        })
    }

    const updateUser = () => {
        setFormErrors(validate(users));
        if (users.fname.length > 0 && (users.email.length > 0 && users.email.endsWith("@gmail.com")) && users.gender.length > 0
            && users.genderCheckbox.length > 0 && users.genderDropdown.length > 0) {
            axios.put("http://localhost:3001/usersOne/" + users.id, users).then(() => {
                setIsEdit(false);
                clearForm();
                getDataFromServer();
            }).catch(() => {
                alert("Server is busy, please try after sometime")
            })
            clearForm();
        } else {
            alert("Please fill all the required values")
        }
    }
    const clearForm = () => {
        setUsers({
            fname: "",
            email: "",
            gender: "",
            genderDropdown: "",
            genderCheckbox: []
        })
    }
    useEffect(() => {
        getDataFromServer();
    }, [])

    const getDataFromServer = () => {
        axios.get("http://localhost:3001/usersOne").then((response) => {
            setAllUsers(response.data);
        })
    }
    return (
        <div className='row'>
            <div className="col-4">
                <form action="">
                    <label htmlFor="">Full Name</label> <br />
                    <input type="text" name="fname" value={users.fname} onChange={(e) => { handleChange(e) }} /> <br />
                    <p style={{ color: "red" }}>{formErrors.fname}</p>

                    <label htmlFor="">Email</label> <br />
                    <input type="email" name="email" value={users.email} onChange={(e) => { handleChange(e) }} />
                    <p style={{ color: "red" }}>{formErrors.email}</p>

                    <label htmlFor="">Gender Radio button</label> <br />
                    <input type="radio" name="gender" checked={users.gender === "Male"} value={"Male"} onChange={(e) => { handleChange(e) }} /> Male
                    <input type="radio" name="gender" checked={users.gender === "Female"} value={"Female"} onChange={(e) => { handleChange(e) }} /> Female <br />
                    <p style={{ color: "red" }}>{formErrors.gender}</p>

                    <label htmlFor="">Gender DropDown</label> <br />
                    <select name="genderDropdown" value={users.genderDropdown} onChange={(e) => { handleChange(e) }}>
                        <option value="">--select--</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select> <br />
                    <p style={{ color: "red" }}>{formErrors.genderDropdown}</p>

                    <label htmlFor="">Gender checkBox</label> <br />
                    <input type="checkbox" name="genderCheckbox" checked={users.genderCheckbox.indexOf("Male") > -1} value={"Male"} onChange={(e) => { handleChange(e) }} /> Male
                    <input type="checkbox" name="genderCheckbox" checked={users.genderCheckbox.indexOf("Female") > -1} value={"Female"} onChange={(e) => { handleChange(e) }} /> Female
                    <input type="checkbox" name="genderCheckbox" checked={users.genderCheckbox.indexOf("Others") > -1} value={"Others"} onChange={(e) => { handleChange(e) }} /> Others
                    <p style={{ color: "red" }}>{formErrors.genderCheckbox}</p>

                    {isEdit
                        ?
                        <button type='button' className='btn btn-primary' onClick={() => { updateUser() }}>Update User</button>
                        :
                        <button type='button' className='btn btn-primary' onClick={() => { addUser() }}>Add User</button>}
                </form>
            </div>
            <div className="col-8">
                <table className='table'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Gender drpdwn</th>
                            <th>Gender chk</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers.map((data, i) => {
                            return <tr key={i}>
                                <td>{data.fname}</td>
                                <td>{data.email}</td>
                                <td>{data.gender}</td>
                                <td>{data.genderDropdown}</td>
                                <td>{data.genderCheckbox}</td>
                                <td>
                                    <button type='button' className='btn btn-warning' onClick={() => { editUser(data, i) }}>Edit</button>
                                </td>
                                <td>
                                    <button type='button' className='btn btn-danger' onClick={() => { deleteUser(data) }}>Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserOne
