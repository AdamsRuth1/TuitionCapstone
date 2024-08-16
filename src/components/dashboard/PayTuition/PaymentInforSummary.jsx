import React from 'react'

const PaymentInforSummary = () => {
  return (
    <div className="lg:w-[436px] h-[184px] bg-[#F2F2F2] lg:py-[24px] max-sm:py-5 max-sm:px-2 lg:px-[16px] rounded-[8px] mb-[2.5rem] max-sm:max-10">
      <div className="flex justify-between mb-[1.5rem]">
        <h3 className="font-Modarat font-normal text-[16px] leading-[16px] text-[#51575D]">
          Delivery time
        </h3>
        <h3 className="font-Modarat font-normal text-[16px] leading-[16px] text-[#51575D]">
          Should arrive in 72 business hours
        </h3>
      </div>
      <div className="flex justify-between mb-[1.5rem]">
        <h3 className="font-Modarat font-normal text-[16px] leading-[16px] text-[#51575D]">
          Exchange rate
        </h3>
        <h3 className="font-Modarat font-normal text-[16px] leading-[16px] text-[#51575D]">
          CA$ 1 = Naira 100.41551941935731
        </h3>
      </div>
      <div className="flex justify-between mb-[1.5rem]">
        <h3 className="font-Modarat font-normal text-[16px] leading-[16px] text-[#51575D]">
          Tranaction fee
        </h3>
        <h3 className="font-Modarat font-normal text-[16px] leading-[16px] text-[#51575D]">
          CA$ 100
        </h3>
      </div>
      <div className="flex justify-between mb-[1.5rem]">
        <h3 className="font-Modarat font-normal text-[16px] leading-[16px] text-[#51575D]">
          Swift
        </h3>
        <h3 className="font-Modarat font-normal text-[16px] leading-[16px] text-[#51575D]">
          NAIRA 2231.463797192784
        </h3>
      </div>
    </div>
  );
}

export default PaymentInforSummary
