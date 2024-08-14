


import { useState } from "react";
import NextArrow from "../../assets/Icons/NextArrow.png";
import preArrow from "../../assets/Icons/preArrow.png";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex flex-col items-center pt-4 pb-8 sm:pt-6 sm:pb-12 md:pt-8 md:pb-16">
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
        <button
          className="flex items-center gap-2 font-Moderat font-normal text-lg leading-6 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <img src={preArrow} alt="Previous" className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden sm:inline">Previous</span>
        </button>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`w-8 h-10 flex items-center justify-center bg-blue-900 text-white rounded-md cursor-pointer ${
                currentPage === index + 1 ? "bg-[#252E6A] text-white" : "bg-gray-400 text-[#252E6A]"
              } hover:bg-blue-800`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          className="flex items-center gap-2 font-Moderat font-normal text-lg leading-6 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <span className="hidden sm:inline">Next</span>
          <img src={NextArrow} alt="Next" className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
