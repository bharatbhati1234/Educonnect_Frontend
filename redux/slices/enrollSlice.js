
// enrollSlice.js file -----------------------------------------------------------------------------

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { enrollCourse, checkEnrollment } from "@/services/enrollApi";

export const enroll = createAsyncThunk(
  "enroll/enrollCourse",
  async (courseId) => {
    await enrollCourse(courseId);
    return true;
  }
);

export const checkEnroll = createAsyncThunk(
  "enroll/check",
  async (courseId) => {
    const res = await checkEnrollment(courseId);
    return res.data.enrolled;
  }
);

const enrollSlice = createSlice({
  name: "enroll",
  initialState: {
    enrolled: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(enroll.fulfilled, (state) => {
        state.enrolled = true;
      })
      .addCase(checkEnroll.fulfilled, (state, action) => {
        state.enrolled = action.payload;
      });
  },
});

export default enrollSlice.reducer;