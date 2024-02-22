import { createSlice } from "@reduxjs/toolkit";
import { getExplore, getExploreReels } from "../../api/ExploreApi/ExploreApi";



export const Explore = createSlice({
    name:"explore",
    initialState:{
        data:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getExplore.pending,(state,action)=>{
            console.log(1);
        })
        builder.addCase(getExplore.fulfilled,(state,action)=>{
            console.log(getExplore);
            state.data=action.payload
        })
        builder.addCase(getExplore.rejected,(state,action)=>{
            console.log(3);
        })
        builder.addCase(getExploreReels.fulfilled,(state,action)=>{
            state.data=action.payload
        })
    }
})
export const { } = Explore.actions

export default Explore.reducer