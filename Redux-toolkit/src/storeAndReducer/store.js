import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice"              // todoSlice as todoReducer

export const store = configureStore({
    reducer: todoReducer 
})