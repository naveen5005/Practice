import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUserAction, deleteUserAction, getDataFromServerAction, updateUserAction } from '../Store/Actions/userActions'

class User extends Component {
    constructor(props) {
        // console.log(props)
        super(props)

        this.state = {
            user: {
                fname: "",
                email: "",
                gender: "",
                genderCheckbox: [],
                genderDropdown: ""
            },
            isEditIndex: null,
            isEdit: false
        }
    }
    componentDidMount() {
        this.props.getUsers();
        // console.log(this.props.getUsers())
    }
    handleChange = (e) => {
        console.log(e);
        let newUser = { ...this.state.user };
        if (e.target.name === "gender" && e.target.checked === true) {
            newUser[e.target.name] = e.target.value;
            this.setState({ user: newUser })
        }
        else if (e.target.name === "genderDropdown" && e.target.selected === true) {
            newUser[e.target.name] = e.target.value;
            this.setState({ user: newUser })
        }
        else if (e.target.name === "genderCheckbox") {
            let allCheckboxes = [...this.state.user.genderCheckbox]
            if (allCheckboxes.length === 0) {
                allCheckboxes.push(e.target.value)
            } else {
                let check = allCheckboxes.find((element) => element == e.target.value);
                if (check) {
                    allCheckboxes = allCheckboxes.filter((chk) => chk !== e.target.value)
                }
                else {
                    allCheckboxes.push(e.target.value)
                }
            }
            newUser["genderCheckbox"] = allCheckboxes
            this.setState({ user: newUser })
        }
        else {
            newUser[e.target.name] = e.target.value;
            this.setState({ user: newUser });
        }
    }
    clearForm = () => {
        this.setState({
            user: {
                fname: "",
                lname: "",
                email: "",
                gender: "",
                genderDropdown: "",
                genderCheckBox: []
            }
        })
    }
    addUser = () => {
        console.log("msg triggered")
        this.props.addUser(this.state.user);
        this.clearForm();
    }
    editUser = (user, i) => {
        this.setState({ user: user, isEditIndex: i, isEdit: true })
    }
    updateUser = () => {
        this.props.updateUser(this.state.user);
        this.setState({ isEdit: false })
        this.clearForm();
    }
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-4">
                        <form action="">
                            <label htmlFor="">FullName</label> <br />
                            <input type="text" name="fname" value={this.state.user.fname} onChange={(e) => { this.handleChange(e) }} /> <br /><br />

                            <label htmlFor="">Email</label> <br />
                            <input type="email" name="email" value={this.state.user.email} onChange={(e) => { this.handleChange(e) }} /> <br /> <br />

                            <label htmlFor="">Gender</label> <br />
                            <input type="radio" name="gender" checked={this.state.user.gender === "Male"} onChange={(e) => { this.handleChange(e) }} value={"Male"} /> Male
                            <input type="radio" name="gender" checked={this.state.user.gender === "Female"} onChange={(e) => { this.handleChange(e) }} value={"Female"} /> Female <br /><br />

                            <label htmlFor="">Gender DropDown</label> <br />
                            <select name="genderDropdown" onChange={(e) => { this.handleChange(e) }} value={this.state.user.genderDropdown}>
                                <option value="">--select--</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select> <br /><br />

                            <label htmlFor="">Gender Checkbox</label> <br />
                            {/* <input type="checkbox" name="genderCheckbox" checked={this.state.user.genderCheckbox.indexOf("Male") > -1} value={"Male"} onChange={(e) => { this.handleChange(e) }} />Male
                            <input type="checkbox" name="genderCheckbox" checked={this.state.user.genderCheckbox.indexOf("Female") > -1} value={"Female"} onChange={(e) => { this.handleChange(e) }} />Female
                            <input type="checkbox" name="genderCheckbox" checked={this.state.user.genderCheckbox.indexOf("Others") > -1} value={"Others"} onChange={(e) => { this.handleChange(e) }} />Others */}


                            {this.state.isEdit ? <button onClick={() => { this.updateUser() }} type='button' className='btn btn-primary'>UpdateUser</button>
                                : <button onClick={() => { this.addUser() }} type='button' className='btn btn-primary'>AddUser</button>}
                            {/* <button onClick={() => { this.addUser() }} type='button' className='btn btn-primary'>AddUser</button> */}
                        </form>

                    </div>

                    <div className="col-1">

                    </div>

                    <div className="col-7">
                        <table className='table'>
                            <thead className='table-dark'>
                                <tr>
                                    <th>FullName</th>
                                    <th>Email</th>
                                    <th>Gender Rd</th>
                                    <th>Gender Chk</th>
                                    <th>Gender Drp</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.allUsers.users.map((data, i) =>
                                    <tr key={i}>
                                        <td>{data.fname}</td>
                                        <td>{data.email}</td>
                                        <td>{data.gender}</td>
                                        <td>{data.genderCheckbox}</td>
                                        <td>{data.genderDropdown}</td>
                                        <td>
                                            <button type='button' className='btn btn-warning' onClick={() => { this.editUser(data) }}>Edit</button>
                                        </td>
                                        <td>
                                            <button type='button' className='btn btn-danger' onClick={() => { this.props.deleteUser(data.id) }}>Delete</button>
                                        </td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log(state)
    return {
        allUsers: state.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUsers: () => dispatch(getDataFromServerAction()),
        addUser: (user) => dispatch(addUserAction(user)),
        deleteUser: (id) => dispatch(deleteUserAction(id)),
        updateUser: (user) => dispatch(updateUserAction(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)