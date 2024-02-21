import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";


  
  export const getUser = createAsyncThunk("message/getUser",async()=>{
    try {
        let { data } = await axiosRequest.get("Chat/get-chats");
        return data.data
    } catch (error) {
        console.error(error);
    }
  })
  export const searchUser = createAsyncThunk("message/searchUser",async(text)=>{
    try {
        let { data } = await axiosRequest.get(`User/get-users?UserName=${text}`);
        return data.data
    } catch (error) {
        console.error(error);
    }
  })
  
  export const getById = createAsyncThunk("message/getById",async()=>{
    try {
        let { data } = await axiosRequest.get(`Chat/get-chat-by-id?chatId=365`);
        return data.data
    } catch (error) {
        console.error(error);
    }
  })