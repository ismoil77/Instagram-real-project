import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getUsers } from '../../pages/search/search'

export const counterSlice = createSlice({
  name: 'searchUsers',
  initialState: {
    data: [],
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
  }
})

export const {} = counterSlice.actions

export default counterSlice.reducer