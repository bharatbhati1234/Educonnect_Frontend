// store.js file --------------------------------------------------------------------

import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./slices/courseSlice";
import categoryReducer from "./slices/categorySlice";
import instructorReducer from "./slices/instructorSlice";



export const store = configureStore({
  reducer: {
    courses: courseReducer,
    categories: categoryReducer,
    instructors: instructorReducer, 

  },
});