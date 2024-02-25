import { createSlice } from "@reduxjs/toolkit";
import { getComment, getLike } from "../../api/reels/Reels";

export const videoReels = createSlice({
  name: "reels",
  initialState: {
    cnt: 0,
    data: [],
    user: [],
    setComment: "",
  },
  reducers: {
    setComment: (state, action) => {
      state.setComment = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getComment.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getLike.fulfilled, (state,action)=>{
      state.user=action.payload

      
   
      })
  },
});


export const { setComment } = videoReels.actions;

export default videoReels.reducer;
