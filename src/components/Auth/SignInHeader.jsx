import SignLogo from "../../assets/images/SigninLogo.svg";

const SignInHeader = ({ header, Paragraph, MobileParagraph }) => {
  return (
    <section className="max-sm:flex max-sm:justify-center">
      <div className=" ">
        <div className="  flex gap-3 lg:pt-[4rem] max-sm:pt-10">
          <h1 className="lg:text-[38px] max-sm:text-[20px] font-normal leading-[48px] text-[#0A0E27] millik-font">
            {header}
          </h1>
          <img src={SignLogo} height="40" alt="Your Logo" />
        </div>
        <p className=" max-sm:hidden text-[1rem] leading-[1rem] font-normal text-[#606569] w-[354px] moderat-font">
          {Paragraph}
        </p>
        <div className="">
          <p className="lg:hidden text-[1rem] leading-[1rem] font-normal text-[#606569] w-[354px] moderat-font">
            {MobileParagraph}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignInHeader;
