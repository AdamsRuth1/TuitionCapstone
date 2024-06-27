import Calender from "../../../assets/Icons/calender.svg";

const StudentInfor = ({Next}) => {
  return (
    <div className="w-full pt-[4rem]  ">
      <div className="w-[8.375rem] py-[0.75rem] bg-[#CCCCCC] font-normal text-[18px] leading-[22px] mb-[2rem]">
        <span className="text-white font-Modarat pl-[1.7rem]">Step 3 of 5</span>
      </div>

      <h2 className="font-millik font-normal text-[30px] leading-[40px] mb-[1rem] text-[#252E6A]">
        Student Information
      </h2>
      <p className="font-Modarat font-normal text-[16px] leading-[24px] mb-[2.5rem] text-[#606569]">
        Enter students details to be sent to the school
      </p>
      <form>
        <div className="flex gap-[1rem] mb-[2.5rem]">
          <div>
            <label htmlFor="First name" className="tuitionLabel">
              Student's first name
            </label>
            <br />
            <input
              type="text"
              name="text"
              className="w-[210px] h-[48px] rounded-[4px] mt-[0.5rem] outline-none border border-[#CCCCCC] pl-4 text-[16px] font-Modarat font-normal leading-[16px] text-[#A1A4A8]"
            />
          </div>
          <div>
            <label htmlFor="Last name" className="tuitionLabel">
              Student's last name
            </label>
            <br />
            <input
              type="text"
              name="text"
              className="w-[210px] h-[48px]  mt-[0.5rem] outline-none border border-[#CCCCCC] text-[16px] font-Modarat font-normal leading-[16px] text-[#A1A4A8] pl-4"
            />
          </div>
        </div>
        {/* <div className="block"> */}
        <label htmlFor="Email " className="tuitionLabel">
          Student’s email address
        </label>
        <br />
        <input
          type="email"
          name="email"
          className="w-[436px] h-[48px] mt-[0.5rem] mb-[2.5rem] rounded-[4px] border border-[#CCCCCC] p-[20px] outline-none"
        />{" "}
        <br />
        <label htmlFor="Student ID" className="tuitionLabel">
          Students ID or Application number
        </label>
        <br />
        <input
          type="number"
          name="number"
          className="w-[436px] h-[48px] mt-[0.5rem] mb-[2.5rem] rounded-[4px] border border-[#CCCCCC] p-[20px] outline-none"
        />
        <br />
        <label htmlFor="Date of Birth" className="tuitionLabel">
          Student’s date of birth
        </label>
        <br />
        <div className="tuitionSelect mt-[0.5rem]  mb-[2rem] py-[0.8rem] flex justify-between">
          date
          <div>
            <img src={Calender} alt="calender icon" onClick={Next} />
          </div>
        </div>{" "}
        <br />
        <label htmlFor="Student ID" className="tuitionLabel">
          Additional information
        </label>{" "}
        <br />
        <textarea
          name=""
          id=""
          cols="30"
          className="w-[436px] h-[224px] mt-[0.5rem] outline-none border border-[#CCCCCC] p-[20px] rounded-[4px] font-normal text-[16px] leading-[24px] text-[#606569]"
        >
          Account number or student Id number or institution or unique Id or
          transit number or description (as stated in your invoice)
        </textarea>
      </form>
    </div>
  );
};

export default StudentInfor;
