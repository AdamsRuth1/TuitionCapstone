// import { useState } from "react";
// import ArrowDown from "../../../assets/Icons/Arrrow-down.svg";
// import TuitionHeader from "./TuitionHeader";
// import Button from "../Button";
// const InstituteInfor = ({ Next }) => {
//   const [isCountryOpen, setIsCountryOpen] = useState(false);
//   const [isInstituteOpen, setIsInstituteOpen] = useState(false);
//   const [countryInput, setCountryInput] = useState(null);
//   const [instituteInput, setInstituteInput] = useState(null);
//   const [SchoolAddress, setSchoolAddress] = useState(null)
//   const [errors, setErrors] = useState({
//     country: false,
//     institution: false,
//   });
//     const Countries = ["USA", "Canada", "Nigeria", "Litva", "United Kingdom"];

//   const Institution = [
//     { School: "Unilag", Address: "Unilag Lagos" },
//     { School: "Lasu", Address: "Lasu Lagos" },
//     { School: "Yabatech", Address: "Yaba Lagos" },
//     { School: "UI", Address: "UI Lagos" },
//     { School: "OOU", Address: "OOU Lagos" },
//   ];
//   const countrydropdown = () => {
//     setIsCountryOpen(!isCountryOpen);
//   };
//   const institutedropdown = () => {
//     setIsInstituteOpen(!isInstituteOpen);
//   };
//   const selectCountries = (country) => {
//     setCountryInput(country);
//     setIsCountryOpen(false);
//   };
//   const SelectInstitute = (institute) => {
//     setInstituteInput(institute.School);
//     setSchoolAddress(institute.Address)
//     setIsInstituteOpen(false);
//   };
//   return (
//     // <div className=" flex justify-between gap-[19.75rem]">
//     <div className="w-full -ml-[4rem] pt-[4rem] mb-[18rem] ">
//       <TuitionHeader
//         count="1"
//         Total="5"
//         Header="Institution Information"
//         Paragraph="Enter your school’s details to begin your payment process."
//       />

//       <form>
//         <div className="flex flex-col">
//           <label htmlFor="Country" className="tuitionLabel ">
//             Country
//           </label>
//           <div className="tuitionSelect mb-[2rem] py-[0.8rem] flex justify-between">
//             {countryInput || "Select Country"}
//             {isCountryOpen && (
//               <div>
//                 {Countries.map((country, index) => (
//                   <div
//                     key={index}
//                     className=" bg-white border-b border-gray  shadow-lg pl-[2rem] pt-4 hover:bg-[#CCCCCC] hover:rounded-t-lg lg:w-[16rem] font-Modarat text-[18px] font-normal text-[#0A0E27] relative top-[2rem] left-[2.5rem] cursor-pointer"
//                   >
//                     <ul className="pt-3 ">
//                       <li
//                         onClick={() => selectCountries(country)}
//                         className="pb-3"
//                       >
//                         {country}
//                       </li>
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             )}
//             <div onClick={countrydropdown} className="pt-1">
//               <img src={ArrowDown} alt="Arrow down icon" />
//             </div>
//           </div>

//           <label htmlFor="Country" className="tuitionLabel">
//             Institution
//           </label>
//           <div className="tuitionSelect mb-[2rem] py-[0.8rem] flex justify-between">
//             {instituteInput || "Select Country"}
//             {isInstituteOpen && (
//               <div className="  ">
//                 {Institution.map((institute, index) => (
//                   <div
//                     key={index}
//                     className=" bg-white border-b border-gray  shadow-lg pl-[2rem] pt-4 hover:bg-[#CCCCCC] hover:rounded-t-lg lg:w-[16rem] font-Modarat text-[18px] font-normal text-[#0A0E27] relative top-[2rem] left-[2.5rem] cursor-pointer"
//                   >
//                     <ul>
//                       <li
//                         onClick={() => SelectInstitute(institute)}
//                         className="pb-3"
//                       >
//                         {institute.School}
//                       </li>
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             )}
//             <div onClick={institutedropdown} className="pt-1">
//               <img src={ArrowDown} alt="Arrow down icon" />
//             </div>
//           </div>
//           <input
//             type="text"
//             name=""
//             id=""
//             value={SchoolAddress}
//             className="tuitionSelect bg-[#CCCCCC]"
//           />
//         </div>
//         <div className="pt-[2rem]">
//           <Button text="Continue" Next={Next} />
//         </div>
//       </form>
//     </div>
//     // </div>
//   );
// };

// export default InstituteInfor;

import { useState } from "react";
import ArrowDown from "../../../assets/Icons/Arrrow-down.svg";
import TuitionHeader from "./TuitionHeader";
import Button from "../Button";

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
    { School: "Unilag", Address: "Unilag Lagos" },
    { School: "Lasu", Address: "Lasu Lagos" },
    { School: "Yabatech", Address: "Yaba Lagos" },
    { School: "UI", Address: "UI Lagos" },
    { School: "OOU", Address: "OOU Lagos" },
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

  const handleSubmit = (e) => {
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
    <div className="w-full -ml-[4rem] pt-[4rem] mb-[18rem]">
      <TuitionHeader
        count="1"
        Total="5"
        Header="Institution Information"
        Paragraph="Enter your school’s details to begin your payment process."
      />

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="Country" className="tuitionLabel">
            Country
          </label>
          <div
            className={`tuitionSelect mb-[2rem] py-[0.8rem] flex justify-between ${
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
              <div className="absolute ml-[6rem]">
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

          <label htmlFor="SchoolAddress" className="tuitionLabel">
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
