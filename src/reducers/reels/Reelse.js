
import { createSlice } from '@reduxjs/toolkit'
import { getComment } from '../../api/reels/Reels';



export const videoReels = createSlice({
  name: 'reels',
  initialState: {
    cnt: 0,
    data:[],
   
  },
  reducers: {
  },
  extraReducers:(builder)=>{
  
    builder.addCase(getComment.fulfilled,(state,action)=>{
      state.data=action.payload
    })
   
  }
})

export const {} = videoReels.actions

export default videoReels.reducer