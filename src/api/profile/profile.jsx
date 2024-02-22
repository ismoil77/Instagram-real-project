import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";

export const getProfileById = createAsyncThunk(
  "profile/getProfileById",
  async function (id) {
    try {
      let { data } = await axiosRequest.get(
        `UserProfile/get-user-profile-by-id?id=${id}`
      );
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const GetPostByUser = createAsyncThunk(
  "profile/GetPostByUser",
  async function (id) {
    try {
      let { data } = await axiosRequest.get(`Post/get-posts?UserId=${id}`);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);