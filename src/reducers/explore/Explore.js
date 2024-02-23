import { createSlice } from "@reduxjs/toolkit";
import {
  getExplore,
  getExploreReels,
  getPostById,
} from "../../api/ExploreApi/ExploreApi";

export const Explore = createSlice({
  name: "explore",
  initialState: {
    data: [],
    Comments: "",
    ById: [],
    like: [],
  },
  reducers: {
    setComment: (state, action) => {
      state.Comments = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getExplore.pending, (state, action) => {
      console.log(1);
    });
    builder.addCase(getExplore.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getExplore.rejected, (state, action) => {
      console.log(3);
    });
    builder.addCase(getExploreReels.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getPostById.fulfilled, (state, action) => {
      state.ById = action.payload;
    });
  },
});
export const {} = Explore.actions;

export default Explore.reducer;
