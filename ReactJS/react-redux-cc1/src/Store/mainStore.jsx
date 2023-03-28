import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { userReducer } from "./Reducer/reducer";

export const store = configureStore({
    reducer : {
        users : userReducer
    },
    middleware :[thunk]
})