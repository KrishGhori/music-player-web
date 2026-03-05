import React from 'react'
import { MdHome } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { RiPlayListLine } from "react-icons/ri";
import { IoMdHeart } from "react-icons/io";
import {NavLink} from "react-router-dom";
const Nav = () => {
  return (
    <div className='w-full md:h-[80px] h-[70px] bg-black fixed bottom-0 md:top-0 flex  text-white justify-around
    sm:justify-center rounded-t-3xl md:rounded-[0px]  items-center gap-[0px] md:gap-[50px] p-[10px] z-[9999]'>
    
    <NavLink to={"/"}><MdHome className='w-[25px] h-[25px]' /></NavLink>
    <NavLink to={"/search"}><IoMdSearch className='w-[25px]  h-[25px]'/></NavLink>
    <NavLink to={"/playlist"}><RiPlayListLine className='w-[25px] h-[25px]'/></NavLink>
    <NavLink to={"/like"}><IoMdHeart className='w-[25px] h-[25px]'/></NavLink>
    
    </div>
  ) 
}

export default Nav
