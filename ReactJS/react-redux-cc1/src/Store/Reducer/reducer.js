import { GET_USERS } from "../Actions/actionTypes";
import { defaultState } from "../defaultState";

export const userReducer = (state = defaultState,action)=>{
    switch (action.type) {

        case GET_USERS:
            // console.log(action.payload)
            return {users : action.payload}
        default:
            return state;
    }
}

