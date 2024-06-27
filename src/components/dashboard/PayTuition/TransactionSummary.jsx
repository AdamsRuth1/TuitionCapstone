import PenIcon from "../../../assets/Icons/pencil-edit-01.svg";
const TransactionSummary = ({Next}) => {
  return (
    <div className="w-full pt-[4rem]  ">
      <div className="w-[8.375rem] py-[0.75rem] bg-[#CCCCCC] font-normal  mb-[2rem]">
        <span className="text-white font-Modarat pl-[1.7rem] text-[18px] leading-[22px]">
          Step 4 of 5
        </span>
      </div>

      <h2 className="font-millik font-normal text-[30px] leading-[40px] mb-[1rem] text-[#252E6A]">
        Transaction Summary
      </h2>
      <p className="font-Modarat font-normal w-[470px] text-[16px] leading-[24px] mb-[2.5rem] text-[#606569]">
        To ensure a successful transaction, verify your details and confirm
        before proceeding to payment.
      </p>
      <div className="flex justify-between mb-[1.5rem] ">
        <h3 className="font-Modarat font-medium text-[20px] leading-[24px] text-[#51575D]">
          Institution Information
        </h3>
        <div className="flex w-[100px] h-[40px] -mt-[0.4rem] rounded-[99px] bg-[#E0E2F0]  px-[17px] pt-[12px] gap-5">
          <h3 className="font-Modarat font-normal text-[16px] leading-[16px] text-[#252E6A]">
            Edit
          </h3>
          <div className="">
            <img src={PenIcon} alt="a pen Icon" />
          </div>
        </div>
      </div>
      <div className="border-b  border-[#51575D] mb-[2rem]"></div>
      {/* <div> */}
      <div className="flex gap-[12.25rem] mb-[1.5rem]">
        <h4 className="font-Modarat font-normal text-[16px] leading-[24px] text-[#51575D]">
          Institution:
        </h4>
        <h4 className="font-Modarat font-normal text-[16px] leading-[24px] text-[#51575D]">
          Alberta University
        </h4>
      </div>
      <div className="flex gap-[12.8rem]">
        <h4 className="font-Modarat font-normal text-[16px] leading-[24px] text-[#51575D]">
          Address:
        </h4>
        <h4 className="font-Modarat font-normal text-[16px] leading-[24px] text-[#51575D]">
          Ontario
        </h4>
      </div>
      {/* </div> */}
      <div className="flex justify-between mt-[4.5rem] mb-[1.5rem]">
        <h3 className="font-Modarat font-medium text-[20px] leading-[24px] text-[#51575D]">
          Payment Information
        </h3>
        <div className="flex w-[100px] h-[40px] -mt-[0.4rem] rounded-[99px] bg-[#E0E2F0]  px-[17px] pt-[12px] gap-5">
          <h3 className="font-Modarat font-normal text-[16px] leading-[16px] text-[#252E6A]">
            Edit
          </h3>
          <div className="" onClick={Next}>
            <img src={PenIcon} alt="a pen Icon" />
          </div>
        </div>
      </div>
      <div className="border-b  border-[#51575D] mb-[2rem]"></div>
      <div className="flex gap-[11rem] mb-[1.5rem]">
        <h4 className="font-Modarat font-normal text-[16px] leading-[24px] text-[#51575D]">
          Payment for:
        </h4>
        <h4 className="font-Modarat font-normal text-[16px] leading-[24px] text-[#51575D]">
          Tuition
        </h4>
      </div>
      <div className="flex gap-[4.6rem]">
        <h4 className="font-Modarat font-normal text-[16px] leading-[24px] text-[#51575D]">
          Country you're paying from:
        </h4>
        <h4 className="font-Modarat font-normal text-[16px] leading-[24px] text-[#51575D]">
          Nigeria
        </h4>
      </div>
      <div className="flex gap-[10.6rem] mt-[1.5rem] mb-[1.5rem]">
        <div className="font-Modarat   font-normal text-[16px] leading-[24px] text-[#51575D]">
          <h4>Total payment</h4>

          <span>(plus fees):</span>
        </div>
        <h4 className="font-Modarat font-normal text-[16px] leading-[24px] text-[#51575D]">
          CAD 1,615.10 (NGN 1,589,760.81)
        </h4>
      </div>
      <div className="flex gap-[10.2rem]  mb-[1.5rem]">
        <div className="font-Modarat   font-normal text-[16px] leading-[24px] text-[#51575D]">
          <h4>Institution gets:</h4>
        </div>
        <h4 className="font-Modarat font-normal text-[16px] leading-[24px] text-[#51575D]">
          CAD 1,500.00 (NGN 1,476,465.15)
        </h4>
      </div>
      <div className="flex gap-[10.3rem]  mb-[1.5rem]">
        <div className="font-Modarat   font-normal text-[16px] leading-[24px] text-[#51575D]">
          <h4>Transactio fee:</h4>
        </div>
        <h4 className="font-Modarat font-normal text-[16px] leading-[24px] text-[#51575D]">
          CAD 100
        </h4>
      </div>
      <div className="flex gap-[11.2rem]  mb-[1.5rem]">
        <div className="font-Modarat   font-normal text-[16px] leading-[24px] text-[#51575D]">
          <h4>Current rate:</h4>
        </div>
        <h4 className="font-Modarat font-normal text-[16px] leading-[24px] text-[#51575D]">
          CA$ 1 = NGN 984.3100970529757
        </h4>
      </div>
      <div className="flex gap-[8.4rem]  mb-[1.5rem]">
        <div className="font-Modarat   font-normal text-[16px] leading-[24px] text-[#51575D]">
          <h4>School fee invoice:</h4>
        </div>
        <a
          href="#"
          className="font-Modarat font-normal text-[16px] leading-[24px] text-[#4B56A0] underline"
        >
           screencapturejpegyadiyadiya
        </a>
      </div>
    </div>
  );
};

export default TransactionSummary;
