import React from "react"
import Icon1 from "../../../assets/images/Icon left container.png"
import Icon4 from "../../../assets/images/Icon left container (3).png"
import Icon2 from "../../../assets/images/Icon left container (1).png"
import Icon3 from "../../../assets/images/Icon left container (2).png"
import Icon5 from "../../../assets/images/Icon left container (4).png"
import Icon6 from "../../../assets/images/Icon left.png"

export default function HistoryComponent(){
    const historyItems = [
    {
      image: Icon1,
      description: "Motiions Ads",
      date: "12th June 2021",
      time: "4:14pm",
      bank: "Monobank Card",
      amount: "-$22.67",
      balance: "Bal: $290.67"
    },
    {
      image: Icon2,
      description: "Walmart Payout",
      date: "7th June 2021",
      time: "6:30pm",
      bank: "Monobank Card",
      amount: "-$10.99",
      balance: "Bal: $301.66"
    },
    {
      image: Icon3,
      description: "Figma",
      date: "1st June 2021",
      time: "6:30pm",
      bank: "Subscription Card",
      amount: "-$12.00",
      balance: "Bal: $18.62"
    },
    {
      image: Icon4,
      description: "H-Fitness",
      date: "26th May 2021",
      time: "3:12am",
      bank: "Subscription Card",
      amount: "-$20.00",
      balance: "Bal: $30.62"
    },
    {
      image: Icon5,
      description: "Door Dash",
      date: "25th May 2021",
      time: "8:15pm",
      bank: "Subscription Card",
      amount: "-$20.00",
      balance: "Bal: $30.62"
    },
    {
      image: Icon6,
      description: "Card Top Up",
      date: "25th May 2021",
      time: "7:52pm",
      bank: "Monobank Card",
      amount: "$400.00",
      balance: "Bal: $401.66"
    }
  ];
    
   
  return (
    <div className="mt-8">
      {historyItems.map((item, index) => (
        <div key={index} className="flex items-center py-4 border-b border-red-500">
          <img src={item.image} alt="Icon" className="w-12 h-12 mr-4" />
          <div>
            <p className="font-bold">{item.description}</p>
            <p>
              {item.date} • {item.time}
            </p>
            <p>{item.bank}</p>
            <p>
              <span className="font-bold">{item.amount}</span> | {item.balance}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
} 