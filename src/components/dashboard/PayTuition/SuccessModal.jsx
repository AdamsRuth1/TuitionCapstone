import React from 'react';

const SuccessModal = ({ message, onClose, onContinue }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-80 text-center">
        <div className="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mx-auto text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2l4-4m-6 4l4-4m-1 5a7.5 7.5 0 11-3.9-5.8"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">Payment Successful</h3>
        <p className="mb-4">{message}</p>
        <button
          className="w-full bg-customBlack text-white p-2 rounded-lg mb-2"
          onClick={onContinue}
        >
          Continue
        </button>
        <button
          className="w-full bg-gray-300 text-black p-2 rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
