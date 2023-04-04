import { GET_PERSON_LISTS } from "../Actions/persconActionTypes";
import { defualtState } from "../defualtState";

export const personReducer = (state = defualtState,action) =>{
    switch (action.type) {
        case GET_PERSON_LISTS:
            return {...state,persons : action.payload}
        default:
            return state;
    }
}