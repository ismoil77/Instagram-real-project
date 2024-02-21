import { configureStore } from "@reduxjs/toolkit";
import profile from "../reducers/profile/profile";
import  Chat  from "../reducers/Message/Message";



export const store = configureStore({
  reducer: {
   profile, 
   massage:Chat
  },
});
