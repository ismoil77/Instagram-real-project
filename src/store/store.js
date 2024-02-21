import { configureStore } from "@reduxjs/toolkit";
import profile from "../reducers/profile/profile";
export const store = configureStore({
  reducer: {
   profile, 
  },
});
