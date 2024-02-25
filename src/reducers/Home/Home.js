import { createSlice } from "@reduxjs/toolkit"
import { addCommentFromUser, getAllUser, getFollow, getHistory, getLike, getSav, getTodosByPost12, getUserAbout } from "../../api/home/home"





export const HomeJs = createSlice({
    name: 'homeJs',
    initialState:{
        value: 0,
        data:[],
        user:[],
        dataHistory:[],
        dataUsers:[],
        modalOpenClose:false,
        like:false
    },
    reducers: {
  falseTrueModal:(state,action)=>{
    // console.log(true);
        state.falseTrueModal=!state.falseTrueModal
        // console.log(state.falseTrueModal);
  }
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
          builder.addCase(getSav.fulfilled, (state,action)=>{
            // state.user=action.payload
            
         
            })
            
            builder.addCase(addCommentFromUser.fulfilled, (state,action)=>{
              // state.user=action.payload
              
           
              })
              
              builder.addCase(getAllUser.fulfilled, (state,action)=>{
                // state.user=action.payload
                
             state.dataUsers = action.payload
             console.log(action.payload);
                })

                builder.addCase(getFollow.fulfilled, (state,action)=>{
                  // state.user=action.payload
                  
              //  state.dataUsers = action.payload
              //  console.log(action.payload);
                  })
                  builder.addCase(getHistory.fulfilled, (state,action)=>{
                    state.dataHistory=action.payload
                    console.log(action.payload);
                //  state.dataUsers = action.payload
                //  console.log(action.payload);
                    })
                
    }
    
    

  })
  
  export const {falseTrueModal} = HomeJs.actions
  
  export default HomeJs.reducer
