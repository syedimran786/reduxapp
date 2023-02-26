import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PRODUCTSAPI } from "./axiosConfig";

let initialState=
{
    products:[],
    filteredProducts:[],
    loading:false,
    error:""
}

//! create
export let addProduct=createAsyncThunk("products/addProduct",async (newProduct)=>
{
    
  try
  {
    let {data}=await PRODUCTSAPI.post(`products`,newProduct);
    console.log(data);
    return data
  }
  catch(err)
  {
    return err.response
  }
})

//! read
export let getAllProducts=createAsyncThunk("products/getAllProducts",async ()=>
{
  try
  {
    let {data}=await PRODUCTSAPI.get("products");
    return data
  }
  catch(err)
  {
    return err.response
  }
})

//! update
export let updateProduct=createAsyncThunk("products/updateProduct",async (product)=>
{
   
  try
  {
    let {data}=await PRODUCTSAPI.put(`products/${product.id}`,product);
    return data
  }
  catch(err)
  {
    return err.response
  }
})

//! delete
export let deleteProduct=createAsyncThunk("products/deleteProduct",async (id)=>
{
    console.log(id);
  try
  {
    let {data}=await PRODUCTSAPI.delete(`products/${id}`);
    return data
  }
  catch(err)
  {
    return err.response
  }
})




let productSlice=createSlice({
    name:"products",
    initialState,
    reducers:
    {
        searchUpdateProducts:(state,action)=>
        {
            state.products=action.payload
            // let filteredProducts=state.filteredProducts.filter(p=>p.title.includes(action.payload.toLowerCase()));

            // return {...state,filteredProducts:action.payload.length>0?filteredProducts:[...state.products]}
        }
    },
    extraReducers:(builder)=>
    {

      builder.addCase(addProduct.fulfilled, (state,action)=>
      {
         
      })

        builder.addCase(getAllProducts.pending, (state,action)=>
        {
            state.products=[];
            state.loading=true
        })

        builder.addCase(getAllProducts.rejected, (state,action)=>
        {
            state.products=[];
            state.loading=false
            state.err=action.payload.message
        })

        builder.addCase(getAllProducts.fulfilled, (state,action)=>
        {
            state.products=action.payload;
            state.loading=false
        })
        
        builder.addCase(deleteProduct.fulfilled, (state,action)=>
        {
            
        })
    }
})

export default productSlice.reducer;

export let {searchUpdateProducts}=productSlice.actions
