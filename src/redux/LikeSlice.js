import { createSlice } from "@reduxjs/toolkit";

const  LikeSlice = createSlice({
    name : "likeslice" ,
    initialState : [] ,
    reducers : {
        Addlike: (state, action) => {
          const exist = state.find((song) => song.songIndex === action.payload.songIndex);
          if (!exist) {
            state.push(action.payload);
          }
        } ,
        Removelike : (state , action) => {
           return state.filter((song)=>(song.songIndex!==action.payload))
        }
    } 

})

export const {Addlike , Removelike} = LikeSlice.actions
export default LikeSlice.reducer