
import Footer from "../views/footer";
import Header from "../views/header";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function Enroll() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.example.com/countries")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data); // Assuming the API response is an array of country objects
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
        setLoading(false);
      });
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
     
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
           <Header />
          <div className="flex md:mt-16">
<div className="flex-1 text-gray-700 "> <h1 className="md:text-5xl text-customBlack md:mb-6 font-bold"> Enroll your institution</h1>
<p>With Tuition, no matter your location in the world, your students can easily pay their education fees without hassle <br/> <br/>
Please complete the form to connect with a member of our team.
</p>
</div>
<div className="flex-1">
<div className="mb-6">
          <input
            className="shadow appearance-none border rounded w-2/3  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="schoolName"
            type="text"
            placeholder="school name"
          />
        </div>
        <div className="mb-6">
          
          <div className="relative">
            <select
              className="block appearance-none w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="country"
            >
              {countries.map((country, index) => (
                <option key={index}>{country.name}</option> // Assuming each country object has a 'name' property
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 left-50  right-30 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M9.293 14.707a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0-1.414-1.414L10 12.586l-4.293-4.293a1 1 0 1 0-1.414 1.414l5 5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
</div>
          </div>
        </motion.div>
      
      <Footer />
    </>
  );
}
