import Footer from "../views/footer";
import Header from "../views/header";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactFlagsSelect from "react-flags-select";

export default function Enroll() {
  const [selected, setSelected] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    schoolName: "",
    countryName: "",
    address: "",
    paymentType: "",
    contactEmail: "",
  });

  const [errors, setErrors] = useState({
    schoolName: "",
    countryName: "",
    address: "",
    paymentType: "",
    contactEmail: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    const newErrors = {};
    if (!formData.schoolName) newErrors.schoolName = "Kindly fill out this field";
    if (!formData.countryName) newErrors.countryName = "Kindly select your country";
    if (!formData.address) newErrors.address = "Kindly fill out this field";
    if (!formData.paymentType) newErrors.paymentType = "Kindly fill out this field";
    if (!formData.contactEmail) newErrors.contactEmail = "Kindly fill out this field";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsLoading(true);
      const endpoint =
        "https://alt-wave-b-project-backend.onrender.com/api/flutter_app/institutions";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/enrollsuccess");
      } else {
        throw new Error("Failed to submit the form");
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" }); // Clear error for the field being edited
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <div className="flex flex-col md:flex-row md:mt-16 p-4 md:p-8">
          <div className="flex-1 mb-6 md:mb-0 md:ml-16">
            <h1 className="text-2xl md:text-6xl text-customBlack font-millik font-normal">
              Enroll your institution
            </h1>
            <p className="text-customEnroll font-Modarat text-lg md:text-xl leading-6 md:leading-8">
              With Tuition, no matter your location in the world, your students
              can easily pay their education fees without hassle.
              <br /> <br />
              Please complete the form to connect with a member of our team.
            </p>
          </div>
          <div className="flex-1 md:mr-16 md:ml-20">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  className={`border rounded w-full md:w-96 py-2 px-3 text-gray-700 border-gray-700 border-opacity-30 ${errors.schoolName ? 'border-red-500' : ''}`}
                  id="schoolName"
                  value={formData.schoolName}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="School name"
                />
                {errors.schoolName && <p className="text-red-500 text-sm mt-1">{errors.schoolName}</p>}
              </div>
              <div className="mb-4">
                <ReactFlagsSelect
                  selected={selected}
                  onSelect={(code) => {
                    setSelected(code);
                    setFormData({ ...formData, countryName: code });
                    setErrors({ ...errors, countryName: "" }); // Clear error when country is selected
                  }}
                  searchable
                  className={`text-gray-700 w-full md:w-96 ${errors.countryName ? 'border-red-500' : ''}`}
                />
                {errors.countryName && <p className="text-red-500 text-sm mt-1">{errors.countryName}</p>}
              </div>
              <div className="mb-4">
                <input
                  className={`p-4 border border-gray-700 border-opacity-30 rounded w-full md:w-96 h-32 ${errors.address ? 'border-red-500' : ''}`}
                  placeholder="Address"
                  type="text"
                  value={formData.address}
                  onChange={handleInputChange}
                  id="address"
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>
              <div className="mb-4">
                <input
                  className={`border rounded w-full md:w-96 py-2 px-3 text-gray-700 border-gray-700 border-opacity-30 ${errors.paymentType ? 'border-red-500' : ''}`}
                  id="paymentType"
                  type="text"
                  value={formData.paymentType}
                  onChange={handleInputChange}
                  placeholder="Payment type"
                />
                {errors.paymentType && <p className="text-red-500 text-sm mt-1">{errors.paymentType}</p>}
              </div>
              <div className="mb-4">
                <input
                  className={`border rounded w-full md:w-96 py-2 px-3 text-gray-700 border-gray-700 border-opacity-30 ${errors.contactEmail ? 'border-red-500' : ''}`}
                  id="contactEmail"
                  type="email"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  placeholder="Contact Email"
                />
                {errors.contactEmail && <p className="text-red-500 text-sm mt-1">{errors.contactEmail}</p>}
              </div>
              <div className="relative inline-block mb-6">
                <button
                  type="submit"
                  className={`border w-full p-4 rounded-lg bg-customBlack text-white font-Modarat ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
