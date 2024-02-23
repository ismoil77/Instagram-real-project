import { getProfileById,GetPostByUser, getFollowings, getFollowers } from "../../api/profile/profile";
import { createSlice } from "@reduxjs/toolkit";

 export const profile = createSlice({
   name: "profile",
   initialState: {
     userProfile: [],
     postUser: [],
     followingsUser: [],
     followersUser: [],
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
     builder.addCase(getFollowings.fulfilled, (state, action) => {
       state.followingsUser = action.payload;
       state.isLoading = false;
     });
     builder.addCase(getFollowers.fulfilled, (state, action) => {
         state.followersUser = action.payload;
         state.isLoading = false;
    });
   },
 });

// export const { userProfile, postUser } = profile.;
export default profile.reducer;