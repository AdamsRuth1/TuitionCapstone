import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

import TuitionHeader from "./TuitionHeader";
import PaymentMethod from "./PaymentMethod";
import TuitionWalletPayment from "./TuitionWalletPayment";
import SuccessModal from "./SuccessModal";

import Payment01 from "../../../assets/images/payment01.png";
import card02 from "../../../assets/images/card02.png";
import wallet04 from "../../../assets/images/wallet04.png";
import bank03 from "../../../assets/images/bank03.png";
import Google from "../../../assets/images/Google play logo (1).png";

const CompletePayment = () => {
  const [inputAmount, setInputAmount] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handlePayment = () => {
    const numericAmount = parseFloat(inputAmount.replace(/[^0-9.]/g, ""));
    if (isNaN(numericAmount) || numericAmount <= 0) {
      alert("Invalid amount");
      return;
    }

    const config = {
      public_key: "FLWPUBK_TEST-02b9b5fc6406bd4a41c3ff141cc45e93-X",
      tx_ref: Date.now().toString(),
      amount: numericAmount,
      currency: "NGN",
      customer: {
        email: "user@gmail.com",
        phone_number: "070********",
        name: "John Doe",
      },
      customizations: {
        title: "My Payment Title",
        description: "Funding my wallet",
        logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
      },
    };

    const handleFlutterPayment = useFlutterwave(config);

    handleFlutterPayment({
      callback: function (data) {
        const newBalance = amount + numericAmount;
        setAmount(newBalance);
        localStorage.setItem("amount", newBalance);

        const transaction = {
          id: data.tx_ref,
          amount: numericAmount,
          date: new Date().toISOString(),
        };

        let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
        transactions.push(transaction);
        localStorage.setItem("transactions", JSON.stringify(transactions));

        setShowSuccessModal(true);
        closePaymentModal();

        setTimeout(() => {
          navigate("/dashboard/");
        }, 3000); // Wait for 3 seconds before navigating
      },
      onClose: function () {
        setShowModal(false);
      },
    }).catch((error) => {
      console.error("Payment error:", error);
      closePaymentModal();
      setShowModal(false);
    });
  };

  const handleInputChange = (event) => {
    setInputAmount(event.target.value);
  };

  const handleSuccessContinue = () => {
    setShowSuccessModal(false);
    navigate("/dashboard/");
  };

  return (
    <div className="w-full ml-[3rem] pt-[4rem] mb-[18rem]">
      <TuitionHeader
        count="5"
        Header="Complete Payment"
        Paragraph="Confirm your bank’s transaction limit and choose your preferred payment method"
      />
      <PaymentMethod
        image={Payment01}
        Method="Generate Payment Link"
        description="Send a link to someone else to pay your fee for you"
        handleDeposit={toggleModal}
      />
      <TuitionWalletPayment
        image={wallet04}
        Method="Tuition Wallet"
        description="Easily pay through your Tuition Wallet"
      />
      <PaymentMethod
        image={bank03}
        Method="Bank Transfer"
        description="Send funds directly from your bank account"
        handleDeposit={toggleModal}
      />
      <PaymentMethod
        image={card02}
        Method="Debit Card"
        description="Send funds securely to your school using your card"
        handleDeposit={toggleModal}
      />
      <PaymentMethod
        image={Google}
        className="pl-2"
        Method="Google Pay"
        description="Make instant payment to your school via Google Pay"
        handleDeposit={toggleModal}
      />

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <h3 className="text-lg font-semibold mb-4">Enter Amount</h3>
            <input
              type="text"
              value={inputAmount}
              onChange={handleInputChange}
              placeholder="Enter amount"
              className="w-full p-2 mb-4 border rounded-lg"
            />
            <button
              className="w-full bg-customBlack font-Modarat text-white p-2 rounded-lg"
              onClick={handlePayment}
            >
              Pay
            </button>
            <button
              className="w-full mt-2 bg-gray-300 text-black p-2 rounded-lg"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <SuccessModal
          message="Your payment has been successfully processed!"
          onClose={() => setShowSuccessModal(false)}
          onContinue={handleSuccessContinue}
        />
      )}
    </div>
  );
};

export default CompletePayment;
