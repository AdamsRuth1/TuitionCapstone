import { useState } from "react";
import ArrowDown from "../../../assets/Icons/Arrrow-down.svg";
import TuitionHeader from "./TuitionHeader";
import Button from "../Button";
const InstituteInfor = ({ Next }) => {
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isInstituteOpen, setIsInstituteOpen] = useState(false);
  const [countryInput, setCountryInput] = useState(null);
  const [instituteInput, setInstituteInput] = useState(null);

  const Countries = ["USA", "Canada", "Nigeria", "Litva", "United Kingdom"];
  const Institution = ["Unilag", "Lasu", "Yabatech", "UI", "OOU"];
  const countrydropdown = () => {
    setIsCountryOpen(!isCountryOpen);
  };
  const institutedropdown = () => {
    setIsInstituteOpen(!isInstituteOpen);
  };
  const selectCountries = (country) => {
    setCountryInput(country);
    setIsCountryOpen(false);
  };
  const SelectInstitute = (institute) => {
    setInstituteInput(institute);
    setIsInstituteOpen(false);
  };
  return (
    // <div className=" flex justify-between gap-[19.75rem]">
    <div className="w-full -ml-[4rem] pt-[4rem] mb-[18rem] ">
      <TuitionHeader
        count="1"
        Total="5"
        Header="Institution Information"
        Paragraph="Enter your school’s details to begin your payment process."
      />

      <form>
        <div className="flex flex-col">
          <label htmlFor="Country" className="tuitionLabel ">
            Country
          </label>
          <div className="tuitionSelect mb-[2rem] py-[0.8rem] flex justify-between">
            {countryInput || "Select Country"}
            {isCountryOpen && (
              <div>
                {Countries.map((country, index) => (
                  <div
                    key={index}
                    className=" bg-white border-b border-gray  shadow-lg pl-[2rem] pt-4 hover:bg-[#CCCCCC] hover:rounded-t-lg lg:w-[16rem] font-Modarat text-[18px] font-normal text-[#0A0E27] relative top-[2rem] left-[2.5rem] cursor-pointer"
                  >
                    <ul className="pt-3 ">
                      <li
                        onClick={() => selectCountries(country)}
                        className="pb-3"
                      >
                        {country}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            )}
            <div onClick={countrydropdown} className="pt-1">
              <img src={ArrowDown} alt="Arrow down icon" />
            </div>
          </div>

          <label htmlFor="Country" className="tuitionLabel">
            Institution
          </label>
          <div className="tuitionSelect mb-[2rem] py-[0.8rem] flex justify-between">
            {instituteInput || "Select Country"}
            {isInstituteOpen && (
              <div className="  ">
                {Institution.map((institute, index) => (
                  <div
                    key={index}
                    className=" bg-white border-b border-gray  shadow-lg pl-[2rem] pt-4 hover:bg-[#CCCCCC] hover:rounded-t-lg lg:w-[16rem] font-Modarat text-[18px] font-normal text-[#0A0E27] relative top-[2rem] left-[2.5rem] cursor-pointer"
                  >
                    <ul>
                      <li
                        onClick={() => SelectInstitute(institute)}
                        className="pb-3"
                      >
                        {institute}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            )}
            <div onClick={institutedropdown} className="pt-1">
              <img src={ArrowDown} alt="Arrow down icon" />
            </div>
          </div>
          <input
            type="text"
            name=""
            id=""
            className="tuitionSelect bg-[#CCCCCC]"
          />
        </div>
        <div className="pt-[2rem]">
          <Button text="Continue" Next={Next} />
        </div>
      </form>
    </div>
    // </div>
  );
};

export default InstituteInfor;
