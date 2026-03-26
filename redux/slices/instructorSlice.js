// instructorSlice.js file --------------------------------------------------

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllInstructors } from "@/services/instructorApi";

export const fetchInstructors = createAsyncThunk(
  "instructors/fetch",
  async () => {
    const res = await getAllInstructors();
    return res; 
  }
);

const instructorSlice = createSlice({
  name: "instructors",
  initialState: {
    instructors: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInstructors.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInstructors.fulfilled, (state, action) => {
        state.loading = false;
        state.instructors = action.payload.instructors;
      });
  },
});

export default instructorSlice.reducer;