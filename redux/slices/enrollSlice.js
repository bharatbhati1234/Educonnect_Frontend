
// enrollSlice.js file -----------------------------------------------------------------------------

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { enrollCourse, getEnrolledCourses } from "@/services/enrollApi";

// enroll
export const enroll = createAsyncThunk(
  "enroll/enrollCourse",
  async (courseId) => {
    const res = await enrollCourse(courseId); // ✅ FIXED
    return res.data;
  }
);

// get my courses
export const fetchEnrolledCourses = createAsyncThunk(
  "enroll/getEnrolledCourses",
  async () => {
    const res = await getEnrolledCourses();
    return res.data;
  }
);

const enrollSlice = createSlice({
  name: "enroll",
  initialState: {
    enrolledCourses: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(enroll.pending, (state) => {
        state.loading = true;
      })
      .addCase(enroll.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchEnrolledCourses.fulfilled, (state, action) => {
        state.enrolledCourses = action.payload.courses;
      });
  },
});

export default enrollSlice.reducer;