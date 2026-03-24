// categorySlice.jsx file -------------------------------------------


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCategories } from "@/services/categoryApi";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    return await getAllCategories();
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.data;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default categorySlice.reducer;