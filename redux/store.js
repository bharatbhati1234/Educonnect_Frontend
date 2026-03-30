// store.js file --------------------------------------------------------------------

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import courseReducer from "./slices/courseSlice";
import categoryReducer from "./slices/categorySlice";
import instructorReducer from "./slices/instructorSlice";
import enrollReducer from "./slices/enrollSlice";



export const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: courseReducer,
    categories: categoryReducer,
    instructors: instructorReducer, 
    enroll: enrollReducer


  },
});