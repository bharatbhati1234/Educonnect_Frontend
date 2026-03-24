// store.js file --------------------------------------------------------------------

import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./slices/courseSlice";
import categoryReducer from "./slices/categorySlice";


export const store = configureStore({
  reducer: {
    courses: courseReducer,
    categories: categoryReducer,

  },
});