
import React, { createContext, useState, useContext } from 'react';

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cardDetails, setCardDetails] = useState(null);
  const [enteredDetails, setEnteredDetails] = useState({});
  const [topUpDetails, setTopUpDetails] = useState({});
  const [cardId, setCardId] = useState(null); 

  return (
    <CardContext.Provider value={{ cardDetails, setCardDetails, enteredDetails, setEnteredDetails, topUpDetails, setTopUpDetails, cardId, setCardId }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => useContext(CardContext);

