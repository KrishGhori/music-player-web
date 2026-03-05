import React from 'react'
import Musicplayer from '../Components/Musicplayer'
import { useSelector } from 'react-redux'
import Card from '../Components/Card'
const Like = () => {

  let songs = useSelector(state=> state.like)
  return (
     <div className='w-[100%] h-screen gap-[20px]  bg-black text-white flex justify-start items-center flex-col pt-[20px] md:pt-[100px]'>
       <Musicplayer/>

       {
        !songs.length<1 ? <>
        <h1 className='text-gray-300 font-semibold text-[20px]'>Likesongs..♪</h1>
       <div className='w-full h-[100%] mb-[160px] md:mb-[80px] md:h-[100%] gap-[20px] flex flex-col justify-start items-center overflow-auto'>
        {songs.map((song)=>{
            return <Card    name={song.name} image={song.image} singer={song.singer} songIndex={song.songIndex}/>
        })}
       </div>
       </>
       :  <div className='text-[30px] text-gray-500 font-semibold mt-72 md:mt-24'>No Like Songs..♪</div>
       }
       
    </div>
  )
}

export default Like
