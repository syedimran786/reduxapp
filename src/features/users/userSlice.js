import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


let initialState={
    users:[],
    error:"",
    loading:false
}

//! calls reducer functions automatically based on users action
export let fetchUsers=createAsyncThunk('user/fetchUsers',()=>
{
    return axios.get("https://jsonplaceholder.typicode.com/use").
    then(res=>
    {
        return res.data
    })
})

let userSlice=createSlice({
    name:'users',
    initialState:initialState,
    extraReducers:(builder)=>
    {
        builder.addCase(fetchUsers.pending, (state)=>{
            state.loading=true
        })

        builder.addCase(fetchUsers.rejected, (state,action)=>{
            state.loading=false;
            state.users=[];
            state.error=action.error.message
        })

        builder.addCase(fetchUsers.fulfilled, (state,action)=>{
            state.loading=false;
            state.users=action.payload;
            state.error=""
        })
    }
})


export default userSlice.reducer