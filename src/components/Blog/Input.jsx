import { useState } from "react";

const Input = ({icon, placeholder, text, handleClick, onChange}) => {



  return (
    <div className="flex lg:pt-[5rem] relative max-sm:pt-10 sm:pt-10 max-sm:px-10 sm:px-12">
      <div className="items-center max-sm:pt-2 sm:pt-2 lg:pt-3 max-sm:pl-3 sm:pl-3 absolute flex lg:pl-[17rem] ">
        <img src={icon} alt="Search icon" width={32} height={32} />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className="lg:w-full lg:mx-[16rem] sm:w-full lg:h-[64px] sm:h-[55px] font-Modarat max-sm:h-[44px]
         font-normal text-[16px] text-[#A1A4A8] leading-[16px] max-sm:w-full
         outline-none bg-[#F5F5F5] rounded-[4px] pl-[3.8rem] border border-[#E6E6E6]"
      />
      <div className="items-center float-end lg:pt-5  bottom-[0.6rem] max-sm:pt-4 relative sm:pt-5 ">
        <button
          className="lg:py-[10px] sm:py-[6px] sm:px-[14px] lg:px-[24px] max-sm:py-1 max-sm:px-1  rounded-[4px] bg-[#252E6A] absolute  max-sm:-ml-12 sm:-ml-[4rem] lg:-ml-[23rem] text-[#FFFFFF] 
        font-Modarat font-normal lg:text-[20px] max-sm:hidden leading-[24px]"
          onClick={handleClick}
        >
          {text}
        </button>
      </div>
    </div>
  );
};

export default Input;
