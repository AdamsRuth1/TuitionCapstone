import React from 'react';
import { motion } from 'framer-motion';
import Mock1 from "../../assets/images/Mockup & Blob 1.png";
import Mock2 from "../../assets/images/Mockup & Blob 2.png";
import Mock3 from "../../assets/images/Mockup and Blob 3.png";
import Mock4 from "../../assets/images/Frame 327.png";
import Step1 from "../../assets/images/Number1 container.png";
import Step2 from "../../assets/images/Number container2.png";
import Step3 from "../../assets/images/Number container (1).png";
import Step4 from "../../assets/images/Number container (2).png";
import Download from "../../assets/images/Mobile mockups (1).png";
import Mobile from "../../assets/images/Mobile mockups.png";
import Google from "../../assets/images/Playstore icons (1).png"; 
import Apple from "../../assets/images/Playstore icons.png";   
import Faq from "./faq";
import { FiArrowRight } from "react-icons/fi";
import Testimonial from "./testimonial";
export default function AltWaveExplore() {
    return (
        <> 
        <motion.div initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
           <Testimonial />
  <div className='mx-6'>
  <div className='text-center mb-0 md:mb-36'> <h1 className="mt-32 text-center  mb-0 text-5xl md:text-5xl  text-customBlack">
            Explore New Features
  </h1>
  <p className='mb-12'>Tailored to improve your experience. Worry less! Study More!!</p></div>
  <div className='flex justify-between px-5 flex-col md:flex-row sm:flex-col'>
    <div className='flex-1 hidden md:flex'>
        <img  src={Mock1}
              alt="Header Image"/>
    </div>
    <div className='flex-1'>
    <h1 className="mt-8 mb-8 text-3xl md:mt-12 md:text-5xl font-bold  sm:text-3xl text-customBlack line">
    Digital Wallet
  </h1><p className='leading-8 mb-8'>
  This isn't just a wallet; it's your launchpad to a smoother ‘study abroad’ experience. Forget the stress of accessing money in a new country, our Digital Wallet lets you hit the ground running, so you worry less about getting access to spendable money and focus on what truly matters: immersing yourself in the culture and excelling in your studies.
  </p>
  <button className="bg-customButton flex mt-10 border rounded-md text-white px-6 py-2 hover:bg-blue-900 ">
    Explore Wallet
    <FiArrowRight className='mx-2 my-1 ' />
    </button>
    <div className='flex-1 my-16 md:hidden'>
        <img  src={Mock1}
              alt="Header Image"/>
    </div>
    </div>

  </div>
  <div className='flex md:mt-20 justify-between px-5 flex-col md:flex-row sm:flex-col'>
  
  <div className='flex-1'>
    <h1 className="mt-12 mb-8  text-3xl md:text-5xl font-bold  sm:text-5xl text-customBlack line">
    Target Savings
  </h1><p className='leading-8 mb-8'>
  We understand that achieving your dream of studying abroad comes with its own set of challenges, especially when it comes to managing finances in the face of inflation and unstable exchange rates. <br/> <br/> That's why we've launched our new Target Savings feature – a flexible and empathetic solution designed to help you save towards your educational goals in a stress-free manner.
  </p>
  <button className="bg-customButton flex  mt-10 border rounded-md text-white px-6 py-2 my-2 hover:bg-blue-900 ">
    Explore Savings
    <FiArrowRight className='mx-2 my-1 ' />
    </button>
  
    </div>
    <div className='flex-1 md:mt-0 mt-14  mx-12'>
        <img src={Mock2}
              alt="Header Image"/>
    </div>
   

  </div>
  <div className='flex mt-28 justify-between px-5 flex-col md:flex-row sm:flex-col'>
    <div className='flex-1 hidden md:flex '>
        <img src={Mock3}
              alt="Mock3"/>
    </div>
    <div className='flex-1'>
    <h1 className="mt-12 mb-8  text-3xl md:text-5xl font-bold  sm:text-5xl text-customBlack line">
    Informative Blog
  </h1><p className='leading-8 mb-8'>
  We get it. Studying abroad sounds incredible, but the journey can feel overwhelming. Sifting through countless websites, unsure which are reliable and which are scams, can leave you feeling lost.<br /><br />
  The Tuition by Flutterwave Blog is your one-stop source for reliable information, from school applications to securing your dream scholarship and preparing for your journey.<br /><br />
  Explore our Blog today and take the first step towards a brighter future with our empathetic and reliable guidance – because we believe in making your dreams a reality, one post at a time.
  </p>
  <button className="bg-customButton flex mt-10 border rounded-md text-white px-6 py-2 my-2 hover:bg-blue-900 ">
    Explore Blog
    <FiArrowRight className='mx-2 my-1 ' />
    </button>
    <div className='flex-1 md:hidden md:mt-0 mt-14  mx-12'>
        <img src={Mock3}
              alt="Mock3"/>
    </div>
    </div>

  </div>
  <div className='flex mt-20 justify-between px-5 flex-col md:flex-row sm:flex-col'>
  <div className='flex-1'>
    <h1 className="mt-12 mb-8 text-3xl md:text-5xl font-bold  sm:text-5xl text-customBlack line">
    Pay Online Courses
  </h1><p className='leading-8 mb-8'>
  Whether you're sharpening your professional skills on Udemy, or delving deep into fascinating topics on Coursera, we got you covered. We offer different payment pathways specifically designed for you, ensuring a smooth and stress-free learning experience. <br/> <br/> We're committed to creating pathways that empower you to achieve your educational goals, regardless of where you are.
  </p>
  <button className="bg-customButton flex mt-10 border rounded-md text-white px-5 py-2 my-12 hover:bg-blue-900 ">
    Explore Payments
    <FiArrowRight className='mx-2 my-1 ' />
    </button>
  
    </div>
    <div className='flex-1  mx-12'>
        <img src={Mock4}
              alt="Header Image"/>
    </div>
   
    </div>
  </div>
  <div className='hidden sm:block bg-customLightBlueGray py-20 mt-24'>
  <h1 className="mx-5 py-10 text-3xl md:text-5xl font-bold text-customBlack leading-12 my-12 text-center">
    4 easy steps to process payment
  </h1>
  <div className='flex justify-between text-center items-center py-5 px-5 space-x-10'>
    <div className='flex-1 flex flex-col items-center'>
      <div>
        <img src={Step1} className="" alt="Circle1" />
      </div>
      <div>
        <h1 className="font-bold my-3 text-customBlack">Create an account</h1>
        <p className="">
          Sign up with your email, Google, or Apple login and breeze through the sign-up process in just a few minutes. Easy-peasy!
        </p>
      </div>
    </div>
    <div className='flex-1 flex flex-col items-center'>
      <div>
        <img src={Step2}  alt="Circle2" />
      </div>
      <div>
        <h1 className="font-bold my-3 text-customBlack">Submit your information</h1>
        <p className="">
          Select a school, online course service provider and enter all the required payment information, as well as your student information.
        </p>
      </div>
    </div>
    <div className='flex-1 flex flex-col items-center'>
      <div>
        <img src={Step3}  alt="Circle3" />
      </div>
      <div>
        <h1 className="font-bold my-3 text-customBlack">Verify your information</h1>
        <p className="">
          Double-check all the details provided and proceed to payment.
        </p>
      </div>
    </div>
    <div className='flex-1 flex flex-col items-center'>
      <div>
        <img src={Step4}  alt="Circle4" />
      </div>
      <div>
        <h1 className="font-bold my-3 text-customBlack">Payment confirmation</h1>
        <p className="">
        We’ll confirm your payment with your school or service provider in 48 hours, and keep you updated every step of the way as well.
        </p>
      </div>
    </div>
  </div>
</div>
      
  <div className="bg-customLightBlueGray  block lg:hidden md:hidden xl:hidden">
      <h1 className="mx-5 py-10 text-5xl  font-bold text-customBlack leading-12 my-10">
        4 easy steps to process payment
      </h1>
      <div className="justify-center items-start  space-y-10 ">
        <div className="flex flex-col sm:w-1/4">
          <div className="flex space-x-6 mb-4 ">
            <img src={Step1} alt="Circle1" className="w-8 h-8 sm:mr-4  mt-3  sm:mb-3" />
            <div>
              <h1 className="font-bold my-3 text-customBlack">Create an account</h1>
              <p className="text-sm">
                Sign up with your email, Google, or Apple login and breeze through the sign-up process in just a few minutes. Easy-peasy!
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center sm:w-1/4">
        <div className="flex space-x-6 mb-4 sm:mb-0">
            <img src={Step2} alt="Circle1" className="w-8 h-8 sm:mr-4  mt-3  sm:mb-3" />
            <div>
              <h1 className="font-bold my-3 text-customBlack">Submit your information</h1>
              <p className="text-sm">
                Select a school, online course service provider and enter all the required payment information, as well as your student information.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center sm:w-1/4">
        <div className="flex space-x-6 mb-4 sm:mb-0">
            <img src={Step3} alt="Circle1" className="w-8 h-8 sm:mr-4  mt-3  sm:mb-3" />
            <div>
              <h1 className="font-bold my-3 text-customBlack">Verify your information</h1>
              <p className="text-sm">
                Double-check all the details provided and proceed to payment.Double-check all the details provided and proceed to payment.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center sm:w-1/4">
        <div className="flex space-x-6 mb-4 sm:mb-0">
            <img src={Step4} alt="Circle1" className="w-8 h-8 sm:mr-4  mt-3  sm:mb-3" />
            <div>
              <h1 className="font-bold my-3 text-customBlack">Payment confirmation</h1>
              <p className="text-sm">
                We’ll confirm your payment with your school or service provider in 48 hours, and keep you updated every step of the way as well.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
          <Faq/>
          <div className='bg-customLightBlueGray md:py-32 py-16 px-5 mt-36'>
          <h1 className=" py:32 mb-10 text-3xl md:text-5xl font-bold text-customBlack leading-12 text-center">
           Safety and security guaranteed
              </h1> <p className='mb-12 md:ml-12 '>At Flutterwave, we take security seriously, so every payment made on our platform is 100% secure, even exceeding industry standards.!</p> 
              <div className='flex flex-col md:flex-row sm:flex-col justify-between ' >
                <div className='flex-1 md:mr-32'>
              <h1 className=" text-xl md:text-xl font-bold text-customBlack my-5 ">
              ISO 27001 & 22301 Certification
              </h1>
                <p>Our ISO 27001 & 22301 certification means that we have acceptable business practices and processes, including a robust business continuity plan.</p>
                
              </div>
              <div className='flex-1'>
              <h1 className=" text-xl md:text-xl font-bold text-customBlack my-5 ">
              PA DSS & PCI DSS Compliant
              </h1>
                <p>This certification is proof that Flutterwave as a payment gateway processor, has satisfied the highest level of Security Audit and authorizations.</p>
                
              </div>
             </div>  
          </div>
          <div className='flex bg-customLightBlueGray mt-44 ml-44 mr-44' >
            <div  className='ml-4'><img src={Download} className='h-80 w-96'/></div>
            <div className='ml-4 mt-6'>
            <h1 className='font-bold text-3xl text-customBlack mb-4 mt-6'> Download the app</h1> 
              <p>Our app offers a personalized experience with streamlined payment options to make your education journey less stressful and improve your experience.</p>
              <div className='flex '>
              <button className="bg-customButtonBtn flex py-4 mt-6 mr-6  pr-4 border rounded-md text-white text-sm hover:bg-blue-900 "> <img className='py-1 ml-4  mr-3' src={Apple}/>
               Get on Google Play
                </button>
                 <button className="border-customButton border-2  flex py-4 px-1 pr-4 mt-6 mr-6  rounded-md text-customBlack text-sm "> <img className='py-1 ml-4 mr-3' src={Google}/>
               Get on Google Play
                </button> 
                       </div>
            </div>
          </div>
          <div className='flex py-10 px-4 border-b rounded-xl'>
      
            <div className='block sm:hidden flex-1 bg-customLightBlueGray py-1 px-2'>
              <h1 className='font-bold text-3xl text-customBlack mb-4 mt-6'> Download the app</h1> 
              <p>Our app offers a personalized experience with streamlined payment options to make your education journey less stressful and improve your experience.</p>
              <div className='flex'>
              <div className='flex flex-col mr-4'>
              <button className="bg-customButtonBtn flex py-4 mt-6 border rounded-md text-white text-sm hover:bg-blue-900 "> <img className='py-1 ml-2 mr-1' src={Apple}/>
               Get on Google Play
                </button>
                <button className='flex border-2 mt-6 border-customButton rounded-md text-customButton py-4 hover:bg-customButton hover:text-white'><img src={Google} className='py-1 ml-2 mr-1'/>Get on App Store</button>
                </div>
                <div><img src={Mobile} className='h-48'/></div>
                
            </div>
            </div>
           
          </div>
         
        </motion.div>
        </>
    )
}