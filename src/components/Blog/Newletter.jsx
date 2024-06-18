import Email from "../../assets/Icons/mail (2).svg";

const Newletter = () => {
  return (
    <div className="text-center pb-[12.625rem]">
      <h1 className="font-millik font-normal text-[38px] leading-[48px] text-[#0A0E27] pb-[1rem]">
        Subscribe to our newsletter
      </h1>
      <div className="w-[608px] m-auto ">
        <p className=" font-Modarat font-normal text-[1rem] leading-[24px]  text-[#606569] pb-[2.5rem] ">
          Get instant messages and update concerning your study abroad and how
          it affects you direct to your inbox
        </p>
      </div>
      <div className=" flex justify-center lg:pt-[5rem] relative">
        <div className="items-center flex bottom-4 left-[23rem] absolute">
          <img src={Email} alt="Search icon" width={32} height={32} />
        </div>
        <input
          type="text"
          placeholder="Enter your email address"
          className="lg:w-[608px] lg:h-[64px] font-Modarat
         font-normal text-[16px] text-[#A1A4A8] leading-[16px] 
         outline-none bg-[#F5F5F5] rounded-[4px] pl-[3.8rem] border border-[#E6E6E6]"
        />
        <div className="items-center flex bottom-[0.6rem] right-[23rem] absolute">
          <button
            className="py-[10px] px-[24px] rounded-[4px] bg-[#252E6A] text-[#FFFFFF] 
        font-Modarat font-normal text-[20px] leading-[24px]"
            // onClick={handleClick}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newletter;
