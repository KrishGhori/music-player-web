import {configureStore} from "@reduxjs/toolkit"
import PlaylistSlise from "./PlaylistSlise"
import LikeSlice from "./LikeSlice"
import Like from "../Pages/Like"
export const store = configureStore({
    reducer :{
        playlist : PlaylistSlise ,
        like : LikeSlice 
    }
})