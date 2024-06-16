import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { deleteRecipiesApi } from "../ApiServices/AllApis";

// export const deleteRecipies = createAsyncThunk('delete/deleteRecipies',async(id)=>{
//     const {data} = await deleteRecipiesApi(id)
//     return data
//  })

export const deleteRecipies = createAsyncThunk('delete/deleteRecipie', async (id, { rejectWithValue }) => {
    try {
      await deleteRecipiesApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  });
  

 const deleteSlice = createSlice({
    name:'delete',
    initialState:{
        loading:false,
        error:""
    },
    //for asyn function
    extraReducers:(builder)=>{
        builder.addCase(deleteRecipies.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(deleteRecipies.fulfilled,(state,action)=>{
            state.loading=false
            // state.allRecipies = state.allRecipies.filter(recipie => recipie.id !== action.payload);
            state.error=""
        })
        builder.addCase(deleteRecipies.rejected,(state,action)=>{
            state.loading=false
            state.allRecipies=[]
            state.error=action.payload
        })

    }
})

export default deleteSlice.reducer