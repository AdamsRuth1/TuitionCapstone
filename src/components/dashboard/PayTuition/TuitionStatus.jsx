// import { Steps } from "../../../constants/SidebarData";

const TuitionStatus = ({ activeState, Steps }) => {
  return (
    <div className="pb-[2rem] pt-[2.5rem] pl-[1.5rem] pr-[6.125rem] mt-[8rem] border border-[#CCCCCC] rounded-[8px] relative">
      {Steps.map((step, index) => (
        <div key={index} className="flex gap-[2rem]  w-[222px] ">
          <div className="relative">
            {index < activeState ? (
              <div className="">
                <img
                  src={step.Mark}
                  alt="a check icon"
                  className="w-[30px] h-[30px] rounded-full markBG py-[8px] px-[7px] "
                />
              </div>
            ) : (
              <div className="A check icon">
                <img src={step.CheckIcon} alt="a check icon" className="" />
              </div>
            )}

            <div className=" pl-3">
              <img src={step.line} alt="" />
            </div>
          </div>

          <h3 className="font-Modarat font-normal text-[16px] leading-[16px] text-[#353C42]">
            {step.status}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default TuitionStatus;
