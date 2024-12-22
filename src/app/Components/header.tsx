import React from 'react'
import { BsPersonExclamation } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";

export default function header(){
    return(
    <header >
      <div className='flex justify-between items-center px-8 py-4'>
        <h1 className='text-2xl font-bold text-black px-16'>Furniro</h1>
        <nav className="hidden md:flex space-x-8 items-center">
         <a href ='#' className='text-slate-600 hover:text-black underline'>Home</a>
         <a href ='#' className='text-slate-600 hover:text-black '>Shop</a>
         <a href ='#' className='text-slate-600 hover:text-black '>About</a>
         <a href ='#' className='text-slate-600 hover:text-black '>Contact</a>
        </nav>
        <div className='flex item-center space-x-6'>
          <div className='hidden lg-flex items-center bg-slate-400 rounded-md px-3 py-2'>
          
          </div>
          <BsPersonExclamation />
          <IoSearch />
          <FaRegHeart />
          <BsCart3 />
          

        </div>
      </div>
    </header>
    )
    
}









