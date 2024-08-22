
const PaymentMethod = ({ Method, description, image, className, handleDeposit }) => {

  return (
    <div className="w-[528px]  max-sm:w-[400px] max-sm:my-6 max-sm:m-auto py-[24px] mb-[2.5rem] cursor-pointer  px-[16px] bg-white border border-[#CCCCCC] rounded-[8px]" onClick={handleDeposit}>
      <div className="flex gap-[1.7rem]">
        <div
          className={`w-[72px] h-[72px] max-sm:w-[90px] flex items-center pl-1 rounded-full bg-[#D9D9D9] ${className}`}
        >
          <img src={image} alt="payment method icon" />
        </div>
        <div className="pt-2 ">
          <h2 className="font-Modarat pb-3 font-bold text-[20px] leading-[24px] text-[#000000]">
            {Method}
          </h2>

          <p className="font-Modarat font-normal text-[16px] leading-[16px] text-black">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
