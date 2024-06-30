import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../../../assets/images/Profile empty.png";
import logo from "../../../assets/images/Vector (4).png";
import Dashboard from "../../views/dashboard";
import PaginationBtn from './pagination';
const DashboardHome = () => {
  const [hasMadePayment, setHasMadePayment] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const firstname = JSON.parse(localStorage.getItem("first_name"));
  useEffect(() => {
    const fetchPaymentData = async () => {
      try {
        const response = await fetch("", {});
        if (response.ok) {
          const data = await response.json();
          if (data.hasMadePayment) {
            setHasMadePayment(true);
            setTransactions(data.transactions);
          }
        } else {
          throw new Error("Failed to fetch payment data");
        }
      } catch (error) {
        console.error("Error fetching payment data:", error);
      }
    };

    fetchPaymentData();
  }, []);
  return (
    <Dashboard>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-4">
          <img src={Profile} alt="Profile" />
        </div>
        <div>
          <h1 className="font-millik text-3xl mb-2 leading-10">
            Hello {firstname}
          </h1>
          <p className="text-center font-Modarat text-customGray text-lg">
            Welcome to Tuition
          </p>
        </div>
      </div>
      {hasMadePayment ? (
        <div className="bg-customLightBlueGray mt-16 rounded-lg border-b shadow-sm w-2/4 flex flex-col text-center">
          <div className="my-20">
            <div className="mb-10 flex justify-center">
              <img src={logo} alt="Logo" />
            </div>
            <div>
              <h1 className="font-Modarat font-bold text-2xl text-customBlack mb-4">
                Your Transactions
              </h1>
              <ul className="text-left flex justify-between">
                {transactions.map((transaction) => (
                  <li key={transaction.id}>
                    <p>{transaction.description}</p>
                    <p>{transaction.amount}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 flex mb-72">
                <PaginationBtn previousUrl="/previous-page" nextUrl="/next-page" />

          </div>
        </div>
      ) : (
        <div className="bg-customLightBlueGray mt-16 rounded-lg border-b shadow-sm w-2/4 flex flex-col text-center">
          <div className="my-20">
            <div className="mb-10 flex justify-center">
              <img src={logo} alt="Logo" />
            </div>
            <div>
              <h1 className="font-Modarat font-bold text-2xl text-customBlack mb-4">
                No transactions
              </h1>
              <p className="font-Modarat text-customGray text-base mb-10">
                You are yet to make any payment here. Click “Make payment” to
                get started.
              </p>
            </div>
            <Link
              to="/dashboard/tuition
            "
              className="bg-customButton  text-white font-Modarat text-lg py-3 px-6 rounded-lg mb-10"
            >
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
