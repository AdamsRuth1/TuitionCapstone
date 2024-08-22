

import TuitionHeader from "../../components/dashboard/PayTuition/TuitionHeader";
import Button from "../dashboard/Button";
import ArrowDown from "../../assets/Icons/Arrrow-down.svg";
import CourseraPopup from "../E-service/CourseraPopup";
import { useState } from "react";

const EserviceInfor = ({ Next }) => {
  const [isOpen, setIsOpen] = useState(false);
  const PlatForm = ["Coursera", "Udemy", "WES Application", "Other"];
  const Countries = ["USA", "Canada", "Nigeria", "Lithuania", "United Kingdom"];
  const currency = ["NGN", "USD"];

  const [isPlatform, setIsPlatform] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isCurrencyOpen, setCurrencyOpen] = useState(false);
  const [Currency, setCurrency] = useState(null);
  const [platFormData, setPlatFormData] = useState(null);
  const [countryInput, setCountryInput] = useState(null);

  const handlePlatFormOpen = () => {
    setIsPlatform(!isPlatform);
  };
  const countrydropdown = () => {
    setIsCountryOpen(!isCountryOpen);
  };
  const handleCurrency = () => {
    setCurrencyOpen(!isCurrencyOpen);
  };
  const handleSelectCurrency = (currencies) => {
    setCurrency(currencies);
    setCurrencyOpen(false);
  };
  const handlePlateformSelected = (platForm) => {
    setPlatFormData(platForm);
    setIsPlatform(false);
  };
  const selectCountries = (country) => {
    setCountryInput(country);
    setIsCountryOpen(false);
  };

  const handleCourseraPopup = () => {
    setIsPlatform(false);
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full mb-10 relative lg:ml-[2.5rem] max-sm:px-5">
      <div>
        {isOpen && (
          <div>
            <CourseraPopup handleClose={handleClose} />
          </div>
        )}
      </div>
      <div className="max-sm:-ml-4">
        <TuitionHeader
          count="1"
          Total="3"
          Header="E-Service Information"
          Paragraph="Select E-service platform you want to pay for"
        />
      </div>

      <form>
        <div className="flex flex-col">
          <label htmlFor="Country" className="tuitionLabel">
            E-Service platform
          </label>
          <div className="tuitionSelect mb-[2rem] max-sm:w-full py-[0.8rem] w-full flex justify-between relative">
            {platFormData ? (
              platFormData
            ) : (
              <span className="placeholder">Select E-learning platform</span>
            )}
            {isPlatform && (
              <div className="absolute right-5 max-sm:right-0 max-sm:left-0 max-sm:w-full">
                {PlatForm.map((platform, index) => (
                  <div
                    key={index}
                    onClick={
                      index === 0
                        ? () => handleCourseraPopup()
                        : () => handlePlateformSelected(platform)
                    }
                    className=" bg-white border-b border-gray shadow-lg pl-[2rem] pt-4 hover:bg-[#CCCCCC] hover:rounded-t-lg w-[16rem] max-sm:w-full font-Modarat text-[18px] font-normal text-[#0A0E27] cursor-pointer"
                  >
                    <ul className="pt-3">
                      <li className="pb-3">{platform}</li>
                    </ul>
                  </div>
                ))}
              </div>
            )}
            <div
              onClick={handlePlatFormOpen}
              className="pt-1 relative cursor-pointer"
            >
              <img src={ArrowDown} alt="Arrow down icon" />
            </div>
          </div>

          <label htmlFor="Country" className="tuitionLabel">
            Country
          </label>

          <div className="tuitionSelect mb-[2rem] py-[0.8rem] w-full flex justify-between max-sm:justify-between">
            {countryInput ? (
              countryInput
            ) : (
              <span className="placeholder">
                Select country you're paying from
              </span>
            )}
            {isCountryOpen && (
              <div className="absolute pl-[7rem] max-sm:pl-0 max-sm:w-full">
                {Countries.map((country, index) => (
                  <div
                    key={index}
                    className=" bg-white border-b border-gray shadow-lg pl-[2rem] pt-4 hover:bg-[#CCCCCC] hover:rounded-t-lg lg:w-[16rem] max-sm:w-full font-Modarat text-[18px] font-normal text-[#0A0E27]"
                  >
                    <ul className="pt-3">
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
            <div onClick={countrydropdown} className="pt-1 cursor-pointer">
              <img src={ArrowDown} alt="Arrow down icon" />
            </div>
          </div>

          <label htmlFor="Amount" className="tuitionLabel">
            Amount to be paid
          </label>

          <div className="flex max-sm:flex-row">
            <div className="paymentSelect  mb-[2rem] py-[0.8rem] flex justify-between lg:w-[40%] max-sm:w-[40%]">
              {Currency || "NGN"}
              {isCurrencyOpen && (
                <div className="absolute w-full ">
                  {currency.map((currencies, index) => (
                    <div
                      key={index}
                      onClick={() => handleSelectCurrency(currencies)}
                      className=" bg-white border-b border-gray shadow-lg pl-[2rem] pt-4 hover:bg-[#CCCCCC] hover:rounded-t-lg w-[8rem] font-Modarat text-[18px] font-normal text-[#0A0E27] cursor-pointer"
                    >
                      <ul className="pt-3">
                        <li className="pb-3">{currencies}</li>
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              <div onClick={handleCurrency} className="pt-1 cursor-pointer">
                <img src={ArrowDown} alt="Arrow down icon" />
              </div>
            </div>
            <input type="number" name="number" className="tuitionSelected mb-[2rem] py-[0.8rem] w-full max-sm:w-[60%]" />
            
          </div>
        </div>
        <Button text="Continue" Next={Next} />
      </form>
    </div>
  );
};

export default EserviceInfor;
