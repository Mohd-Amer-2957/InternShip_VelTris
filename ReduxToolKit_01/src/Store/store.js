import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterSlicer";

const store= configureStore({
    reducer:{
        counter: CounterReducer
    }

});

export default store;

