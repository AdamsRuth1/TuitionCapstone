

const Button = ({ disable, handleSubmit, text }) => {
  return (
    <>
      <div className="pt-[2rem]">
        <button
          disabled={disable}
          onClick={handleSubmit}
          className={`w-[81%] max-sm:w-full h-[72px] rounded-[5px] bg-[#252E6A] text-[#FFFFFF] font-normal text-[18px] leading-[22px] moderat-font ${disable ? "cursor-not-allowed" : "cursor-pointer"}`}
        >
          
          {text}
        </button>
      </div>
    </>
  );
};

export default Button;
