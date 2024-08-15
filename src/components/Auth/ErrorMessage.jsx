import { BiError } from "react-icons/bi";
const ErrorMessage = ({ errormessage, onClose }) => {
  return (
    <div className="fixed inset-0 flex text-center  items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded max-sm:mx-7 shadow-lg z-10  w-[30rem]">
        <div className="text-4xl font-bold mb-4 flex justify-center ">
          <BiError color="red" />
        </div>
        <p className="mb-4 font-Modarat text-2xl max-sm:text-[18px]">{errormessage}</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-[#252E6A] text-white rounded"
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
