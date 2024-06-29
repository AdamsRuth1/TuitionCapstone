import React from "react";

const TuitionHeader = ({ count, Header, Paragraph,className }) => {
  return (
    <>
      <div className="w-[8.375rem] py-[0.75rem] bg-[#CCCCCC]  mb-[2rem]">
        <span className="text-white font-Modarat pl-[1.7rem] font-normal text-[18px] leading-[22px]">
          Step {count} of 5
        </span>
      </div>
      <h2 className="font-millik font-normal text-[30px] leading-[40px] mb-[1rem] text-[#252E6A]">
        {Header}
      </h2>

      <p
        className={`font-Modarat font-normal text-[16px] leading-[24px] mb-[2.5rem] text-[#606569] ${className}`}
      >
        {Paragraph}
      </p>
    </>
  );
};

export default TuitionHeader;
