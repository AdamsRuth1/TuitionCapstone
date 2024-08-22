import React, { useEffect, useState } from "react";
import { useCardContext } from "../../../context/CardContext";
import RoundedCircleButton from "./dotted"; // Assuming this is the same button component
import Search from "./searchFilter";

const CardDetails = () => {
  const { cardId } = useCardContext();
  const [cardDetails, setCardDetails] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showRedDot, setShowRedDot] = useState(true); // Default to true to show red dot initially

  useEffect(() => {
    if (!cardId) {
      console.error("No cardId provided");
      return; // Exit if cardId is not available
    }

    const fetchCardDetails = async () => {
      const token = JSON.parse(localStorage.getItem("token"));

      try {
        const response = await fetch(`https://alt-wave-b-project-backend.onrender.com/api/flutter_app/cards/virtual-cards/${cardId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setCardDetails(data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching card details:", error);
      }
    };

    fetchCardDetails(); // Call the function to fetch card details
  }, [cardId]); // Dependency on cardId ensures effect runs when cardId changes

  // Handle search input
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Filter card details based on search term (though here it will only filter the single card)
  const filteredCard = cardDetails && cardDetails.data.description.toLowerCase().includes(searchTerm.toLowerCase())
    ? cardDetails
    : null;

  return (
    <div className="mt-10 h-[400px] overflow-y-auto">
      <Search searchTerm={searchTerm} onSearch={handleSearch} />

      {/* Render card details if available and filtered */}
      {filteredCard ? (
        <div className="mt-10 mb-10 flex justify-between">
          <RoundedCircleButton showCircle={showRedDot} />
          <div style={{ marginLeft: "-50px" }}>
            <p className="font-medium font-Modarat text-base text-BlackFont">
              {filteredCard.data.description || "N/A"}
            </p>
            <p style={{ color: "#606569" }} className="text-base font-normal font-Modarat">
              Created: 
            </p>
          </div>
    
          <button 
  onClick={() => setShowRedDot(!showRedDot)} 
  className="hover:bg-blue-500 hover:text-white text-customBlack" 
  style={{
    textAlign: "center", 
    borderRadius: "99px", 
    backgroundColor: "rgb(224, 226, 240)", 
    padding: "8px 16px", 
    width: "84px", 
    margin: "10px"
  }}
>
  Details
</button>
        </div>
      ) : (
        <div className="text-center mt-10">
          <p>No card details available</p>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
