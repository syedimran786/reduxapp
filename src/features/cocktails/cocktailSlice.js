import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

let initialState={
    cocktailList:[],
    loading:false,
    error:"",
    searchCocktail:"a",
    cocktailid:"17222",
    singlecocktail:[]
    

}
// console.log(initialState.searchCocktail);
export let fetchCocktails=createAsyncThunk("cocktail/fetchCocktails",async (state,b)=>
{
    console.log(b.getState().cocktail.searchCocktail);
   try
   {
    let res=await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${b.getState().cocktail.searchCocktail}`);

    return res.data
   }
   catch(err)
   {
    return err.response
   }
    
})

export let fetchCocktailbyId=createAsyncThunk("cocktail/fetchCocktailbyId",async (state,b)=>
{
   console.log(b.getState().cocktail.cocktailid);
   try
   {
    let res=await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${b.getState().cocktail.cocktailid}`);

    return res.data
   }
   catch(err)
   {
    return err.response
   }
    
})

let cocktailslice=createSlice(
    {
        name:"cocktail",
        initialState,
        reducers:{
            searchNewCocktail:(state,action)=>
            {
                state.searchCocktail=action.payload;
                
            },
            updateCocktailId:(state,action)=>
            {
                state.cocktailid=action.payload;
                console.log(state.cocktailid);
                
            }
        },
        extraReducers:(builder)=>
        {
            builder.addCase(fetchCocktails.pending, (state,action)=>
            {
                state.loading=true;
            })

            builder.addCase(fetchCocktails.fulfilled, (state,action)=>
            {
                state.cocktailList=action.payload;
                state.loading=false;
            })
            builder.addCase(fetchCocktails.rejected, (state,action)=>
            {
                state.cocktailList=[];
                state.loading=false;
                state.error=action.payload
            })
            builder.addCase(fetchCocktailbyId.pending, (state,action)=>
            {
                state.loading=true;
            })
            builder.addCase(fetchCocktailbyId.fulfilled, (state,action)=>
            {
                state.singlecocktail=action.payload;
                state.loading=false;
                
            })
           
        }
        
    }
)


export default cocktailslice.reducer;
export let {searchNewCocktail,updateCocktailId}=cocktailslice.actions
