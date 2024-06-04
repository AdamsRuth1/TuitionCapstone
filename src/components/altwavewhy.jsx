import React from 'react';
import { motion } from "framer-motion"
export default function Why() {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
           <div className='bg-customLightBlueGray px-16'>
           <h1 className="mx-5 py-10 text-3xl md:text-5xl font-bold text-customBlack leading-12 my-12">
               Why use <span className="text-red-500">Tuition.</span>
              </h1>
              <div className='flex justify-center items-center text-center px-10 mx-15 space-x-10 flex-col sm:flex-row'>
          
          <div className='flex flex-col items-center sm:my-7'>

              <img alt='' src='http://localhost:5173/src/assets/undraw_safe_re_kiil%201.png'/>
              <h1 className='font-bold my-3 text-customBlack'> Fast and secure payments</h1>
              <p>
                Pay your tuition fees quickly and safely with our top-notch security measures. Focus on your education, and leave the payment worries to us.
              </p>
            </div>
            <div className='flex flex-col items-center sm:my-7'>

              <img className='' alt='' src='http://localhost:5173/src/assets/Illustrations%20for%20why%20cards.png'/>
              <h1 className='font-bold my-3 text-customBlack'> Multiple payment options</h1>
              <p>
              With our multiple payment options - bank transfers, card payments, direct account debits etc., you can conveniently pay fees to high schools, colleges and universities within Africa and across the globe using your local currency.
              </p>
            </div>
            <div className='flex flex-col items-center'>

              <img alt='' src='http://localhost:5173/src/assets/Illustrations%20for%20why%20cards%20(2).png'/>
              <h1 className='font-bold my-3 text-customBlack'> Affordable pricing</h1>
              <p>
              Our fees are competitive, helping you save money while paying your tuition.
              Our fees are competitive, helping you save money while paying your tuition.
              </p>
            </div>
            <div className='flex flex-col items-center'>

              <img alt='' src='http://localhost:5173/src/assets/undraw_safe_re_kiil%201.png'/>
              <h1 className='font-bold my-3 text-customBlack'> Real-time support</h1>
              <p>
              Our fees are competitive, helping you save money while paying your tuition.ur fees are competitive, helping you save money while paying your tuition.
              </p>
            </div>
          </div>
          </div>
          <div className='text-center'>
  <h1 className="mt-12 mb-0 text-3xl md:text-5xl font-bold text-customBlack">
    Over 10k + tuition paid
  </h1>
  <p className='mb-12'>across 100+ universities, colleges, and learning institutions across the world</p>
  <div className='flex justify-between px-14'>
  <div>
    <img src='http://localhost:5173/src/assets/harvard_university_logo.svg.png' />
  </div>
  <div>
    <img src='http://localhost:5173/src/assets/cambridge_university_press__assessment_logo.png.png' />
  </div>
  <div>
    <img src='http://localhost:5173/src/assets/udemy_logo.svg.png' />
  </div>
  <div>
    <img src='http://localhost:5173/src/assets/Group.png' />
  </div>
</div>
<div className='flex justify-center items-center space-x-24 space-y-16 '>
  <div className=''>
    <img src='http://localhost:5173/src/assets/coursera_logo.svg%20(1).png' />
  </div>
  <div>
    <img src='http://localhost:5173/src/assets/altcareer_logo.png.png' />
  </div>
  <div>
    <img src='http://localhost:5173/src/assets/ielts_online_tests_logo.svg.png' />
  </div>
  <div>
    <img src='http://localhost:5173/src/assets/the_city_university_of_new_york_logo.svg.png' />
  </div>
</div>

</div>

        </motion.div>
      </>
    );
  }
  