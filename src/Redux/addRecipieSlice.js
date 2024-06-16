import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addRecipiesApi } from "../ApiServices/AllApis";

export const addRecipies = createAsyncThunk('add/addRecipies',
    async (recipie, { rejectWithValue }) => {
      try {
        const { data } = await addRecipiesApi(recipie);
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

const addSlice = createSlice({
    name:'add',
    initialState:{
        loading:false,
        recipie:{},
        error:""
    },
    extraReducers:(builder)=>{
        builder.addCase(addRecipies.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(addRecipies.fulfilled,(state,action)=>{
            state.loading=false
            state.recipie=action.payload
            state.error=""
        })
        builder.addCase(addRecipies.rejected,(state,action)=>{
            state.loading=false
            state.recipie={}
            state.error=action.payload
        })
    }
})
export default addSlice.reducer
