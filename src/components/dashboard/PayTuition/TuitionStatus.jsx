import check from "../../../assets/Icons/check-circle.svg";

const TuitionStatus = () => {
  const Steps = [
    {
      CheckIcon: check,
      status: "Institution Information",
    },
    {
      CheckIcon: check,
      status: "Institution Information",
    },
    {
      CheckIcon: check,
      status: "Payment Information",
    },
    {
      CheckIcon: check,
      status: "Student Information",
    },
    {
      CheckIcon: check,
      status: "Transaction Summary",
    },
    {
      CheckIcon: check,
      status: "Complete Payment",
    },
  ];

  return (
    <div className="h-[380px] pb-[2.5rem] pt-[2.5rem] pl-[1.5rem] pr-[6.125rem] mt-[8rem] border border-[#CCCCCC] rounded-[8px]">
      {Steps.map((step, index) => (
        <div key={index} className="flex gap-[2rem] w-[222px] mb-[1.5rem]">
          <img
            src={step.CheckIcon}
            alt="a check icon"
            className=" text -red-500"
          />
          <h3 className="font-Modarat font-normal text-[16px] leading-[16px] text-[#353C42]">
            {step.status}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default TuitionStatus;
