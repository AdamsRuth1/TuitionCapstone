import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/Hero Images.png";
import Header from "./header";
import Why from "./whyaltwave";
import AltWaveExplore from "./explore";

export default function Landing() {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Header />
          <div className="flex flex-col justify-between my-10 md:flex-row sm:flex-col">
            <div className="py-3 px-8 my-12 md:flex-1 sm:w-full md:h-full sm:items-center">
              <h1 className="md:leading-tight text-3xl md:text-5xl font-bold text-black leading-12 my-12">
                Empowering <br /> Dreams, Bridging{" "} <br />
                <span className="text-red-500">Borders.</span>
              </h1>
              <div>
                <p className="leading-8">
                  Your Passport to Global Education! Fulfill your dreams
                  effortlessly as we streamline the process for you. Focus on
                  your aspirations – we'll handle the rest!
                </p>
              </div>
              <div className="flex space-x-4 my-8 ml-0">
                <button className="bg-customButton border rounded-md text-white px-3 py-2 my-2 hover:bg-blue-500">
                  Get started
                </button>
                <button className="border-customButton border-2 text-blue-900 rounded-md px-3 py-2 my-2 hover:bg-blue-900 hover:text-white">
                  Enroll your institution
                </button>
              </div>
            </div>
            <div className="my-10 mx-10 flex-1 sm:w-full">
              <img src={logo} className="w-full h-auto" />
            </div>
          </div>
          <Why />
          <AltWaveExplore />
         
        </motion.div>
      </>
    );
  }
  