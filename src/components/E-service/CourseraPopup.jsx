import StarIcon from "../../assets/Icons/StarIcon.svg";
import CloseIcon from "../../assets/Icons/closeIcon.svg";
import Button from "../../components/dashboard/Button";
import { Link } from "react-router-dom";

const CourseraPopup = ({ handleClose }) => {
  return (
    <div className="popup flex justify-center items-center fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="bg-[#F8F8F8] w-[90%] max-w-[526px] rounded-[16px] border py-[2rem] mx-4 md:mx-0">
        <div className="flex justify-end pr-7 pb-3">
          <div
            className="close rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={handleClose}
          >
            <img src={CloseIcon} alt="close icon" width={15} />
          </div>
        </div>

        <div className="bg-[#252E6A] flex justify-center mx-auto w-[90%] max-w-[478px] h-[104px] rounded-[8px]">
          <h6 className="py-[2.5rem] font-millik text-[16px] font-normal leading-[24px] text-white text-center">
            Pay for Coursera
          </h6>
        </div>

        <div className="pt-[1.6rem]">
          {[
            "Pay for Coursera by creating a new virtual card or using existing card",
            "To avoid payment issues, ensure your virtual card balance covers the Coursera course price",
            "On the Coursera platform; Select the course you wish to enroll for and proceed to checkout",
            "Select “cards” as your preferred payment method",
            "At checkout on Coursera, use your virtual card information to complete your payment.",
          ].map((text, index) => (
            <div
              key={index}
              className="w-[90%] max-w-[478px] mx-auto flex gap-[1rem] my-[1.2rem]"
            >
              <img src={StarIcon} alt="A star icon" width={21} />
              <p className="font-Modarat font-normal text-[16px] md:text-[20px] text-[#51575D] leading-[24px]">
                {text.split("Coursera")[0]}
                <span className="font-bold"> Coursera </span>
                {text.split("Coursera")[1]}
              </p>
            </div>
          ))}
        </div>

        <Link
          className="flex justify-center max-sm:w-full"
          to="/dashboard/wallet"
        >
          <Button text="Continue" />
        </Link>
      </div>
    </div>
  );
};

export default CourseraPopup;
