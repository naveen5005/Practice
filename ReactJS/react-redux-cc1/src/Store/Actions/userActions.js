import axios from 'axios'
import { GET_USERS } from './actionTypes';

export const getDataFromServerAction = () =>{
    return (dispatch)=>{
        getLatestUsers(dispatch)
    }
}
export const addUserAction = (user) =>{
    console.log(user)
    return (dispatch) =>{
        axios.post("http://localhost:3001/employees/",user).then(()=>{
            getLatestUsers(dispatch)
        })
    }
}
export const deleteUserAction =(id)=>{
    return (dispatch) =>{
        axios.delete("http://localhost:3001/employees/"+id).then(()=>{
            getLatestUsers(dispatch)
        })
    }
}
export const updateUserAction = (user) =>{
    return (dispatch) =>{
        axios.put("http://localhost:3001/employees/"+user.id,user).then(()=>{
            getLatestUsers(dispatch)
        })
    }
}
function getLatestUsers(dispatch){
    axios.get("http://localhost:3001/employees").then(res=>{
        // console.log(res);
        dispatch({
            type : GET_USERS,
            payload : res.data
        })
    })
}