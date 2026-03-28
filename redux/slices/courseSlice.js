// courseSlice.js file -----------------------------------------------------

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCourses, getCourseById } from "@/services/courseApi";

// GET ALL COURSES
export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    return await getAllCourses();
  }
);

// GET SINGLE COURSE
export const fetchSingleCourse = createAsyncThunk(
  "courses/fetchSingleCourse",
  async (id) => {
    return await getCourseById(id);
  }
);

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    loading: false,
    singleCourse: null,
  },

  extraReducers: (builder) => {
    builder

      // ALL COURSES
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload.courses;
      })
      .addCase(fetchCourses.rejected, (state) => {
        state.loading = false;
      })

      // 🔥 SINGLE COURSE (IMPORTANT PART)
      .addCase(fetchSingleCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.singleCourse = action.payload.course;
      })
      .addCase(fetchSingleCourse.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default courseSlice.reducer;