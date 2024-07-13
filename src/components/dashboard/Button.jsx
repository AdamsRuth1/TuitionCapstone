

const Button = ({Next, text}) => {
  return (
    <div>
       <button
            // disabled={disable}
            onClick={Next}
            className={`w-[436px] h-[70px] mx-auto rounded-[5px] bg-[#252E6A] text-[#FFFFFF] font-normal text-[18px] leading-[22px] moderat-font`}
          >
            {text}
          </button>
    </div>
  )
}

export default Button
