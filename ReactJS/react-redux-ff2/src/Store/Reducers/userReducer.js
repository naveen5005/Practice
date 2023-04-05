import { defaultState } from "../../defaultState";
import { get_users } from "../Actions/userActionType";

export const userReducer = (state = defaultState,action) =>{
    switch (action.type) {
        case get_users:
            return {...state,users:action.payload}
        default:
            return state;
    }
}