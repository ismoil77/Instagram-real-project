import { configureStore } from "@reduxjs/toolkit";
import  Chat  from "../reducers/Message/Message";


export const store = configureStore({
  reducer: {
    message:Chat
  },
});
