import React from "react";
import Looper from "../../../assets/images/Looper-1.png";
import ReactFlagsSelect from "react-flags-select";
import Framer from "../../../assets/images/Frame.png";
import Framer2 from "../../../assets/images/Frame (1).png";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import History from "./history";
import Button from "./button";
import AddWallet from "./addWallet";

import { useState } from "react";
export default function Card() {
  const [selected, setSelected] = useState("US");
  const [showAmount, setShowAmount] = useState(true);
  const toggleVisibility = () => {
    setShowAmount(!showAmount);
  };

  const renderAmount = () => {
    return showAmount ? "$18,000" : "******";
  };
  const topUp = () => {
    alert("top-up");
  };
  const render = "123 4567 890";
  return (
    <>
      <div className="flex">
        <div className="">
          <div
            className="flex bg-customBlack  rounded-2xl"
            style={{
              width: "620px",
              marginTop: "64px",
              backgroundImage: `url(${Looper})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="ml-8 mt-9 mb-10 "
              style={{
                marginBottom: "37px",
              }}
            >
              <div className="flex align-center text-center items-center ">
                <p className="text-center" style={{ color: "#A1A4A8" }}>
                  Wallet Balance
                </p>
                <ReactFlagsSelect
                  className="ml-6 "
                  selected={selected}
                  onSelect={(code) => setSelected(code)}
                />
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
              <div className="mt-4 flex">
                <Button onClick={topUp} className="flex text-lg mr-6">
                  <img src={Framer} /> <span className="ml-2">TopUp</span>
                </Button>
                <button
                  className="flex text-white text-lg bg-customBlack rounded-lg  rounded-white ml-4"
                  style={{
                    border: "1px solid white",
                    padding: "8px 24px",
                    color: "#A1A4A8",
                  }}
                >
                  <span className="mr-2">Send</span> <img src={Framer2} />
                </button>
              </div>
              <div
                className=" text-white mt-10  text-base font-Modarat"
                style={{ color: "#A1A4A8" }}
              >
                <p className="">Unique Id: {render}</p>
              </div>
            </div>
          </div>
          <div className="flex-col flex ">
            {" "}
            <History />
          </div>
        </div>
        <AddWallet />
      </div>
    </>
  );
}
