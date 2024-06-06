import React, { useState } from 'react';
import logo from '../assets/images/Logo (2).png';
import { motion } from "framer-motion"
export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    console.log(isOpen);
  return (
    <>
    <motion.div initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
      <nav className="bg-white-400 py-2 shadow">
    <div className="flex items-center justify-between shadow-md py-2 ">
<div className='flex'><img src={logo} alt='ExpressWash Logo' className='h-16 mx-4' /></div>
      
      <div className='md:hidden border border-black-500 px-2 py-1 rounded ' >
        <button className='text-black border-black' onClick={toggleMenu}>
            <svg 
            className="h-6 w-6 " 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </button>
      </div>
      <ul className='hidden md:flex space-x-4'>
      <li>
        <a href='#' className='text-black hover:bg-white hover:text-customButton hover:border-customButton hover:rounded-full px-4 py-2 border-2 border-transparent transition-all duration-300'>Home</a>
    </li>
    <li>
        <a href='#' className='text-black hover:bg-white hover:text-customButton hover:border-customButton hover:rounded-full px-4 py-2 border-2 border-transparent transition-all duration-300'>Blog</a>
    </li>
    <li>
        <a href='#' className='text-black hover:bg-white hover:text-blue-900 hover:border-blue-900 hover:rounded-full px-4 py-2 border-2 border-transparent transition-all duration-300'>Developer</a>
    </li>
    <li>
        <a href='#' className='text-black hover:bg-white hover:text-blue-900 hover:border-customButton hover:rounded-full px-4 py-2 border-2 border-transparent transition-all duration-300'>Support</a>
    </li>
      </ul>
      <div className='md:flex justify-between space-x-4 mx-3 hidden'>
        <button className='border-2 border-customButton rounded-md text-customButton py-1 px-3 hover:bg-customButton hover:text-white'>Download App</button>
        <button className= 'bg-customButton border rounded-md text-white py-2 px-3 hover:bg-blue-900'>Sign in</button>
      </div>
    </div>
    {/* mobile display */}
    {isOpen ? (
        <ul className='flex-col md:hidden '>
            <li className=' text-black hover:text-white hover:bg-customButton hover:rounded-full px-3 py-3 border border-transparent transition-all duration-300'><a href='#'className=''>Home</a></li>
            <li className=' text-black hover:text-white hover:bg-customButton hover:rounded-full px-3 py-3 border border-transparent transition-all duration-300'><a href='#'>About</a></li>
            <li className=' text-black hover:text-white hover:bg-customButton hover:rounded-full px-3 py-3 border border-transparent transition-all duration-300'><a href='#' >Services</a></li>
            <li className=' text-black hover:text-white hover:bg-customButton  hover:rounded-full px-3 py-3 border border-transparent transition-all duration-300 '><a href='#'>Contact</a></li>
            <div className=' flex flex-col justify-between mx-3 my-2'>
            <button className='border-2 border-customButton rounded-md text-blue-800 py-1 w-full hover:bg-customButton hover:text-white'>Download App</button>
<button className='bg-blue-900 border rounded-md text-white py-2 w-full my-2 hover:bg-blue-900'>Sign in</button>

      </div>
        </ul>
        
        
    ) : (
        null
    )}
      </nav>
       {/* <Landing />
        <Why />
        <AltWaveExplore /> */}
      </motion.div> 
    
    </>
  );
}
