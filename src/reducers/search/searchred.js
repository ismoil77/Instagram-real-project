import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getUserHistory, getUsers } from '../../pages/search/search'

export const counterSlice = createSlice({
  name: 'searchUsers',
  initialState: {
    data: [],
    dataHistory: [],
  },
  reducers: {},
  

  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, actions) => {
        console.log(1);
    })
    builder.addCase(getUsers.fulfilled, (state, actions) => {
        state.data = actions.payload
    })
    builder.addCase(getUsers.rejected, (state, actions) => {
        console.log(error);
    })


    builder.addCase(getUserHistory.pending, (state, actions) => {
        console.log(1);
    })
    builder.addCase(getUserHistory.fulfilled, (state, actions) => {
        state.dataHistory = actions.payload
    })
    builder.addCase(getUserHistory.rejected, (state, actions) => {
        console.log(error);
    })
  }
})

export const {} = counterSlice.actions

export default counterSlice.reducer