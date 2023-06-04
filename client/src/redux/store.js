import { configureStore } from "@reduxjs/toolkit";
import { heroReducer } from "./slices/hero";


const store = configureStore({
    reducer:{
        hero:heroReducer,
    }
})

export default store;