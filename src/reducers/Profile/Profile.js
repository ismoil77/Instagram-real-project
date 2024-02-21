import { getProfileById,GetPostByUser } from "../../api/profile/profile";
import { createSlice } from "@reduxjs/toolkit";

 export const profile = createSlice({
  name: "profile",
  initialState: {
    userProfile: [],
    postUser: [],
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getProfileById.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProfileById.fulfilled, (state, action) => {
      state.userProfile = action.payload;
    });

    builder.addCase(GetPostByUser.fulfilled, (state, action) => {
      state.postUser = action.payload;
      state.isLoading = false;
    });
  },
});

// export const { userProfile, postUser } = profile.;
export default profile.reducer;