import { get_users } from "./userActionType"
import axios from 'axios'

export const getDataFromServerAction =()=>{
    return(dispatch) =>{
        getDataFromAPI(dispatch)
    }
}

export const deleteDataFromServerAction = (user) => {
    return(dispatch) =>{
        axios.delete("http://localhost:3001/usersOne/"+user.id).then(()=>{
            getDataFromAPI(dispatch)
        })
    }
}
export const updateDataFromServerAction = (user) => {
    return (dispatch) =>{
        axios.put("http://localhost:3001/usersOne/"+user.id,user).then(()=>{
            getDataFromAPI(dispatch)
        })
    }
}
export const addDataFromServerAction = (user) => {
    return(dispatch) => {
        axios.post("http://localhost:3001/usersOne/",user).then(()=>{
            getDataFromAPI(dispatch)
        })
    }
}
function getDataFromAPI(dispatch){
    axios.get("http://localhost:3001/usersOne").then((res)=>{
        console.log(res)
        dispatch({
            type: get_users,
            payload: res.data
        })
    })
}