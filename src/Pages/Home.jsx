import React, { useContext, useState , useEffect } from 'react'
import { IoPlay } from "react-icons/io5";
import { songsData } from '../songs'
import musicimg from '../assets/musicanim.webp'
import { CgPlayTrackPrev } from "react-icons/cg";
import { CgPlayTrackNext } from "react-icons/cg";
import { datacontext } from '../Context/UserContext';
import { FaPause } from "react-icons/fa6";
import Card from '../Components/Card';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import Nav from '../Components/Nav'
import Musicplayer from '../Components/Musicplayer';
const Home = () => {
  
  let {audio , index , psong  , playsong , pausesong , nextsong , prevsong} = useContext(datacontext)
    
  let [range , setrange] = useState(0)
  let [arrow , setarrow] = useState(false)

  useEffect(() => {
    const updateprogreserange = ()=> {
      let duration = audio.current.duration
      let currentTime = audio.current.currentTime
      let progress = (currentTime/duration)*100
      setrange(progress)
    }
    audio.current.addEventListener("timeupdate", updateprogreserange)
    
  })
  

  function handlerange(e) {
    let newrange = e.target.value
    setrange(newrange)
    let duration = audio.current.duration
    audio.current.currentTime = (duration*newrange)/100
  }

  function handlearrow(){
    setarrow(prev=>!prev)
  }



  return (
    <div className='w-full min-h-screen bg-black flex overflow-auto'>
     {
      !arrow ? <MdKeyboardArrowDown
    className='text-white md:hidden absolute  top-[16px] left-[16px] text-[30px] z-50'
    onClick={handlearrow}/>
    : <MdKeyboardArrowRight className='text-white md:hidden absolute  top-[16px] left-[16px] text-[30px] z-50' onClick={handlearrow}/>
     }
     
     {
        !arrow ? 
        <>
        <div className='min-h-screen w-[100%] md:w-[50%] sticky  flex flex-col gap-[15px] justify-start items-center'>

        <h1 className='text-white font-semibold pt-[20px] md:pt-[95px] text-[20px]'>Now Playing</h1>
        
        {psong ? <div className='w-[280px] h-[280px] mt-5 md:mt-2 md:w-[230px] md:h-[230px] overflow-hidden  flex justify-center items-center object-fill relative'>
          <img src={songsData[index].image} alt=""  className='rounded-md w-[100%] h-[100%]'/>
          <div className=' h-[100%] w-[100%] top-0 absolute bg-black opacity-[0.6] flex justify-center items-center'>
            <img src={musicimg} alt="" className='h-[33%] ' />
          </div>
        </div> 
      :
      <div className='w-[280px] h-[280px] mt-6 md:mt-2 md:w-[230px] md:h-[230px] overflow-hidden  flex justify-center items-center object-fill relative'>
          <img src={songsData[index].image} alt=""  className='rounded-md w-[100%] h-[100%]'/>
       </div>
      }
        
        
        <div className='p-2 md:p-0'>
          <div className=' text-white text-[30px] md:text-[20px] font-bold p-0'>{songsData[index].name}</div>
          <div className='text-gray-400 text-center text-[20px] md:text-[14px]'>{songsData[index].singer}</div>
        </div>
        <div className='w-full flex justify-center items-center mt-3 md:mt-0'>
          <input type="range" name="" id="range" value={range} onChange={handlerange} className='w-[50%] h-[5px] rounded-sm mt-3 md:mt-0'/>
        </div>
        <div className='text-white flex gap-6 mt-4 justify-center items-center md:mt-1'>
          <CgPlayTrackPrev onClick={()=>prevsong()} className='w-[32px] h-[32px] md:w-[20px] md:h-[20px] transition-all cursor-pointer hover:text-slate-400 rounded-xl'/>
          

          {!psong ? 
                <div className='w-[70px] h-[70px] md:w-[50px] md:h-[50px] transition-all cursor-pointer rounded-[50%] bg-slate-50 text-black flex justify-center items-center hover:bg-slate-300'>
                  <IoPlay onClick={()=>playsong()} className='w-[30px] h-[30px] md:w-[20px] md:h-[20px] pl-[3px]'/>
                </div>
              : 
                <div className='w-[70px] h-[70px] md:w-[50px] md:h-[50px] transition-all cursor-pointer rounded-[50%] bg-slate-50 text-black flex justify-center items-center hover:bg-slate-300'>
                  <FaPause onClick={()=>pausesong()} className='w-[30px] h-[30px] md:w-[20px] md:h-[20px] '/>
                </div>
            }
          
          <CgPlayTrackNext onClick={()=>nextsong()} className='w-[35px] h-[35px] md:w-[20px] md:h-[20px] transition-all cursor-pointer hover:text-slate-400 rounded-xl'/>
        </div>
      </div>

      <div className="w-full md:w-[50%] h-screen hidden md:flex flex-col gap-[10px] overflow-y-auto pt-[120px]">


        {songsData.map((song)=>(
          <Card name={song.name} image={song.image} singer={song.singer} songIndex={song.id-1}/>
        ))}
      </div>
        </>
       :
        <div className='w-[100%] md:w-[50%] h-screen mt-[80px] mb-[160px] flex  items-center md:flex flex-col gap-[15px] overflow-y-auto '>
          <Musicplayer className = ' '/>
        {songsData.map((song)=>(
          <Card name={song.name} image={song.image} singer={song.singer} songIndex={song.id-1}/>
        ))}
      </div>
       }
      
    </div>
  )
}

export default Home
