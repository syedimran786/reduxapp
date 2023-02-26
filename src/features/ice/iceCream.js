import { createSlice } from "@reduxjs/toolkit";

let iceSlice=createSlice(
    {
        name:"ice",
        initialState:{totalIce:10},
        reducers:{
            buyIce:(state)=>
            {
                state.totalIce--
            },
            stockIce:(state,action)=>
            {
                state.totalIce+=action.payload
            }
        },
        extraReducers:(builder)=>
        {
            builder.addCase("cake/buyCake", (state)=>
            {
                state.totalIce--
            })
        }
    }
)

export default iceSlice.reducer;
export let {buyIce,stockIce}=iceSlice.actions