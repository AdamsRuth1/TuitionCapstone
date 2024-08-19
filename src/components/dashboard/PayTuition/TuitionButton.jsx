const TuitionButton = ({ disabled, handleSubmit, back, forward, Next, className }) => {
  return (
    <div className="flex justify-between max-sm:gap-5 lg:w-[436px] max-sm:w-full mb-[2.5rem] max-sm:px-5">
      <button
        // disabled={disabled}
        // onClick={handleSubmit}
        className={`lg:w-[206px] max-sm:w-full   rounded-[5px] bg-[#CCCCCC] px-[24px] py-[12px]  text-[#1B2025] font-normal text-[18px] leading-[22px] moderat-font ${
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        {back}
      </button>
      <button

        onClick={Next}
        className={`lg:w-[206px] max-sm:w-full  rounded-[5px] bg-[#252E6A] px-[24px] py-[12px] text-[#FFFFFF]  font-normal text-[18px] leading-[22px] moderat-font ${
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        }  ${className}`}
      >
        {forward}
      </button>
    </div>
  );
};

export default TuitionButton;

// const TuitionButton = ({ back, forward, Next, disabled }) => {
//   return (
//     <div className="flex justify-between">
//       <button
//         type="button"
//         // className="btn btn-secondary"
//         className={`lg:w-[206px] max-sm:w-full   rounded-[5px] bg-[#CCCCCC] px-[24px] py-[12px]  text-[#1B2025] font-normal text-[18px] leading-[22px] moderat-font ${
//           disabled ? "cursor-not-allowed" : "cursor-pointer"
//         }`}
//         onClick={() => Next(-1)}
//       >
//         {back}
//       </button>
//       <button
//         type="submit"
//         className={`lg:w-[206px] max-sm:w-full  rounded-[5px] bg-[#252E6A] px-[24px] py-[12px] text-[#FFFFFF]  font-normal text-[18px] leading-[22px] moderat-font ${
//           disabled ? "cursor-not-allowed" : "cursor-pointer"
//         } `}
//         onClick={() => Next(1)}
//       >
//         {/* disabled={disabled} // Use the disabled prop here */}
//         {forward}
//       </button>
//     </div>
//   );
// };

// export default TuitionButton;
