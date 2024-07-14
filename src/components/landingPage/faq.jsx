import React, { useState } from "react";

const Faq = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemId) => {
    setActiveItem(itemId === activeItem ? null : itemId);
  };

  const faqs = [
    {
      id: 1,
      question: "What are the fees for using tuition?",
      answer: "The fees for using tuition are $X per month.",
    },
    {
      id: 2,
      question: "How can I be sure my school has received the payment?",
      answer: "You will receive a confirmation email once the payment is processed.",
    },
    {
      id: 3,
      question: "How long will it take for my institution to receive the payment?",
      answer: "Payments are usually processed within 2-3 business days.",
    },
    {
      id: 4,
      question: "What are the fees for using tuition?",
      answer: "The fees for using tuition are $X per month.",
    },
    {
      id: 5,
      question: "What are the fees for using tuition?",
      answer: "The fees for using tuition are $X per month.",
    },
    {
      id: 6,
      question: "What are the fees for using tuition?",
      answer: "The fees for using tuition are $X per month.",
    },
    {
      id: 7,
      question: "What are the fees for using tuition?",
      answer: "The fees for using tuition are $X per month.",
    },
  ];

  return (
    <div className="mt-32 mb-64 ml-[100px] mr-[100px]">
        <h1 className=" text-3xl  font-normal font-millik text-customBlack text-50 leading-13 text-center my-14 ">
               Frequently Asked Questions
              </h1>
      <div className="max-w-screen-xlg  mx-12 font-Modarat   ">
        {faqs.map((faq) => (
          <div key={faq.id} className="border-b my-2 border-gray-200">
            <button
              className="flex  justify-between items-center w-full font-medium text-gray-700 hover:text-gray-900 focus:outline-none px-4 py-8"
              onClick={() => handleItemClick(faq.id)}
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  activeItem === faq.id ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeItem === faq.id && (
              <div className="px-4 py-2 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
