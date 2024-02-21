import { configureStore } from "@reduxjs/toolkit";

import search from "../reducers/search/searchred";

import profile from "../reducers/profile/profile";
import Chat from "../reducers/Message/Message";

export const store = configureStore({
  reducer: {
    profile,
    message: Chat,
    searchUsers: search,
  },
});
