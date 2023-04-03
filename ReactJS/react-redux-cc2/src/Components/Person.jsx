import React, { Component } from 'react'
import { connect } from "react-redux";
import { addPersonAction, deletePersonAction, getDataFromServerAction, updatePersonAction } from '../Store/Actions/personAction';
class Person extends Component {
    constructor(props) {
        console.log(props)
        super(props)

        this.state = {
            person: {
                fname: "",
                lname: "",
                email: ""
            },
            isEdit: false,
            isEditIndex: null
        }
    }

    componentDidMount() {
        this.props.getPersons()
        console.log(this.props.getPersons())
    }
    handleChnage = (e) => {
        let newPerson = { ...this.state.person };
        newPerson[e.target.name] = e.target.value;
        this.setState({ person: newPerson })
    }
    addPerson = () => {
        console.log("msg triggered")
        this.props.addPerson(this.state.person);
        this.clearForm();
    }
    editPerson = (personData) => {
        console.log(personData.id)
        this.setState({ person: personData, isEdit: true, isEditIndex: personData.id })
    }
    updatePerson = () => {
        this.props.updatePerson(this.state.person);
        this.setState({ isEdit: false });
        this.clearForm();
    }
    clearForm = () => {
        this.setState({
            person: {
                fname: "",
                lname: "",
                email: ""
            }
        })
    }
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-4">
                        <form action="">
                            <label htmlFor="">First Name</label> <br />
                            <input type="text" name="fname" value={this.state.person.fname} onChange={(e) => { this.handleChnage(e) }} /> <br />

                            <label htmlFor="">Last Name</label> <br />
                            <input type="text" name="lname" value={this.state.person.lname} onChange={(e) => { this.handleChnage(e) }} /> <br />

                            <label htmlFor="">Email</label> <br />
                            <input type="email" name="email" value={this.state.person.email} onChange={(e) => { this.handleChnage(e) }} /> <br /><br />

                            {this.state.isEdit ?
                                <button type='button' className='btn btn-primary' onClick={() => { this.updatePerson() }}>Update Person</button>

                                :
                                <button type='button' className='btn btn-primary' onClick={() => { this.addPerson() }}>Add Person</button>
                            } <br /><br />
                        </form>
                    </div>
                    <div className="col-8">
                        <table className="table">
                            <thead className="table-dark">
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.allPersons.persons.map((data, i) => {
                                    return <tr key={i}>
                                        <td>{data.fname}</td>
                                        <td>{data.lname}</td>
                                        <td>{data.email}</td>
                                        <td>
                                            <button type='button' className='btn btn-warning' onClick={() => { this.editPerson(data) }}>Edit</button>
                                        </td>
                                        <td>
                                            <button type='button' className='btn btn-danger' onClick={() => { this.props.deletePerson(data.id) }} >Delete</button>
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
}

function mapStateToProps(state) {
    console.log(state)
    return {
        allPersons: state.persons
    }
}

function mapStateToDispatch(dispatch) {
    return {
        getPersons: () => dispatch(getDataFromServerAction()),
        addPerson: (person) => dispatch(addPersonAction(person)),
        deletePerson: (id) => dispatch(deletePersonAction(id)),
        updatePerson: (person) => dispatch(updatePersonAction(person))
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Person)