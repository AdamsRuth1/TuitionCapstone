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

  const handleSubmit = () => {
    if (firstName && lastName && email && studentId) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
    Next();
  };
  return (
    <div className="w-full pt-[4rem] lg:-ml-[3rem] ">
      <div className="max-sm:ml-6">
        <TuitionHeader
          count="3"
          Total={5}
          Header="Student Information"
          Paragraph="Enter student's details to be sent to the school."
        />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="lg:flex lg:gap-[1rem] w-full mb-[2.5rem] max-sm:px-10">
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
          <div className="max-sm:pt-5">
            <label htmlFor="lastName" className="tuitionLabel">
              Student's last name
            </label>
            <br />
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-[210px] max-sm:w-full h-[48px] mt-[0.5rem] outline-none border border-[#CCCCCC] text-[16px] font-Modarat font-normal leading-[16px] text-[#A1A4A8] pl-4"
              required
            />
          </div>
        </div>
        <div className="max-sm:px-10">
          <label htmlFor="email" className="tuitionLabel">
            Student’s email address
          </label>
          <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[436px] max-sm:w-full h-[48px] mt-[0.5rem] max-sm:mb-[1.3rem] mb-[2.5rem] rounded-[4px] border border-[#CCCCCC] p-[20px] outline-none"
            required
          />
        </div>

        <br />
        <div className="max-sm:px-10">
          <label htmlFor="studentId" className="tuitionLabel">
            Student's ID or Application number
          </label>
          <br />
          <input
            type="text"
            name="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="w-[436px] max-sm:w-full  h-[48px] mt-[0.5rem] mb-[2.5rem] rounded-[4px] border border-[#CCCCCC] p-[20px] outline-none"
            required
          />
        </div>

        <br />
        <div className="max-sm:px-10">
          <label htmlFor="dateOfBirth" className="tuitionLabel">
            Student’s date of birth
          </label>
          <br />
          <div className="relative flex justify-between mt-[0.5rem] mb-[2rem] border border-[#CCCCCC] bg-white  w-full">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-full h-[48px] max-sm:w-full  rounded-[4px] pl-4 text-[16px] font-Modarat font-normal leading-[16px] text-[#A1A4A8] outline-none"
              dateFormat="MM/dd/yyyy"
            />
            <div
              className="top-[12px] cursor-pointer flex pr-5"
              onClick={() => setStartDate(new Date())}
            >
              <img src={Calendar} alt="calendar icon" />
            </div>
          </div>
        </div>

        <br />
        <div className="max-sm:mx-4">
          <label htmlFor="additionalInfo" className="tuitionLabel max-sm:pl-5">
            Additional information
          </label>
          <br />
          <textarea
            name="additionalInfo"
            id="additionalInfo"
            placeholder="Account number or student ID number or institution or unique ID or transit number or description (as stated in your invoice)"
            cols="30"
            className="w-[436px] max-sm:w-[400px] h-[224px] mt-[0.5rem] mb-[2.5rem] outline-none border border-[#CCCCCC] p-[20px] rounded-[4px] font-normal text-[16px] leading-[24px] text-[#606569]"
          ></textarea>
        </div>

        <div className="max-sm:px-5">
          <TuitionButton back="Back" forward="Continue" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default StudentInfor;
