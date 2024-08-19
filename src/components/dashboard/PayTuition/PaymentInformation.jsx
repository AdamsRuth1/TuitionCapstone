import { useState } from "react";
import ArrowDown from "../../../assets/Icons/Arrrow-down.svg";
import { By, For, paymentCountry } from "../../../constants/TuitionDropdown";
import TuitionHeader from "./TuitionHeader";
import paymentFooter from "../../../assets/Icons/dashboardFooter.svg";
import PaymentInforSummary from "./PaymentInforSummary";
import TuitionButton from "./TuitionButton";
import Button from "../Button";

const PaymentInformation = ({ Next }) => {
  const [isPaymentByOpen, setIsPaymentByOpen] = useState(false);
  const [isPaymentForOpen, setIsPaymentForOpen] = useState(false);
  const [isCountryPaymentOpen, setIsCountryPaymentOpen] = useState(false);
  const [CAD, setCAD] = useState(false);
  const [paymentBy, setPaymentBy] = useState("");
  const [CADValue, setCADValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [paymentFor, setPaymentFor] = useState("");
  const [errors, setErrors] = useState({
    paymentBy: false,
    paymentFor: false,
    country: false,
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const cad = ["DOLLAR", "NAIRA"];

  const handlePaymentByToggle = () => setIsPaymentByOpen(!isPaymentByOpen);
  const handlePaymentForToggle = () => setIsPaymentForOpen(!isPaymentForOpen);
  const handleCAD = () => {
    setCAD(!CAD);
  };
  const handleCADToggle = (option) => {
    setCADValue(option);
    setErrors({ ...errors, CAD: false });
  };
  const handleCountryToggle = () =>
    setIsCountryPaymentOpen(!isCountryPaymentOpen);

  const handlePaymentBySelect = (option) => {
    setPaymentBy(option);
    setIsPaymentByOpen(false);
    setErrors({ ...errors, paymentBy: false });
  };

  const handlePaymentForSelect = (option) => {
    setPaymentFor(option);

    setIsPaymentForOpen(false);
    setErrors({ ...errors, paymentFor: false });
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsCountryPaymentOpen(false);
    setErrors({ ...errors, country: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = {
      paymentBy: !paymentBy,
      paymentFor: !paymentFor,
      country: !selectedCountry,
      CAD: !CADValue,
    };

    setErrors(formErrors);

    if (!Object.values(formErrors).includes(true)) {
      console.log("Form submitted with:", {
        paymentBy,
        paymentFor,
        selectedCountry,
        CADValue,
      });
      Next();
    }
  };

  return (
    <div className="lg:ml-[2.5rem]">
      <div className="w-full pt-[4rem]">
        <TuitionHeader
          count="2"
          Total={5}
          Header="Payment Information"
          Paragraph="Confirm the amount you’re sending before proceeding"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="flex flex-col max-sm:mx-5">
            <label htmlFor="PaymentBy" className="tuitionLabel">
              Payment by
            </label>
            <div className="tuitionSelect mb-[2rem] py-[0.8rem] flex justify-between">
              {paymentBy || "Choose an option"}
              {isPaymentByOpen && (
                <div>
                  {By.map((option, index) => (
                    <div
                      key={index}
                      className="bg-white border-b border-gray shadow-lg pb-4 pl-[2rem] pt-4 hover:bg-[#CCCCCC] hover:rounded-t-lg lg:w-[15rem] font-Modarat text-[18px] font-normal text-[#0A0E27] relative top-[2rem] left-[2.5rem] cursor-pointer"
                      onClick={() => handlePaymentBySelect(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}

              <div
                onClick={handlePaymentByToggle}
                className="pt-1 cursor-pointer"
              >
                <img src={ArrowDown} alt="Arrow down icon" />
              </div>
            </div>
            {errors.paymentBy && (
              <span className="text-red-500 text-sm -mt-6 pb-3">
                Please select a payment method.
              </span>
            )}
          </div>

          <div className="flex flex-col max-sm:mx-5">
            <label htmlFor="PaymentFor" className="tuitionLabel">
              Payment for
            </label>
            <div className="tuitionSelect mb-[2rem] py-[0.8rem] flex justify-between">
              {paymentFor || "Choose an option"}
              {isPaymentForOpen && (
                <div>
                  {For.map((option, index) => (
                    <div
                      key={index}
                      className="bg-white border-b border-gray shadow-lg pl-[2rem] pb-3 pt-4 hover:bg-[#CCCCCC] hover:rounded-t-lg lg:w-[14rem] font-Modarat text-[18px] font-normal text-[#0A0E27] relative top-[2rem] left-[2.5rem] cursor-pointer"
                      onClick={() => handlePaymentForSelect(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
              <div
                onClick={handlePaymentForToggle}
                className="pt-1 cursor-pointer"
              >
                <img src={ArrowDown} alt="Arrow down icon" />
              </div>
            </div>
            {errors.paymentFor && (
              <span className="text-red-500 text-sm -mt-6 pb-3">
                Please select what the payment is for.
              </span>
            )}
          </div>

          <div className="flex flex-col max-sm:mx-5">
            <label htmlFor="CountryPayment" className="tuitionLabel">
              Country you are paying from
            </label>
            <div className="tuitionSelect mb-[2rem] py-[0.8rem] flex justify-between">
              {selectedCountry || "Choose an option"}
              {isCountryPaymentOpen && (
                <div>
                  {paymentCountry.map((country, index) => (
                    <div
                      key={index}
                      className="bg-white border-b border-gray shadow-lg pl-[2rem] pb-3 pt-4 hover:bg-[#CCCCCC] hover:rounded-t-lg lg:w-[14rem] font-Modarat text-[18px] font-normal text-[#0A0E27] relative top-[2rem] left-[2.5rem] cursor-pointer"
                      onClick={() => handleCountrySelect(country)}
                    >
                      {country}
                    </div>
                  ))}
                </div>
              )}
              <div
                onClick={handleCountryToggle}
                className="pt-1 cursor-pointer"
              >
                <img src={ArrowDown} alt="Arrow down icon" />
              </div>
            </div>
            {errors.country && (
              <span className="text-red-500 text-sm -mt-6 pb-3">
                Please select a country.
              </span>
            )}
          </div>

          <div className="flex flex-col max-sm:mx-5">
            <label htmlFor="CAD" className="tuitionLabel">
              Your school will receive
            </label>
            <div className="pt-[0.2rem] mb-[2rem] flex">
              <div
                className="w-[138px] text-[#A1A4A8] h-[48px] flex justify-between border border-[#CCCCCC] py-3 px-[1.25rem] text-[14px]"
                onClick={handleCAD}
              >
                {CADValue || "CAD"}
                {CAD && (
                  <div className="">
                    {cad.map((option, index) => (
                      <div
                        key={index}
                        className="bg-white border-b border-gray pb-3 shadow-lg pl-[2rem] pt-4 hover:bg-[#CCCCCC] hover:rounded-t-lg text-[#0A0E27]  lg:w-[14rem] font-Modarat text-[14px] font-normal relative top-[2rem] left-[2.5rem] cursor-pointer "
                        onClick={() => handleCADToggle(option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
                <div className="pt-1 cursor-pointer">
                  <img src={ArrowDown} alt="Arrow down icon" />
                </div>
              </div>

              <input
                type="number"
                name="number"
                id=""
                className="lg:w-[298px] max-sm:w-full h-[48px] border border-[#CCCCCC] outline-none"
              />
            </div>
            {errors.CADValue && (
              <span className="text-red-500 text-sm">
                Payment amount cannot be empty.
              </span>
            )}
          </div>

          <div className="flex flex-col max-sm:mx-5">
            <label htmlFor="DiscountCode" className="tuitionLabel">
              Discount code
            </label>
            <div className="pt-[0.2rem] mb-[2rem] flex">
              <input
                className="lg:w-[341px] max-sm:w-full h-[48px] border border-[#CCCCCC] px-4"
                placeholder="Enter discount code"
              />
              <div className="w-[95px] text-center  bg-[#2A3362] text-white font-Moderate text-[18px] leading-[24px]">
                <p className="py-[0.6rem]">Apply</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col max-sm:mx-5">
            <label htmlFor="TotalPayment" className="tuitionLabel">
              Your total payment (plus fees)
            </label>
            <div className="pt-[0.2rem] mb-[0.5rem] flex">
              <div className="lg:w-[83px] max-sm:w-3/2 h-[48px] border border-[#CCCCCC] py-2 px-[1.25rem]">
                <h4 className="font-Modarat font-normal text-[18px] leading-[22px] text-[#000000]">
                  Naira
                </h4>
              </div>
              <div className="lg:w-[353px] max-sm:w-full h-[48px] border border-[#CCCCCC]"></div>
            </div>
          </div>

          <div className="flex gap-3 mb-[2.5rem] max-sm:mx-5">
            <div>
              <img src={paymentFooter} alt="footer icon" />
            </div>
            <div className="font-Modarat lg:pr-[6.5rem]  font-normal text-[16px] leading-[22px] text-[#545972]">
              Please note that we will not store this information, and your
              payment method will be secured.
            </div>
          </div>

          <div>
            <PaymentInforSummary />
          </div>

          <div className="mt-[1.7rem]">
            {/* <Button text="Continue" /> */}

            {/* <TuitionButton
          back="Back"
          forward="Continue"
          Next={Next}
          disabled={isButtonDisabled} // Pass the disabled state to the button */}
            {/* /> */}
            <TuitionButton type="submit" back="Back" forward="Continue" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentInformation;
