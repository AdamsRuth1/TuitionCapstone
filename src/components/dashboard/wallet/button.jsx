import React from "react";

const Button = ({ children, onClick, className, style }) => {
  return (
    <button
      className="bg-customButton rounded-lg flex text-white font-bold"
      style={{ padding: "8px 24px" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
