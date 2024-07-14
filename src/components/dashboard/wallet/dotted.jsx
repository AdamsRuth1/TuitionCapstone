import React from "react";

const RoundedCircleButton = ({ onClick, showCircle }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="rounded-full w-6 h-6 mt-4 ml-4 flex items-center justify-center"
        style={{
          border: "1px solid #CCCCCC",
        }}
      >
        <div
          className="rounded-full w-3 h-3 bg-customLine"
          style={{ backgroundColor: showCircle ? "red" : "#CCCCCC" }}
        ></div>
      </button>
    </div>
  );
};

export default RoundedCircleButton;
