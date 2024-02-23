
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";



export const  getComment = createAsyncThunk("reels/getComment", async () => {
try {
  const {data}  = await axiosRequest.get("Post/get-reels")
  // console.log(data)
  return data.data
  
} catch (error) {
  console.log(error)
  
}
})