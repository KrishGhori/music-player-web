import { React, useEffect  , useState } from 'react'
import Musicplayer from '../Components/Musicplayer'
import { IoMdSearch } from "react-icons/io";
import { songsData } from '../songs';
import Card from '../Components/Card';

const Search = () => {
  const [input , setinput] = useState("")
  const [newlist , setnewlist] = useState([])

  useEffect(() => {
   let a = songsData.filter((song)=>song.name.toLowerCase().includes(input) || (song.singer.toLowerCase().includes(input)) || (song.singer.includes(input)) || (song.name.includes(input)))
   setnewlist(a)
  }, [input])
  
  return (
    <div className='w-[100%] h-screen gap-[20px] bg-black text-white flex justify-start items-center flex-col pt-[20px] md:pt-[100px]'>
      <Musicplayer className=' w-[60%]'/>

      <form action="" className='w-[90%] max-w[70%] h-[60px] flex justify-center items-center bg-black overflow-hidden' 
      onSubmit={(e)=>{
          e.preventDefault()
      }}>
        <input type="text" placeholder='  Search songs...' className='h-[40px] w-[50%] md:w-[30%] rounded-l-lg bg-slate-500'
          onChange={(e)=>setinput(e.target.value)} value={input}/>
        <div className='pl-[5px] bg-slate-500 text-white  h-[40px] w-[40px] outline-none border-0 p-[10px] flex justify-center items-center rounded-r-lg'>
          <IoMdSearch className='pr-[2px] text-[20px]'/> 
        </div>
      </form>
      
      {input ? <div className='w-[100%] h-[100%] overflow-auto flex justify-start items-center flex-col p-[20px] gap-[25px]'>
            {newlist.map((song)=>(
              <Card name={song.name} image={song.image} singer={song.singer} songIndex={song.id-1}/>
            ))}
        </div>
        :
        <div className='flex justify-center items-center text-[30px] md:text-[40px] text-gray-500 font-semibold'>
          Search Song...♪
        </div> }

    </div>
  )
}

export default Search
