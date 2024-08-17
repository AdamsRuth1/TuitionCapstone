import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="my-8 mx-4 sm:mx-8 md:mx-12 lg:mx-24">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-millik font-normal text-customBlack text-center my-8">
        Frequently Asked Questions
      </h1>
      <div className="max-w-screen-lg mx-auto font-Modarat">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border-b my-2 border-gray-200"
          >
            <button
              className="flex justify-between items-center w-full font-medium text-gray-700 hover:text-gray-900 focus:outline-none px-4 py-4 md:py-6"
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
            <AnimatePresence>
              {activeItem === faq.id && (
                <motion.div
                  className="px-4 py-2 md:px-6 md:py-4 text-gray-700"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;