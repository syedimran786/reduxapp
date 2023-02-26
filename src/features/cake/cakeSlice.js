import { createSlice } from "@reduxjs/toolkit";

let cakeSlice=createSlice({
    name:"cake",
    initialState:{totalCakes:20},
    reducers:{
        buyCake:(state)=>{
            state.totalCakes--
        },
        //! action.payload holds the data passed to this function while calling
        stockCake:(state,action)=>{
            state.totalCakes+=action.payload
        }
    }
});



export default cakeSlice.reducer;
export let {buyCake,stockCake}=cakeSlice.actions