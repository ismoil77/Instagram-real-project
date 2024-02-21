import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../reducers/search/searchred";

export const store = configureStore({
  reducer: {
    search: counterSlice,
  },
});
