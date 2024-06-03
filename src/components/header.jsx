import React, { useState } from 'react';
import logo from '../assets/expresswash logo.jpeg';
import Landing from './landing'
import About from './about'
import Service from './service'
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
<div className='flex mx-3'><img src={logo} alt='ExpressWash Logo' className='h-9' /><h1 className='my-2 mx-1  font-bold'>ExpressWash.Ng</h1></div>
      
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
        <a href='#' className='text-black hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:rounded-full px-4 py-2 border border-transparent transition-all duration-300'>Home</a>
    </li>
    <li>
        <a href='#' className='text-black hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:rounded-full px-4 py-2 border border-transparent transition-all duration-300'>About</a>
    </li>
    <li>
        <a href='#' className='text-black hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:rounded-full px-4 py-2 border border-transparent transition-all duration-300'>Service</a>
    </li>
    <li>
        <a href='#' className='text-black hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:rounded-full px-4 py-2 border border-transparent transition-all duration-300'>Contact</a>
    </li>
      </ul>
    </div>
    {/* mobile display */}
    {isOpen ? (
        <ul className='flex-col md:hidden shadow-md m-6  '>
            <li className=' text-black hover:bg-white hover:text-white hover:bg-blue-400 hover:border-blue-500 hover:rounded-full px-3 py-3 border border-transparent transition-all duration-300'><a href='#'className=''>Home</a></li>
            <li className=' text-black hover:bg-white hover:text-white hover:bg-blue-400 hover:border-blue-500 hover:rounded-full px-3 py-3 border border-transparent transition-all duration-300'><a href='#'>About</a></li>
            <li className=' text-black hover:bg-white hover:text-white hover:bg-blue-400 hover:border-blue-500 hover:rounded-full px-3 py-3 border border-transparent transition-all duration-300'><a href='#' >Services</a></li>
            <li className=' text-black hover:bg-white hover:text-white hover:bg-blue-400 hover:border-blue-500 hover:rounded-full px-3 py-3 border border-transparent transition-all duration-300'><a href='#'>Contact</a></li>
        </ul>
    ) : (
        null
    )}
      </nav>
      </motion.div>
      
      <Landing />
      <About />
      <Service />
    </>
  );
}
