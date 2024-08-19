

const Button = ({Next, text}) => {
  return (
    <div className="max-sm:px-5">
       <button
            // disabled={disable}
            onClick={Next}
            className={`lg:w-[436px] max-sm:w-full  h-[70px] mx-auto rounded-[5px] bg-[#252E6A] text-[#FFFFFF] font-normal text-[18px] leading-[22px] moderat-font`}
          >
            {text}
          </button>
    </div>
  )
}

export default Button
