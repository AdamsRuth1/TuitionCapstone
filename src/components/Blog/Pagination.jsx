import { useState } from "react";
import NextArrow from "../../assets/Icons/NextArrow.png"
import preArrow from "../../assets/Icons/preArrow.png"
const Pagination = () => {
  const [paginate, setPaginate] = useState(false);

  const handlePaginate = () => {
    setPaginate(paginate);
  };
  const pages = [1, 2, 3, 4];
  return (
    <div className="flex justify-center pt-[3.8rem] pb-[13.3rem]">
      <div className="flex gap-[7.5rem]">
        <button className="flex gap-[0.45rem] font-Moderat font-normal text-[18px] leading-[22px] text-[#A1A4A8]">
          <img src={preArrow} alt="previous icon " />
          Previous
        </button>
        <div className="flex gap-[2.5rem]">
          {pages.map((num, index) => (
            <div key={index}>
              <span
                className={`w-[27px] h-[38px] bg-[#252E6A] text-white px-[8px] py-[10px] rounded-[4px] ${
                  paginate === true ? "bg-[#252E6A] text-white" : ""
                }`}
              >
                {num}
              </span>
            </div>
          ))}
        </div>

        <button
          className="font-Moderat flex gap-[0.45rem]  font-normal text-[18px] leading-[22px] text-[#A1A4A8]"
          onClick={handlePaginate}
        >
          Next
          <img src={NextArrow} alt="Next icon " />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
