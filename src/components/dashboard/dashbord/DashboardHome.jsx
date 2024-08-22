import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../../../assets/images/Profile empty.png";
import logo from "../../../assets/images/Vector (4).png";
import PaginationBtn from './pagination';
import { useCardContext } from "../../../context/CardContext";
import HeaderMessage from "../../views/messageDashboard";
import Dashboard from "../../views/dashboard";

const DashboardHome = () => {
  const { cardId } = useCardContext();
  const [hasMadePayment, setHasMadePayment] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [savedCardDetails, setSavedCardDetails] = useState([]);
  const [cardDetails, setCardDetails] = useState({});
  const [currentDateTime, setCurrentDateTime] = useState(new Date()); // State for date and time
  const firstname = JSON.parse(localStorage.getItem("first_name")) || "User";

  useEffect(() => {
    // Update current date and time when component mounts
    setCurrentDateTime(new Date());

    // Optionally, you can set an interval to update the time every minute
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup interval on component unmount

  }, []);

  useEffect(() => {
    if (!cardId) {
      console.error("No cardId provided");
      return; // Exit if cardId is not available
    }

    // Fetch card details by ID
    const fetchCardDetails = async (cardId) => {
      try {
        const token = JSON.parse(localStorage.getItem("token"));
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
        setSavedCardDetails([data]); // Ensure this structure aligns with your rendering logic
      } catch (error) {
        console.error("Error fetching card details:", error);
      }
    };

    fetchCardDetails(cardId); // Call the function to fetch card details
  }, [cardId]);

  return (
    <Dashboard className="mx-[10rem]">
      <div className="absolute right-10 top-[18]">
        <HeaderMessage />
      </div>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-4">
          <img src={Profile} alt="Profile" />
        </div>
        <div>
          <h1 className="font-millik text-3xl mb-2 leading-10">Hello {firstname}</h1>
          <p className="text-center font-Modarat text-customGray text-lg">Welcome to Tuition</p>
         
        </div>
      </div>

      {savedCardDetails.length > 0 ? (
        <div className="bg-customLightBlueGray mt-16 rounded-lg border-b shadow-sm w-[90%] flex flex-col text-center">
          <div className="my-20">
            <div className="mb-10 flex justify-center">
              <img src={logo} alt="Logo" />
            </div>
            <div>
              <h1 className="font-Modarat font-bold text-2xl text-customBlack mb-4">Your Card Details</h1>
              <div className="mt-8" style={{ marginLeft: "32px", marginRight: "32px" }}>
                {savedCardDetails.map((card) => (
                  <div key={card.id} className="flex pb-10 items-center">
                    <div className="flex flex-col w-full">
                      <div className="flex justify-between items-center">
                        <p className="font-medium font-Modarat text-lg">{card.data.description || "N/A"}</p>
                        <p className="text-sm font-Modarat" style={{ color: "#606569" }}>
                          Created: {card.data.card_type || "N/A"}
                        </p>
                        <p className="text-sm font-Modarat" style={{ color: "#606569" }}>
                         Date: {currentDateTime.toLocaleString()}
                        </p>
                        {/* Display additional card details if available */}
                        {cardDetails && (
                          <div className="mt-4">
                            <p className="font-medium font-Modarat text-lg">Card type: <span className="text-sm font-Modarat" style={{ color: "#606569" }}>{card.data.card_type}</span></p>
                      
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : hasMadePayment ? (
        <div className="bg-customLightBlueGray mt-16 rounded-lg border-b shadow-sm w-full flex flex-col text-center">
          {/* Uncomment and adjust the following block if you want to display transactions */}
          {/* <div className="lg:my-20">
            <div className="mb-10 flex justify-center">
              <img src={logo} alt="Logo" />
            </div>
            <div>
              <h1 className="font-Modarat font-bold text-2xl text-customBlack mb-4">Your Transactions</h1>
              <div className="mt-8" style={{ marginLeft: "32px", marginRight: "32px" }}>
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex pb-10 items-center">
                    <div className="flex flex-col w-full">
                      <div className="flex justify-between items-center">
                        <p className="font-medium font-Modarat text-lg">Transaction Id: <span className="font-bold">{transaction.id}</span></p>
                        <p className="text-sm font-Modarat" style={{ color: "#606569" }}>{transaction.paymentType}</p>
                        <p className="text-right font-base font-Modarat text-customBlack">Amount: ₦{transaction.amount.toFixed(2)}</p>
                        <p className="text-right font-base font-Modarat text-customBlack">Date: {new Date(transaction.date).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      ) : (
        <div className="bg-customLightBlueGray mt-16 rounded-lg border-b shadow-sm w-full flex flex-col text-center">
          <div className="my-20">
            <div className="mb-10 flex justify-center">
              <img src={logo} alt="Logo" />
            </div>
            <div>
              <h1 className="font-Modarat font-bold text-2xl text-customBlack mb-4">No transactions</h1>
              <p className="font-Modarat text-customGray text-base mb-10">You are yet to make any payment here. Click “Make payment” to get started.</p>
            </div>
            <Link to="/dashboard/tuition" className="bg-customButton text-white font-Modarat text-lg py-3 px-6 rounded-lg mb-10">
              Make Payment
            </Link>
          </div>
        </div>
      )}

      <div className="mt-10 flex mb-72">
        <PaginationBtn previousUrl="/previous-page" nextUrl="/next-page" />
      </div>
    </Dashboard>
  );
};

export default DashboardHome;
