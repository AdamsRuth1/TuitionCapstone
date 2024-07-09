import React from "react";
import Looper from "../../../assets/images/Looper-1 (1).png";
import ReactFlagsSelect from "react-flags-select";
import { BsEye, BsEyeSlash } from "react-icons/bs";

import { useState } from "react";
export default function Card() {
  const [selected, setSelected] = useState("US");
  const [showAmount, setShowAmount] = useState("true");
  const toggleVisibility = () => {
    setShowAmount(!showAmount);
  };
  const renderAmount = () => {
    if (showAmount) {
      return "$18,000";
    } else {
      return "******";
    }
  };
  return (
    <>
      <div
        className="flex bg-customBlack ml-10 rounded-2xl"
        style={{ width: "620px", height: "269px", marginTop: "64px" }}
      >
        <div className="ml-8 mt-9" style={{ marginBottom: "37px" }}>
          <div className="flex align-center text-center ">
            <p className="text-center" style={{ color: "#A1A4A8" }}>
              Wallet Balance
            </p>
            <ReactFlagsSelect
              className="ml-6 "
              selected={selected}
              onSelect={(code) => setSelected(code)}
            />
            ;
          </div>
          <div className=" flex mt-4 relative">
            <h3 className="text-white font-millik text-3xl">
              {renderAmount()}
            </h3>
            <button
              className="text-white w-24 absolute top-2 right-2"
              onClick={toggleVisibility}
            >
              {" "}
              {showAmount ? <BsEye /> : <BsEyeSlash />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
