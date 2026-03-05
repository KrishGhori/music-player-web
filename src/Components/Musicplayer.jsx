import React, { useContext } from 'react'
import { songsData } from '../songs'
import { datacontext } from '../Context/UserContext'
import { IoPlay } from "react-icons/io5";
import { FaPause } from "react-icons/fa6";
import Home from '../Pages/Home';

const Musicplayer = () => {
  const {psong , playsong , pausesong , index} = useContext(datacontext)
  return (
    <div className=' bg-white w-[100%] md:w-[40%] h-[75px] md:h-[80px] rounded-t-3xl fixed flex bottom-[70px] md:bottom-[0px]'>
      <div className='flex justify-start  items-start gap-[20px] w-[80%] h-[100%] cursor-pointer pl-[25px] md:pl-[20px] pt-[8px] md:pt-[9px]'>
            <div>
                <img src={songsData[index].image} alt="" className='w-[60px] object-fill rounded-lg max-h-[60px] md:max-h-[70px] md:w-[70px]'/>
            </div>
            <div className='text-white text-[15px] md:text-[20px]'>
                <div className='text-[1.3em] md:text-[1.2em] text-black font-semibold'>{songsData[index].name}</div>
              <div className='text-[1.1em] md:text-[0.8em] text-gray-500 '>{songsData[index].singer}</div>
              
            </div>
        </div>
        <div className='w-[20%] flex items-center justify-center overflow-hidden pl-1'>
                {!psong ? 
                              <div className='w-[50px] h-[50px] transition-all cursor-pointer rounded-3xl bg-black text-white flex justify-center items-center hover:bg-slate-300'>
                                <IoPlay onClick={()=>playsong()} className='w-[20px] h-[20px]'/>
                              </div>
                            : 
                              <div className='w-[50px] h-[50px] transition-all cursor-pointer rounded-3xl bg-black text-white flex justify-center items-center hover:bg-slate-300'>
                                <FaPause onClick={()=>pausesong()} className='w-[20px] h-[20px]'/>
                              </div>
                          }
              </div>
    </div>
  )
}

export default Musicplayer
