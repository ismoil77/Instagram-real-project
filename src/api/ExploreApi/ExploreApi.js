import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";

export const getExplore = createAsyncThunk("explore/getExplore", async () => {
  try {
    const { data } = await axiosRequest.get("Post/get-posts");
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
});

export const getExploreReels = createAsyncThunk("explore/getExploreReels", async () => {
  try {
    const { data } = await axiosRequest.get("Post/get-reels");
    return data.data;
  } catch (error) {
    console.log(error);
  }
});
