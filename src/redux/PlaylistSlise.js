import { createSlice } from "@reduxjs/toolkit";

const PlalistSlice = createSlice({
    name : "playlist" ,
    initialState : [] ,
    reducers : {
        AddSong: (state, action) => {
          const exist = state.find((song) => song.songIndex === action.payload.songIndex);
          if (!exist) {
            state.push(action.payload);
          }
        } ,
        Removesong : (state , action) => {
           return state.filter((song)=>(song.songIndex!==action.payload))
        }
    } 

})

export const {AddSong , Removesong} = PlalistSlice.actions
export default PlalistSlice.reducer