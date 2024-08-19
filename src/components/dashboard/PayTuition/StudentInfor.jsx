// // import Calender from "../../../assets/Icons/calender.svg";
// // import TuitionHeader from "./TuitionHeader";
// // import TuitionButton from "./TuitionButton";
// // import "react-datepicker/dist/react-datepicker.css";

// // const StudentInfor = ({ Next }) => {

// //   const [startDate, setStartDate] = useState(new Date());
// //   return (
// //     <div className="w-full pt-[4rem] lg:-ml-[3rem]  ">
// //       <TuitionHeader
// //         count="3"
// //         Total={5}
// //         Header="Student Information"
// //         Paragraph="Enter students details to be sent to the school."
// //       />
// //       <form>
// //         <div className="lg:flex lg:gap-[1rem] w-full mb-[2.5rem] max-sm:mx-5">
// //           <div>
// //             <label htmlFor="First name" className="tuitionLabel">
// //               Student's first name
// //             </label>
// //             <br />
// //             <input
// //               type="text"
// //               name="text"
// //               className="lg:w-[210px] max-sm:w-full h-[48px] rounded-[4px] mt-[0.5rem] outline-none border border-[#CCCCCC] pl-4 text-[16px] font-Modarat font-normal leading-[16px] text-[#A1A4A8]"
// //             />
// //           </div>
// //           <div>
// //             <label htmlFor="Last name" className="tuitionLabel">
// //               Student's last name
// //             </label>
// //             <br />
// //             <input
// //               type="text"
// //               name="text"
// //               className="w-[210px] h-[48px]  mt-[0.5rem] outline-none border border-[#CCCCCC] text-[16px] font-Modarat font-normal leading-[16px] text-[#A1A4A8] pl-4"
// //             />
// //           </div>
// //         </div>
// //         {/* <div className="block"> */}
// //         <label htmlFor="Email " className="tuitionLabel">
// //           Student’s email address
// //         </label>
// //         <br />
// //         <input
// //           type="email"
// //           name="email"
// //           className="w-[436px] h-[48px] mt-[0.5rem] mb-[2.5rem] rounded-[4px] border border-[#CCCCCC] p-[20px] outline-none"
// //         />
// //         <br />
// //         <label htmlFor="Student ID" className="tuitionLabel">
// //           Students ID or Application number
// //         </label>
// //         <br />
// //         <input
// //           type="number"
// //           name="number"
// //           className="w-[436px] h-[48px] mt-[0.5rem] mb-[2.5rem] rounded-[4px] border border-[#CCCCCC] p-[20px] outline-none"
// //         />
// //         <br />
// //         <label htmlFor="Date of Birth" className="tuitionLabel">
// //           Student’s date of birth
// //         </label>
// //         <br />

// //         <div className="tuitionSelect mt-[0.5rem]  mb-[2rem] py-[0.8rem] flex justify-between">
// //           date
// //           <div>
// //             <img src={Calender} alt="calender icon" />
// //           </div>
// //         </div>{" "}
// //         <br />
// //         <label htmlFor="Student ID" className="tuitionLabel">
// //           Additional information
// //         </label>
// //         <br />
// //         <textarea
// //           name=""
// //           id=""
// //           cols="30"
// //           className="w-[436px] h-[224px] mt-[0.5rem] mb-[2.5rem] outline-none border border-[#CCCCCC] p-[20px] rounded-[4px] font-normal text-[16px] leading-[24px] text-[#606569]"
// //         >
// //           Account number or student Id number or institution or unique Id or
// //           transit number or description (as stated in your invoice)
// //         </textarea>
// //         <TuitionButton back="Back" forward="continue" Next={Next} />
// //       </form>
// //     </div>
// //   );
// // };

// // export default StudentInfor;

// import { useState } from "react";
// import Calendar from "../../../assets/Icons/calender.svg";
// import TuitionHeader from "./TuitionHeader";
// import TuitionButton from "./TuitionButton";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css"; // Import the CSS for the date picker

// const StudentInfor = ({ Next }) => {
//   const [startDate, setStartDate] = useState(new Date());

//   return (
//     <div className="w-full pt-[4rem] lg:-ml-[3rem]">
//       <TuitionHeader
//         count="3"
//         Total={5}
//         Header="Student Information"
//         Paragraph="Enter student's details to be sent to the school."
//       />
//       <form>
//         <div className="lg:flex lg:gap-[1rem] w-full mb-[2.5rem] max-sm:mx-5">
//           <div>
//             <label htmlFor="First name" className="tuitionLabel">
//               Student's first name
//             </label>
//             <br />
//             <input
//               type="text"
//               name="text"
//               required
//               className="lg:w-[210px] max-sm:w-full h-[48px] rounded-[4px] mt-[0.5rem] outline-none border border-[#CCCCCC] pl-4 text-[16px] font-Modarat font-normal leading-[16px] text-[#A1A4A8]"
//             />
//           </div>
//           <div>
//             <label htmlFor="Last name" className="tuitionLabel">
//               Student's last name
//             </label>
//             <br />
//             <input
//               type="text"
//               name="text"
//               required
//               className="w-[210px] h-[48px] mt-[0.5rem] outline-none border border-[#CCCCCC] text-[16px] font-Modarat font-normal leading-[16px] text-[#A1A4A8] pl-4"
//             />
//           </div>
//         </div>
//         <label htmlFor="Email" className="tuitionLabel">
//           Student’s email address
//         </label>
//         <br />
//         <input
//           type="email"
//           name="email"
//           required
//           className="w-[436px] h-[48px] mt-[0.5rem] mb-[2.5rem] rounded-[4px] border border-[#CCCCCC] p-[20px] outline-none"
//         />
//         <br />
//         <label htmlFor="Student ID" className="tuitionLabel">
//           Student's ID or Application number
//         </label>
//         <br />
//         <input
//           type="number"
//           name="number"
//           required
//           className="w-[436px] h-[48px] mt-[0.5rem] mb-[2.5rem] rounded-[4px] border border-[#CCCCCC] p-[20px] outline-none"
//         />
//         <br />
//         <label htmlFor="Date of Birth" className="tuitionLabel">
//           Student’s date of birth
//         </label>
//         <br />
//         <div className="relative flex justify-between mt-[0.5rem] mb-[2rem] border border-[#CCCCCC] bg-white  w-full"  >
//           <DatePicker
//             selected={startDate}
//             onChange={(date) => setStartDate(date)}
//             className="w-full  h-[48px] rounded-[4px]  pl-4 text-[16px] font-Modarat font-normal leading-[16px] text-[#A1A4A8] outline-none"
//             dateFormat="MM/dd/yyyy"
//           />
//           <div
//             className="top-[12px]  cursor-pointer flex pr-5"
//             onClick={() => setStartDate(new Date())}
//           >
//             <img src={Calendar} alt="calendar icon" />
//           </div>
//         </div>
//         <br />
//         <label htmlFor="Additional Information" className="tuitionLabel">
//           Additional information
//         </label>
//         <br />
//         <textarea
//           name="additionalInfo"
//           id="additionalInfo"
//           placeholder="Account number or student ID number or institution or unique ID or transit number or description (as stated in your invoice)"
//           cols="30"
//           className="w-[436px] h-[224px] mt-[0.5rem] mb-[2.5rem] outline-none border border-[#CCCCCC] p-[20px] rounded-[4px] font-normal text-[16px] leading-[24px] text-[#606569]"
//         >
       
//         </textarea>
//         <TuitionButton back="Back" forward="Continue" Next={Next} />
//       </form>
//     </div>
//   );
// };

// export default StudentInfor;


import { useState, useEffect } from "react";
import Calendar from "../../../assets/Icons/calender.svg";
import TuitionHeader from "./TuitionHeader";
import TuitionButton from "./TuitionButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StudentInfor = ({ Next }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // useEffect(() => {
  //   if (firstName && lastName && email && studentId) {
  //     setIsButtonDisabled(false);
  //   } else {
  //     setIsButtonDisabled(true);
  //   }
  // }, [firstName, lastName, email, studentId]);


  const handleSubmit = () => {
    if (firstName && lastName && email && studentId) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
    Next()
  }
  return (
    <div className="w-full pt-[4rem] lg:-ml-[3rem]">
      <TuitionHeader
        count="3"
        Total={5}
        Header="Student Information"
        Paragraph="Enter student's details to be sent to the school."
      />
      <form onSubmit={handleSubmit}>
        <div className="lg:flex lg:gap-[1rem] w-full mb-[2.5rem] max-sm:mx-5">
          <div>
            <label htmlFor="firstName" className="tuitionLabel">
              Student's first name
            </label>
            <br />
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="lg:w-[210px] max-sm:w-full h-[48px] rounded-[4px] mt-[0.5rem] outline-none border border-[#CCCCCC] pl-4 text-[16px] font-Modarat font-normal leading-[16px] text-[#A1A4A8]"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="tuitionLabel">
              Student's last name
            </label>
            <br />
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-[210px] h-[48px] mt-[0.5rem] outline-none border border-[#CCCCCC] text-[16px] font-Modarat font-normal leading-[16px] text-[#A1A4A8] pl-4"
              required
            />
          </div>
        </div>
        <label htmlFor="email" className="tuitionLabel">
          Student’s email address
        </label>
        <br />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[436px] h-[48px] mt-[0.5rem] mb-[2.5rem] rounded-[4px] border border-[#CCCCCC] p-[20px] outline-none"
          required
        />
        <br />
        <label htmlFor="studentId" className="tuitionLabel">
          Student's ID or Application number
        </label>
        <br />
        <input
          type="text"
          name="studentId"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="w-[436px] h-[48px] mt-[0.5rem] mb-[2.5rem] rounded-[4px] border border-[#CCCCCC] p-[20px] outline-none"
          required
        />
        <br />
        <label htmlFor="dateOfBirth" className="tuitionLabel">
          Student’s date of birth
        </label>
        <br />
        <div className="relative flex justify-between mt-[0.5rem] mb-[2rem] border border-[#CCCCCC] bg-white  w-full">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="w-full h-[48px] rounded-[4px] pl-4 text-[16px] font-Modarat font-normal leading-[16px] text-[#A1A4A8] outline-none"
            dateFormat="MM/dd/yyyy"
          />
          <div
            className="top-[12px] cursor-pointer flex pr-5"
            onClick={() => setStartDate(new Date())}
          >
            <img src={Calendar} alt="calendar icon" />
          </div>
        </div>
        <br />
        <label htmlFor="additionalInfo" className="tuitionLabel">
          Additional information
        </label>
        <br />
        <textarea
          name="additionalInfo"
          id="additionalInfo"
          placeholder="Account number or student ID number or institution or unique ID or transit number or description (as stated in your invoice)"
          cols="30"
          className="w-[436px] h-[224px] mt-[0.5rem] mb-[2.5rem] outline-none border border-[#CCCCCC] p-[20px] rounded-[4px] font-normal text-[16px] leading-[24px] text-[#606569]"
        ></textarea>
        <TuitionButton
          back="Back"
          forward="Continue"
          type="submit"
          // Next={Next}
          // disabled={isButtonDisabled} // Pass the disabled state to the button
        />
      </form>
    </div>
  );
};

export default StudentInfor;
