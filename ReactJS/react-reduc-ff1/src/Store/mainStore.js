import { configureStore } from "@reduxjs/toolkit";
import { personReducer } from "./Reducer/personReducer";

export const store = configureStore({
    reducer : {
        persons : personReducer
    }
})
