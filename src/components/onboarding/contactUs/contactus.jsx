import React from "react";
import { motion } from "framer-motion";
import Header from "../../views/header";
import { NavLink } from "react-router-dom";
import Footer from "../../views/footer";
import Vector from "../../../assets/images/Vector (3).png";
import Email from "../../../assets/images/email container.png";
import Phone from "../../../assets/images/Phone container.png";
import X from "../../../assets/images/X socials container.png";
import Faq from "../../../assets/images/FAQs container.png";
import Bob from "../../../assets/images/Blob 1 (1).png";
import Small from "../../../assets/images/3d_small_people_-_global_manager-removebg-preview 1 (1).png";
export default function ContactUs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <div className="flex flex-col justify-center font-millik font-normal text-3 leading-48 text-center text-customBlack mt-92 ">
        <div className="flex justify-center ">
          <img src={Vector} />
          <h1 className="ml-6"> Let’s sort you out </h1>
        </div>
        <p className="font-Modarat font-normal text-customGray text-base leading-6 my-5 mb-24">
          {" "}
          Need help with something? Our 24/7 support team is ready to assist you
          on <br /> your preferred channel
        </p>
      </div>

      <div className="relative  ml-24 flex mb-28">
        <form className="flex-1">
          <div className="flex ">
            <div className="mr-6">
              <label className="font-Modarat text-lg text-customBlack">
                {" "}
                First name
              </label>{" "}
              <br />
              <input
              id="firstName"
                type="text"
                className="border px-5 py-2 border-customLine my-2 rounded-md "
                placeholder="Enter first name"
              />
            </div>
            <div>
              <label className="font-Modarat text-lg text-customBlack">
                {" "}
                Last name
              </label>{" "}
              <br />
              <input
              id="lastName"
                type="text"
                className="border  px-5 text-customBlack py-2 border-customLine my-2 rounded-md "
                placeholder="Enter Last name"
              />
            </div>
           
          </div>
          <div className="mt-10">
            <label className="font-Modarat text-lg text-customBlack">
              Email address
            </label>
            <br />
            <input
              type="email"
              id="email"
              className="border px-5 py-2 border-customLine my-2 rounded-md  w-full"
              placeholder="example@flutterwave.com"
            />
          </div>
          <div className="mt-10">
            <label className="font-Modarat text-lg text-customBlack">
              Message
            </label>
            <br />
            <div className="">
              <textarea
              id="message"
                className="border w-full py-5 px-3 mt-2 border-customLine rounded-md resize-none"
                placeholder="Leave an enquiry or complaint for us..."
                style={{ height: "150px", paddingTop: "1rem" }}
              />
            </div>
          </div>

          <button className="bg-customBlack font-Modarat py-4 w-full text-white  border rounded-md mt-10 mb-28">
            Send Message
          </button>
        </form>
        <div className="bg-customLine w-px mb-52 mr-16 ml-16 mt-4"> </div>
        <div className="mr-56">
          <div className="flex">
            <img src={Email} className="w-12 h-12" />
            <div className="ml-8">
              <h1 className="font-millik text-customBlack text-2xl mb-2">
                {" "}
                Email Us
              </h1>
              <p className="font-Modarat text-customGray text-lg">
                <a href="">@Support.flutter.com</a>
              </p>
            </div>
          </div>
          <div className="flex mt-14">
            <img  src={Phone} className="w-12 h-12" />
            <div className="ml-8">
              <h1 className="font-millik text-customBlack text-2xl mb-2">
                {" "}
                Call Us
              </h1>
              <p className="font-Modarat text-customGray text-lg">
                +234 (xxx) xxxx xxxx{" "}
              </p>
              <p className="font-Modarat text-customGray text-lg">
                <a href="">0700 Flutterwave</a>
              </p>
            </div>
          </div>
          <div className="flex mt-14">
            <a href="https://x.com/theflutterwave"><img src={X} className="w-12 h-12" /></a>
            <div className="ml-8">
              <h1 className="font-millik text-customBlack text-2xl mb-2">
                {" "}
                Contact us on X
              </h1>
              <p className="font-Modarat text-customGray text-lg">
               @x.com/tuitionbyflutter
              </p>
            </div>
          </div>
          <div className="flex mt-14 mr-6">
            <NavLink to="/faq"><img src={Faq} className="w-12 h-12" /></NavLink>
            <div className="ml-8">
              <h1 className="font-millik text-customBlack text-2xl mb-2">
                {" "}
                FAQs
              </h1>
              <p className="font-Modarat text-customGray text-lg leading-6">
                <NavLink to="/faq">
                  Check out our FAQ’s. You just might <br/> find what you need here
                </NavLink>
              </p>
            </div>
          </div>
          <div className="">
          <img src={Bob} alt="Blob Image" className="absolute bottom-0 right-0 " />
        <img src={Small} alt="Small People Image" className="absolute bottom-0 end-32  " />
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
