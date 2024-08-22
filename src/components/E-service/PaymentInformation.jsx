import TuitionHeader from "../../components/dashboard/PayTuition/TuitionHeader";
import TuitionButton from "../dashboard/PayTuition/TuitionButton";

const PaymentInformation = ({ Next }) => {
  return (
    <div className="ml-[2.5rem] max-sm:ml-0 max-sm:px-5">
      <TuitionHeader
        count="2"
        Total="3"
        Header="E-Service Information"
        Paragraph="Provide the required information to finalize your course payment"
      />
      <form>
        <div className="flex flex-col">
          <label htmlFor="Course information" className="tuitionLabel">
            Course Information
          </label>
          <input
            type="text"
            placeholder="Name of course"
            name=""
            className="tuitionSelect mb-[2rem] w-full max-sm:w-full"
          />
          <label htmlFor="Course information" className="tuitionLabel">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your Udemy's username"
            name=""
            className="tuitionSelect mb-[2rem] w-full max-sm:w-full"
          />
          <label htmlFor="Course information" className="tuitionLabel">
            Email address
          </label>
          <input
            type="email"
            placeholder="Enter your Udemy's email address"
            name=""
            className="tuitionSelect mb-[2rem] w-full max-sm:w-full"
          />
          <label htmlFor="Course information" className="tuitionLabel">
            Course link
          </label>
          <textarea
            name=""
            placeholder="Paste your course link here"
            className="w-[436px] max-sm:w-full mb-10 h-[146px] outline-none border border-[#CCCCCC] rounded-[4px] text-[#A1A4A8] p-[1.25rem]"
          ></textarea>

          <TuitionButton back="Back" forward="Continue" Next={Next} />
        </div>
      </form>
    </div>
  );
};

export default PaymentInformation;
