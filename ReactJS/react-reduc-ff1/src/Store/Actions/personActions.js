import axios from 'axios'
import { GET_PERSON_LISTS } from './persconActionTypes'

export const getDataFromServerAction = () =>{
    return(dispatch) =>{
        getDataFromAPI(dispatch)
    }
}

export const addDataFromServerAction = (personDetails) =>{
    console.log(personDetails)
    return(dispatch) => {
        axios.post("http://localhost:3001/person/",personDetails).then((res)=>{
            getDataFromAPI(dispatch);
        })
    }
}
export const deleteDataFromServerAction = (deletePerson) =>{
    return(dispatch) =>{
        axios.delete("http://localhost:3001/person/"+deletePerson.id).then(()=>{
            getDataFromAPI(dispatch);
        })
    }
}
export const updateDataFromServerAction = (data) =>{
    console.log(data)
    return(dispatch) => {
        axios.put("http://localhost:3001/person/"+data.id,data).then(()=>{
            getDataFromAPI(dispatch);
        })
    }
}
function getDataFromAPI(dispatch){
    axios.get("http://localhost:3001/person").then((res)=>{
        console.log(res)
        dispatch({
            type: GET_PERSON_LISTS ,
            payload: res.data
        })
    })
}