import React, { useEffect } from "react";
import { useCardContext } from "../../../context/CardContext";
import barner from "../../../assets/images/Banner how to pay.png";
import { Link } from "react-router-dom";

export default function SeeCardDetails() {
  const { cardDetails, enteredDetails, topUpDetails } = useCardContext();

  const sendCardDetails = async () => {
    const data = {
      description: enteredDetails?.description || "N/A",
      card_style: enteredDetails?.card_style || "default-style",
      top_up_amount: topUpDetails?.amount || 0,
      currency: topUpDetails?.currency || "USD",
    };

    try {
      const response = await fetch('https://alt-wave-b-project-backend.onrender.com/api/flutter_app/cards/virtual-cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('Backend response:', responseData);
      // No longer handling creationDate and creationTime
    } catch (error) {
      console.error('Error sending card details:', error);
    }
  };

  useEffect(() => {
    sendCardDetails();
  }, []);

  return (
    <div className="mt-10">
      <Link to="/dashboard">
        <img src={barner} alt="Banner" />
      </Link>
      <div className="flex justify-center">
        <div className="mt-[26px] mb-[29px]">
          {cardDetails ? <div>{cardDetails}</div> : <p>No card selected.</p>}
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="mb-[8px] moderat-font text-base text-[#A1A4A8]">Card Name</p>
          <p className="moderat-font text-lg font-bold text-[#0A0E27]">{enteredDetails?.card_style || "N/A"}</p>
        </div>
        <div className="flex flex-col">
          <p className="mb-[8px] moderat-font text-base text-[#A1A4A8]">Card Number</p>
          <p className="moderat-font text-lg font-bold text-[#0A0E27]">1234 5678 9101 1213</p>
        </div>
      </div>
      <div className="flex justify-between mt-[24px]">
        <div className="flex">
          <div className="flex flex-col">
            <p className="mb-[8px] moderat-font text-base text-[#A1A4A8]">Exp Date</p>
            <p className="moderat-font text-lg font-bold text-[#0A0E27]">12/23</p>
          </div>
          <div className="flex flex-col ml-[44px]">
            <p className="mb-[8px] moderat-font text-base text-[#A1A4A8]">CVV</p>
            <p className="moderat-font text-lg font-bold text-[#0A0E27]">123</p>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <p className="mb-[8px] moderat-font text-base text-[#A1A4A8]">Card Type</p>
          <p className="moderat-font text-lg font-bold text-[#0A0E27]">{enteredDetails?.description || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}
