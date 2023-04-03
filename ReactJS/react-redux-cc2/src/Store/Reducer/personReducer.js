import { GET_PERSON } from "../Actions/personActionType";
import { defaultState } from "../defualtState";

export const personReducer =(state = defaultState,action)=>{
    switch (action.type) {
        case GET_PERSON:
            console.log(action.payload)
            return {persons : action.payload}
        default:
            return state;
    }
}