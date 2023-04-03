import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { personReducer } from "./Reducer/personReducer";


export const store = configureStore({
    reducer :{
        persons : personReducer
    },
    // middleware:[thunk]
})