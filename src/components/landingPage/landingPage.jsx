import { motion } from "framer-motion";
import React from "react";
import logo from "../../assets/images/Hero Images.png";
import Footer from "../views/footer";
import Header from "../views/header";
import AltWaveExplore from "./explore";
import Why from "./whyaltwave";
import { NavLink, useLocation } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <div className="flex flex-col md:mt-11  mt-8 ml-24 mr-24 justify-between md:flex-row sm:flex-col font-Modarat">
          <div className=" px-8 md:my-0 md:py-22 md:flex-1 sm:w-full md:h-full sm:items-center">
            
            <h1 className=" md:leading-13 leading-9 md:mt-36 font-normal text-3xl md:text-6xl  text-customBlack md:my-8 my-4 font-millik">
              Empowering Dreams, Bridging <br />
              <span className="text-red-500">Borders.</span>
            </h1>
            <div>
              <p className="leading-8 font-Modarat text-xl">
                Your Passport to Global Education! Fulfill your dreams
                effortlessly as we streamline the process for you. Focus on your
                aspirations – we'll handle the rest!
              </p>
            </div>
            <div className="flex space-x-4 md:my-12 my-8 ml-0">
              <button className="bg-customButton border rounded-md text-white px-3  hover:bg-blue-500">
                {" "}
                Get started
              </button>
              <button className="border-customButton border-2 text-blue-900 rounded-md px-3 py-2 hover:bg-blue-900 hover:text-white">
                <NavLink to="/enroll">Enroll your institution</NavLink>
                
              </button>
            </div>
          </div>
          <div className="absolute inset-10  ml-96 mr-96 mt-20 bg-customBackgroundImage  bg-left"></div>
          <div className="md:my-0 my-8 mx-6  flex-1 md:mb-0 mb-6 sm:w-full ">
  
  <img src={logo} className="w-full  h-auto relative z-10" alt="Logo" />
</div>

        </div>

        <Why />
        <AltWaveExplore />
        <Footer />
      </motion.div>
    </>
  );
}
