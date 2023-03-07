import React from 'react'

const UserForm = ({ users, handleChange, handleButton, btnName }) => {
    return (
        <div>
            <form action="">
                <label htmlFor="">FullName</label> <br />
                <input type="text" name="fname" value={users.fname} onChange={(e) => { handleChange(e) }} /> <br />

                <label htmlFor="">Email</label> <br />
                <input type="email" name="email" value={users.email} onChange={(e) => { handleChange(e) }} /> <br />

                <label htmlFor="">Gender RadioBTN</label> <br />
                <input type="radio" name="gender" checked={users.gender === "Male"} value={"Male"} onChange={(e) => { handleChange(e) }} /> Male
                <input type="radio" name="gender" checked={users.gender === "Female"} value={"Female"} onChange={(e) => { handleChange(e) }} /> Female <br />

                <label htmlFor="">Gender DropDown</label> <br />
                <select name="genderDropdown" value={users.genderDropdown} onChange={(e) => { handleChange(e) }}>
                    <option value="">--select--</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select> <br />

                <label htmlFor="">Gender ChckBox</label> <br />
                <input type="checkbox" name="genderCheckbox" checked={users.genderCheckbox.indexOf("Male") > -1} value={"Male"} onChange={(e) => { handleChange(e) }} /> Male
                <input type="checkbox" name="genderCheckbox" checked={users.genderCheckbox.indexOf("Female") > -1} value={"Female"} onChange={(e) => { handleChange(e) }} /> Female
                <input type="checkbox" name="genderCheckbox" checked={users.genderCheckbox.indexOf("Others") > -1} value={"Others"} onChange={(e) => { handleChange(e) }} /> Others <br /><br />

                <button type='button' className='btn btn-primary' onClick={()=>{handleButton()}}>{btnName}</button>
            </form>
        </div>
    )
}

export default UserForm
