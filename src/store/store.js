import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "../reducers/search/searchred";


import profile from "../reducers/profile/profile";
export const store = configureStore({
  reducer: {
   profile, 

  },
});
