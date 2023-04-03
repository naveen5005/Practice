import axios from 'axios'
import { GET_PERSON } from './personActionType'

export const getDataFromServerAction = () =>{
    return(dispatch) =>{
        getLatestUser(dispatch)
    }
}

export const addPersonAction =(person) =>{
    return(dispatch) =>{
        axios.post("http://localhost:3001/person/",person).then(()=>{
            getLatestUser(dispatch);
        })
    }
}

export const deletePersonAction = (id) =>{
    console.log(id)
    return(dispatch) =>{
        axios.delete("http://localhost:3001/person/"+id).then(()=>{
            getLatestUser(dispatch);
        })
    }
}
export const updatePersonAction = (person) =>{
    console.log(person)
    return(dispatch) => {
        axios.put("http://localhost:3001/person/"+person.id,person).then(()=>{
            getLatestUser(dispatch);
        })
    }
}

function getLatestUser(dispatch){
    axios.get("http://localhost:3001/person").then(res=>{
        console.log(res.data)
        dispatch({
            type : GET_PERSON,
            payload:res.data
        })
    })
}