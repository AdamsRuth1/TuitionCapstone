// SeeCardDetails.js
import React, { useEffect } from "react";
import { useCardContext } from "../../../context/CardContext";
import barner from "../../../assets/images/Banner how to pay.png";
import { Link } from "react-router-dom";
import FirstCard from "./cardDesign";
import SecondCard from "./cardDesign1";
import ThirdCard from "./cardDesign3";
import FourthCard from "./cardDesign4";

// Create a mapping of card styles to components
const cardStyleComponents = {
  FirstCard: <FirstCard />,
  SecondCard: <SecondCard />,
  ThirdCard: <ThirdCard />,
  FourthCard: <FourthCard />,
};

export default function SeeCardDetails() {
  const { cardDetails, enteredDetails, topUpDetails, setCardId } = useCardContext();

  const sendCardDetails = async () => {
    const data = {
      description: enteredDetails?.description || "N/A",
      card_type: enteredDetails?.card_type || "default-type",
      card_style: cardDetails?.card_style || "default-style",
      top_up_amount: topUpDetails?.top_up_amount || 0,
      currency: topUpDetails?.currency || "USD",
    };

    console.log("this is the data:", data);
    const token = JSON.parse(localStorage.getItem("token"));
    const url = `https://alt-wave-b-project-backend.onrender.com/api/flutter_app/cards/virtual-cards`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      // console.log('Backend response:', responseData); // Log the full backend response
      // console.log('Generated card ID:', responseData.data.id); // Log the card ID specifically
      setCardId(responseData.data.id); // Set the card ID in the context
      // console.log("here is setcardid", setCardId)

    } catch (error) {
      // console.error('Error sending card details:', error);
    }
  };

  useEffect(() => {
    sendCardDetails(setCardId);
  }, []);

  const CardComponent = cardDetails?.card_style ? cardStyleComponents[cardDetails.card_style] : null;

  return (
    <div className="mt-10">
      <Link to="/dashboard">
        <img src={barner} alt="Banner" />
      </Link>
      <div className="flex justify-center">
        <div className="mt-[26px] mb-[29px]">
          {cardDetails ? (
            <div>
              {CardComponent ? (
                CardComponent
              ) : (
                <p>Card style not available.</p>
              )}
            </div>
          ) : (
            <p>No card selected.</p>
          )}
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="mb-[8px] moderat-font text-base text-[#A1A4A8]">Card Name</p>
          <p className="moderat-font text-lg font-bold text-[#0A0E27]">{enteredDetails?.card_type || "N/A"}</p>
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
