import React from "react";

const Loading = ({ text }) => {
  return (
    <div className="pt-[2rem]">
      <button
        className={`w-[81%] max-sm:w-full h-[72px] rounded-[5px] bg-[#252E6A] text-[#FFFFFF] font-normal text-[18px] leading-[22px] moderat-font `}
      >
        {text}
      </button>
    </div>
  );
};

export default Loading;
