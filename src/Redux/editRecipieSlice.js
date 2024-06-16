import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { editRecipiesApi } from "../ApiServices/AllApis";

export const editRecipies = createAsyncThunk('edit/editRecipies',
  async ({ id, ...recipie }, { rejectWithValue }) => {
    try {
      const { data } = await editRecipiesApi(recipie, id);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const editSlice = createSlice({
  name: 'edit',
  initialState: {
    loading: false,
    recipie: {},
    error: ""
  },
  extraReducers: (builder) => {
    builder.addCase(editRecipies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editRecipies.fulfilled, (state, action) => {
      state.loading = false;
      state.recipie = action.payload;
      state.error = "";
    });
    builder.addCase(editRecipies.rejected, (state, action) => {
      state.loading = false;
      state.recipie = {};
      state.error = action.payload;
    });
  }
});

export default editSlice.reducer;
