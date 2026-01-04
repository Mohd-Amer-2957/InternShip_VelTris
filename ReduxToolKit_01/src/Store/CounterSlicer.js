import { createSlice } from "@reduxjs/toolkit";

export const CounterSlicer = createSlice({
    name: 'counter',
    initialState:{
        value:10,
    },
    reducers:{
        increament: (state)=>{
            state.value +=1;
        },
        decreament: (state)=>{
            state.value -=1;
        },

        reset: (state)=> {
            state.value= 10;
        },

        IncreaseByValue: (state, action)=>{
            state.value += action.payload;
        }

    }

})

export const {increament,decreament,reset,IncreaseByValue} = CounterSlicer.actions;   // Called in different Components

export default CounterSlicer.reducer;     // called in Store

