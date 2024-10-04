import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function ComingSoon() {
    
    return(
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
<div className="flex flex-col justify-center items-center h-screen">
  <h1 className="text-5xl text-customBlack font-millik font-normal">COMING SOON</h1>
  <NavLink to="/" className=" underline italic text-blue-400">
    Go back to home page
  </NavLink>
</div>


      </motion.div>
    )
    
}