import { DiJavascript } from "react-icons/di";
import Email from "../../assets/Icons/mail (2).svg";

const Newsletter = () => {
  return (
    <div className="text-center pb-[12.625rem] px-4 sm:px-6 md:px-8 lg:px-12">
      <h1 className="font-millik font-normal text-[24px] sm:text-[30px] md:text-[38px] leading-[32px] sm:leading-[40px] md:leading-[48px] text-[#0A0E27] pb-[1rem]">
        Subscribe to our newsletter
      </h1>
      <div className="w-full max-w-2xl mx-auto">
        <p className="font-Modarat font-normal text-[14px] sm:text-[16px] md:text-[1rem] leading-[20px] sm:leading-[22px] md:leading-[24px] text-[#606569] pb-[2.5rem]">
          Get instant messages and updates concerning your study abroad and how
          it affects you directly to your inbox
        </p>
      </div>
      <div className=" lg:justify-center  lg:pt-[2rem] relative ">
        <span className="py-[10px] px-[27px]  absolute -ml-[1rem] -mt-[0.6rem]">
          <img src={Email} alt="Mail icon" className="w-8 h-8 absolute  mt-4" />
        </span>

        <input
          type="text"
          placeholder="Enter your email address"
          className="lg:w-[608px]   lg:h-[64px] font-Modarat
            font-normal text-[16px] text-[#A1A4A8] leading-[16px] 
            outline-none bg-[#F5F5F5] rounded-[4px] pl-[3.8rem] border border-[#E6E6E6]"
        />

        <button
          className="py-[10px] px-[24px] rounded-[4px] bg-[#252E6A] text-[#FFFFFF] absolute -ml-[10rem] mt-[0.6rem]
            font-Modarat font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[20px] sm:leading-[22px] md:leading-[24px]"
        >
          Subscribe
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Newsletter;

