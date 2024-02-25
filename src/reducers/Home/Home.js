import { createSlice } from "@reduxjs/toolkit"
import { getLike, getTodosByPost12, getUserAbout } from "../../api/home/home"





export const HomeJs = createSlice({
    name: 'homeJs',
    initialState:{
        value: 0,
        data:[],
        user:[],
        like:false
    },
    reducers: {
   
    },
    extraReducers:(builder)=>{
      builder.addCase(getTodosByPost12.fulfilled, (state,action)=>{
      state.data=action.payload
   
      })
      builder.addCase(getUserAbout.fulfilled, (state,action)=>{
        state.user=action.payload
     
        })
        builder.addCase(getLike.fulfilled, (state,action)=>{
          state.user=action.payload
       
          })

          
     
    }
    
    

  })
  
  export const {} = HomeJs.actions
  
  export default HomeJs.reducer
