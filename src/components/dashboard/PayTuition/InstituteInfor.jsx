

import { useState } from "react";
import ArrowDown from "../../../assets/Icons/Arrrow-down.svg";
import TuitionHeader from "./TuitionHeader";
import Button from "../Button";
import axios from "axios";

const InstituteInfo = ({ Next }) => {
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isInstituteOpen, setIsInstituteOpen] = useState(false);
  const [countryInput, setCountryInput] = useState("");
  const [instituteInput, setInstituteInput] = useState("");
  const [schoolAddress, setSchoolAddress] = useState("");
  const [errors, setErrors] = useState({
    country: false,
    institution: false,
  });

  const Countries = ["USA", "Canada", "Nigeria", "Lithuania", "United Kingdom"];
  const Institutions = [
    { School: "Unilag", Address: "University of Lagos, University Road Lagos Mainland Akoka Yaba, Lagos" },
    { School: "Lasu", Address: "F58X+87G, Lagos State University, Igbolerin, Lagos 102101, Lagos" },
    { School: "Yabatech", Address: "Hussey Road,Abule ijesha, Lagos 100001, Lagos" },
    { School: "UI", Address: "Box 4078, University of Ibadan Post, Ibadan 200001, Oyo." },
    { School: "OOU", Address: "WRFP+9HF, Ago-Iwoye - Ilisan road, Ago-Iwoye" },
  ];

  const toggleCountryDropdown = () => {
    setIsCountryOpen(!isCountryOpen);
  };

  const toggleInstituteDropdown = () => {
    setIsInstituteOpen(!isInstituteOpen);
  };

  const selectCountry = (country) => {
    setCountryInput(country);
    setErrors((prev) => ({ ...prev, country: false }));
    setIsCountryOpen(false);
  };

  const selectInstitute = (institute) => {
    setInstituteInput(institute.School);
    setSchoolAddress(institute.Address);
    setErrors((prev) => ({ ...prev, institution: false }));
    setIsInstituteOpen(false);
  };

  const handleSubmit =  (e) => {
    e.preventDefault();

    const hasErrors = {
      country: !countryInput,
      institution: !instituteInput,
    };

    setErrors(hasErrors);

    if (!hasErrors.country && !hasErrors.institution) {
      console.log("Form submitted with:", {
        countryInput,
        instituteInput,
        schoolAddress,
      });
      Next();
    }
  }; 

  return (
    <div className="w-full lg:-ml-[4rem] pt-[4rem] mb-[18rem]">
      <TuitionHeader
        count="1"
        Total="5"
        Header="Institution Information"
        Paragraph="Enter your school’s details to begin your payment process."
      />

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col max-sm:mx-6">
          
          <label htmlFor="Country" className="tuitionLabel">
            Country
          </label>
          {/* <div className=""> */}
          <div
            className={`tuitionSelect mb-[2rem] py-[0.8rem]   flex justify-between ${
              errors.country ? "border-red-600" : ""
            }`}
          >
            <span>{countryInput || "Select Country"}</span>
            <div
              onClick={toggleCountryDropdown}
              className="pt-1 cursor-pointer"
            >
              <img src={ArrowDown} alt="Arrow down icon" />
            </div>
            {isCountryOpen && (
              <div className="absolute lg:ml-[6rem] ">
                {Countries.map((country, index) => (
                  
                  <div
                    key={index}
                    className="bg-white border-b border-gray  shadow-lg pl-[2rem] pt-4 hover:bg-[#CCCCCC] hover:rounded-t-lg lg:w-[16rem] font-Modarat text-[18px] font-normal text-[#0A0E27] relative top-[2rem] left-[2.5rem] cursor-pointer"
                  >
                    <ul className="pt-3 ">
                      <li
                        onClick={() => selectCountry(country)}
                        className="pb-3"
                      >
                        {country}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            )}
          {/* </div> */}
          </div>
          
          {errors.country && (
            <p className="text-red-600 text-sm -mt-6 pb-3">Please select a country.</p>
          )}
        
          

          <label htmlFor="Institution" className="tuitionLabel">
            Institution
          </label>
          <div
            className={`tuitionSelect mb-[2rem] py-[0.8rem] flex justify-between ${
              errors.institution ? "border-red-600" : ""
            }`}
          >
            <span>{instituteInput || "Select Institution"}</span>
            <div
              onClick={toggleInstituteDropdown}
              className="pt-1 cursor-pointer"
            >
              <img src={ArrowDown} alt="Arrow down icon" />
            </div>
            {isInstituteOpen && (
              <div className="absolute ml-[6rem]">
                {Institutions.map((institute, index) => (
                  <div
                    key={index}
                    className=" bg-white border-b border-gray  shadow-lg pl-[2rem] pt-4 hover:bg-[#CCCCCC] hover:rounded-t-lg lg:w-[16rem] font-Modarat text-[18px] font-normal text-[#0A0E27] relative top-[2rem] left-[2.5rem] cursor-pointer"
                  >
                    <ul>
                      <li
                        onClick={() => selectInstitute(institute)}
                        className="pb-3"
                      >
                        {institute.School}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
          {errors.institution && (
            <p className="text-red-600 text-sm -mt-6 pb-3">
              Please select an institution.
            </p>
          )}

          <label htmlFor="SchoolAddress" className="tuitionLabel ">
            School Address
          </label>
          <input
            type="text"
            id="SchoolAddress"
            value={schoolAddress}
            readOnly
            className="tuitionSelect bg-[#CCCCCC]"
          />
        </div>

        <div className="pt-[2rem]">
          <Button text="Continue" />
        </div>
      </form>
    </div>
  );
};

export default InstituteInfo;
