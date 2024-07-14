import React from "react";

const Details = ({ children, onClick, className }) => {
  return (
    <button
      style={{
        textAlign: "center",
        borderRadius: "99px",
        backgroundColor: "#E0E2F0",
        padding: "8px 16px",
        width: "84px",
        margin: "10px",
      }}
      onClick={onClick}
      className={`hover:bg-blue-500 hover:text-white text-customBlack ${className}`}
    >
      {children}
    </button>
  );
};

export default Details;
