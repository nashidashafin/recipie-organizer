import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { accessRecipiesApi } from "../ApiServices/AllApis";


// api call
export const fetchRecipies = createAsyncThunk('recipies/fetchRecipies',async()=>{
   const {data} = await accessRecipiesApi()
   return data
})

//slice
const recipieSlice = createSlice({
    name:'recipies',
    initialState:{
        loading:false,
        allRecipies:[],
        copyRecipies:[],
        error:""
    },
    //for asyn function
    extraReducers:(builder)=>{
        builder.addCase(fetchRecipies.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchRecipies.fulfilled,(state,action)=>{
            state.loading=false
            state.allRecipies=action.payload
            state.copyRecipies=action.payload
            state.error=""
        })
        builder.addCase(fetchRecipies.rejected,(state,action)=>{
            state.loading=false
            state.allRecipies=[]
            state.error=action.payload
        })

    },
    reducers: {
        searchRecipies: (state, action) => {
            state.allRecipies = state.copyRecipies.filter(i => (i.recipie+i.cusine).toLowerCase().includes(action.payload.toLowerCase()));
        }
    },

})

export default recipieSlice.reducer
export const {searchRecipies} = recipieSlice.actions