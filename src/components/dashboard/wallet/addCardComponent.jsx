import React, { useState, useEffect } from "react";
import Details from "./detailsComponent";
import RoundedCircleButton from "./dotted";
import Search from "./searchFilter";

const AddWallet = () => {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [showRedDot, setShowRedDot] = useState(false);

  // Fetch card details from API
  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const response = await fetch("https://alt-wave-b-project-backend.onrender.com/api/flutter_app/cards/virtual-cards/{card_id}"); // Replace with your API endpoint
        const data = await response.json();

        if (Array.isArray(data)) {
          // Sort cards by creation date in descending order
          const sortedCards = data.sort((a, b) => new Date(b.enteredDetails.creationDate) - new Date(a.enteredDetails.creationDate));
          setCards(sortedCards);
        } else {
          setCards([]);
        }
      } catch (error) {
        console.error("Error fetching card details:", error);
        setCards([]);
      }
    };

    fetchCardDetails();
  }, []);

  // Handle search input
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Filter cards based on search term
  const filteredCards = cards.filter((card) =>
    card.enteredDetails?.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle selecting a card
  const handleSelectCard = (index) => {
    setSelectedCardIndex(index);
    setShowRedDot(!showRedDot); // Toggle the red dot
  };

  // Function to handle clicking the Details button
  const handleDetailsClick = (index) => {
    setShowRedDot(!showRedDot); // Toggle the red dot
    setSelectedCardIndex(index); // Update selected card index
  };

  return (
    <div className="mt-10 h-[400px] overflow-y-auto">
      <Search searchTerm={searchTerm} onSearch={handleSearch} />

      {/* Render saved card details if available and filtered */}
      {filteredCards.length > 0 ? (
        filteredCards.map((card, index) => (
          <div key={index} className="mt-10 mb-10 flex justify-between">
            <RoundedCircleButton showCircle={showRedDot && index === selectedCardIndex} />
            <div style={{ marginLeft: "-50px" }}>
              <p className="font-medium font-Modarat text-base text-BlackFont">
                {card.enteredDetails?.description || "N/A"}
              </p>
              <p style={{ color: "#606569" }} className="text-base font-normal font-Modarat">
                Created: {card.enteredDetails?.creationDate || "N/A"}
              </p>
            </div>
            <Details onClick={() => handleDetailsClick(index)}>Details</Details>
          </div>
        ))
      ) : (
        // Render "No cards found" message if no saved card details
        filteredCards.length === 0 && searchTerm ? (
          <p className="text-center mt-10">No cards found</p>
        ) : (
          // Render a placeholder if no filtered cards and no search term
          <div className="text-center mt-10">
            <p>No cards available. Please check back later.</p>
          </div>
        )
      )}
    </div>
  );
};

export default AddWallet;
