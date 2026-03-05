import { createContext, useRef, useState , useEffect } from "react"
import { songsData } from "../songs"

export const datacontext = createContext()

function UserContext ({children}){
    let audio = useRef(new Audio())
    let [index , setindex] = useState(0)
    let [psong , setpsong] = useState(false)
    function playsong(){
        setpsong(true)
        audio.current.play()
    }

    function pausesong(){
        setpsong(false)
        audio.current.pause()
    }

    function prevsong(){
  setindex((prev) =>
    prev === 0 ? songsData.length - 1 : prev - 1
  )
}

    function nextsong (){
      setindex((prev) => (prev + 1) % songsData.length ) ;
    }

    useEffect(() => {
      audio.current.src=songsData[index].song
      audio.current.load()
      if(psong){
        playsong()
      }
    }, [index])
    
  return (
    <div>
      <datacontext.Provider value={{index , setindex , audio ,psong , setpsong , playsong , pausesong , nextsong , prevsong}}>
        {children}
      </datacontext.Provider>
    </div>
  )
}

export default UserContext
