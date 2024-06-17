

const Input = ({icon, placeholder, text, handleClick}) => {

  return (
    <div className=" flex justify-center lg:pt-[5rem] relative">
      <div className="items-center flex bottom-4 left-[28rem] absolute">
        <img src={icon} alt="Search icon" width={32} height={32} />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="lg:w-full mx-[27rem] lg:h-[64px] font-Modarat
         font-normal text-[16px] text-[#A1A4A8] leading-[16px] 
         outline-none bg-[#F5F5F5] rounded-[4px] pl-[3.8rem] border border-[#E6E6E6]"
      />
      <div className="items-center flex bottom-[0.6rem] right-[28rem] absolute">
        <button
          className="py-[10px] px-[24px] rounded-[4px] bg-[#252E6A] text-[#FFFFFF] 
        font-Modarat font-normal text-[20px] leading-[24px]"
          onClick={handleClick}
        >
          {text}
        </button>
      </div>
    </div>
  );
};

export default Input;
