// courseSlice.js file -----------------------------------------------------

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCourses } from "@/services/courseApi";

// THUNK
export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    return await getAllCourses();
  }
);

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload.courses;
      })
      .addCase(fetchCourses.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default courseSlice.reducer;