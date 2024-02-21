import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosRequest } from '../../utils/axiosRequest';

export const getUsers = createAsyncThunk("searchUsers/getUsers", async (sear = "") => {
    try {
        const {data} = await axiosRequest.get(`User/get-users?UserName=${sear}`)
        console.log(data);
        return data.data
    } catch (error) {
        console.error(error);
    }
})