

import React from 'react';
import { Link } from 'react-router-dom'; 

const PaginationButtons = ({ previousUrl, nextUrl }) => {
  return (
    <div className="mt-10 flex mb-72">
      <button  to={previousUrl}  className="rounded-lg text-base bg-white text-customEnroll font-Modarat mr-4 px-4 border-2 border-customEnroll">
        Previous
      </button>
      <Link  to={nextUrl} className="rounded-lg text-customLightGray text-base bg-white font-Modarat px-4 py-1 border-customLightGray border-2">
        Next
      </Link>
    </div>
  );
};

export default PaginationButtons;
