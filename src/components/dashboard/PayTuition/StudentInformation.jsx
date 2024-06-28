const StudentInformation = (Next) => {
  return (
    <div>
      <div className="flex gap-[8rem] mb-[1.5rem]">
        <h3 className="font-Modarat text-[#51575D] font-normal text-[16px] leading-[16px]">
          First and last name:
        </h3>
        <h3 className="font-Modarat text-[#51575D]  font-normal text-[16px] leading-[16px]">
          **** **** ****
        </h3>
      </div>
      <div className="flex gap-[6.5rem] mb-[1.5rem]">
        <h3 className="font-Modarat text-[#51575D] font-normal text-[16px] leading-[16px]">
          Student email address:
        </h3>
        <h3 className="font-Modarat text-[#51575D]  font-normal text-[16px] leading-[16px]">
          ****@***.****
        </h3>
      </div>
      <div className="flex gap-[11.2rem] mb-[1.5rem]">
        <h3 className="font-Modarat text-[#51575D] font-normal text-[16px] leading-[16px]">
          Date of birth:
        </h3>
        <h3 className="font-Modarat text-[#51575D]  font-normal text-[16px] leading-[16px]">
          *******
        </h3>
      </div>
      <div className="flex gap-[6.5rem] mb-[1.5rem]">
        <h3 className="font-Modarat text-[#51575D] font-normal text-[16px] leading-[16px]">
          Means of Identification:
        </h3>
        <h3 className="font-Modarat text-[#51575D]  font-normal text-[16px] leading-[16px]">
          Sample file
        </h3>
      </div>
      <div className="flex gap-[12.5rem] mb-[2.5rem]">
        <h3 className="font-Modarat text-[#51575D] font-normal text-[16px] leading-[16px]">
          Extra Info
        </h3>
        <h3 className="font-Modarat text-[#51575D]  font-normal text-[16px] leading-[16px]">
          CAD 100
        </h3>
      </div>

      {/* <button onClick={Next} className="w-full bg-[#252E6A] py-[24px] px-[12px] mb-[2.5rem] font-Modarat font-normal text-[16px] leading-[16px] text-white rounded-[8px] ">Proceed to payment</button> */}
    </div>
  );
};

export default StudentInformation;
