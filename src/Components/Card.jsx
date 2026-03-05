import React, { useContext } from 'react'
import { RiPlayListLine } from "react-icons/ri";
import { GoHeart } from "react-icons/go";
import  { datacontext } from '../Context/UserContext';
import { useDispatch, useSelector } from 'react-redux';
import { AddSong, Removesong } from '../redux/PlaylistSlise';
import { MdOutlinePlaylistRemove } from "react-icons/md";
import { Addlike, Removelike } from '../redux/LikeSlice';
import { IoMdHeart } from "react-icons/io";

const Card = ({name , image , singer , songIndex}) => {
  const {playsong , setindex} = useContext(datacontext)
  let gaana = useSelector(state=>state.playlist)
  const songExistPlaylist = gaana.some((song)=> (song.songIndex===songIndex))
  const dispatch = useDispatch()

   let likedsong = useSelector(state=>state.like)
   const songExistlike = likedsong.some((song)=> (song.songIndex===songIndex))
  return (
    <div className='flex md:h-[120px] w-[80%] ml-2 mr-1 md:ml-0 md:mr-1 h-[70px] bg-slate-800 p-[5px] md:p-[10px] shadow-md rounded-md hover:bg-slate-600'>
        <div className='flex justify-start items-center gap-[20px] w-[70%] h-[100%] cursor-pointer' 
        onClick={
          ()=>{
           setindex(songIndex)
            playsong() 
          }}>
            <div>
                <img src={image} alt="" className='w-[60px] rounded-lg max-h-[60px] md:max-h-[100px] md:w-[100px]'/>
            </div>
            <div className='text-white text-[15px] md:text-[20px]'>
              <div className='text-[0.9em] md:text-[1em] font-semibold'>{name}</div>
              <div className='text-[0.6em] md:text-[0.7em] text-gray-400 '>{singer}</div>
            </div>
        </div>
        
        <div className='flex justify-center items-center gap-[20px] w-[30%] h-[100%] text-white text-[15px] md:text-[22px]'>
          {!songExistPlaylist && (<div className='text-[20px] md:text-[1.1em] ml-6 cursor-pointer' onClick={()=>{
            dispatch(AddSong({name : name ,image : image ,singer : singer ,songIndex : songIndex}))
          }}>
            <RiPlayListLine/></div>)}

          {songExistPlaylist && (<div className='text-[20px] md:text-[1.3em] ml-6 cursor-pointer' onClick={()=>{
            dispatch(Removesong(songIndex))
          }}>
           <MdOutlinePlaylistRemove/></div>)}

           {!songExistlike && (<div className='text-[20px] md:text-[1em]  cursor-pointer mr-1' onClick={()=>{
            dispatch(Addlike({name : name ,image : image ,singer : singer ,songIndex : songIndex}))
          }} >
              <GoHeart/>
            </div >)}

            {songExistlike && (<div className='text-[20px] md:text-[1em]  cursor-pointer mr-1' onClick={()=>{
            dispatch(Removelike(songIndex))
          }} >
              <IoMdHeart/>
            </div >)}
            
        </div>
      
    </div>
  )
}

export default Card
