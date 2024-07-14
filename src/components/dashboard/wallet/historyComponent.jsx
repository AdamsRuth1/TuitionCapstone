import React from "react";
import Icon1 from "../../../assets/images/Icon left container.png";
import Icon2 from "../../../assets/images/Icon left container (1).png";
import Icon3 from "../../../assets/images/Icon left container (2).png";
import Icon4 from "../../../assets/images/Icon left container (3).png";
import Icon5 from "../../../assets/images/Icon left container (4).png";
import Icon6 from "../../../assets/images/Icon left.png";

export default function HistoryComponent() {
  const historyItems = [
    {
      image: Icon1,
      description: "Motiions Ads",
      date: "12th June 2021",
      time: "4:14pm",
      bank: "Monobank Card",
      amount: "-$22.67",
      balance: "Bal: $290.67",
    },
    {
      image: Icon2,
      description: "Walmart Payout",
      date: "7th June 2021",
      time: "6:30pm",
      bank: "Monobank Card",
      amount: "-$10.99",
      balance: "Bal: $301.66",
    },
    {
      image: Icon3,
      description: "Walmart Payout",
      date: "1st June 2021",
      time: "6:30pm",
      bank: "Subscription Card",
      amount: "-$12.00",
      balance: "Bal: $18.62",
    },
    {
      image: Icon4,
      description: "H-Fitness",
      date: "26th May 2021",
      time: "3:12am",
      bank: "Subscription Card",
      amount: "-$20.00",
      balance: "Bal: $30.62",
    },
    {
      image: Icon5,
      description: "Door Dash",
      date: "25th May 2021",
      time: "8:15pm",
      bank: "Subscription Card",
      amount: "-$20.00",
      balance: "Bal: $30.62",
    },
    {
      image: Icon6,
      description: "Card Top Up",
      date: "25th May 2021",
      time: "7:52pm",
      bank: "Monobank Card",
      amount: "$400.00",
      balance: "Bal: $401.66",
    },
  ];

  return (
    <div className="mt-8" style={{ marginLeft: "32px", marginRight: "32px" }}>
      {historyItems.map((item, index) => (
        <div key={index} className="flex pb-10 items-center">
          <img src={item.image} alt="Icon" className="w-12 h-12 mr-4" />
          <div className="flex flex-col w-full  ">
            <div className="flex justify-between items-center  w-full">
              <p className="font-medium font-Modarat text-base" style={{flex: 1}}>{item.description}</p>
              <p style={{ color: "#606569", flex: 1 }} className="text-base font-Modarat text-center ml-10">{item.bank}</p>
              <p style={{ color:  "#972F29", flex: 1 }} className="text-right font-base font-Modarat">{item.amount}</p>
            </div>
            <div className="flex justify-between mt-2  w-full">
              <p style={{ color: "#606569", }} className="text-sm font-Modarat">{item.date} . {item.time}</p>
              <p style={{ color: "#606569",  }} className="text-sm font-Modarat">{item.balance}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
