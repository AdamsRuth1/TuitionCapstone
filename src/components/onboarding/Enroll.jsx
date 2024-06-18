import Footer from "../views/footer";
import Header from "../views/header";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactFlagsSelect from "react-flags-select";

export default function Enroll() {
<<<<<<< HEAD
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.example.com/countries")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data); // Assuming the API response is an array of country objects
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
=======
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    schoolName: "",
    countryName: "",
    address: "",
    paymentType: "",
    contactEmail: "",
   
  });
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("handleSubmit function called");
    
    try {
      if (!formData.schoolName ||  !formData.countryName || !formData.address || !formData.paymentType || !formData.contactEmail) {
        alert("Please fill in all fields");
        return;
      }

      const endpoint = "https://mole-relevant-salmon.ngrok-free.app/api/institution/institutions";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),  
      });
      console.log("sending data", formData);
      if (response.ok) {
        navigate("/enrollsuccess");
      } else {
        alert("Failed to submit. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit. Please try again later.");
    }
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

>>>>>>> 6abd5a32427aebe06cb2a64e43bcffebbcfdb5bf
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <div className="flex md:mt-16">
<<<<<<< HEAD
          <div className="flex-1  ml-24 ">
            {" "}
=======
          <div className="flex-1 ml-24 ">
>>>>>>> 6abd5a32427aebe06cb2a64e43bcffebbcfdb5bf
            <h1 className="md:text-6xl text-customBlack md:mb-6 font-millik font-normal">
              {" "}
              Enroll your institution
            </h1>
            <p className="text-customEnroll font-Modarat text-xl leading-8">
              With Tuition, no matter your location in the world, your students
              can easily pay their education fees without hassle <br /> <br />
              Please complete the form to connect with a member of our team.
            </p>
          </div>
<<<<<<< HEAD
          <div className="flex-1 mr-80  ml-20 mb-36">
            <div className="mb-6 ml-28 ">
              <input
                className=" border rounded w-96 py-2 px-3 text-gray-700  border-gray-700 border-opacity-30 "
                id="schoolName"
                type="text"
                placeholder="School name"
              />
            </div>
            <div className="mb-6">
              <ReactFlagsSelect
                selected={selected}
                searchable
                onSelect={(code) => setSelected(code)}
                className="ml-28 text-gray-700 w-96 "
              />
            </div>
            <input
              className="p-5 border border-gray-700 border-opacity-30 rounded  w-96 ml-28 h-48 "
              placeholder="Address"
            />
            <input
              className=" border rounded w-96 py-2 px-3 text-gray-700  border-gray-700 ml-28 mt-6 border-opacity-30 "
              id="schoolName"
              type="text"
              placeholder="School name"
            />
            <div className="relative inline-block">
              <select
                className="border ml-28 rounded w-96 py-2 px-3 text-gray-700 border-gray-700 mt-6 border-opacity-30 appearance-none"
                id="paymentType"
              >
                <option value="">Type of payment</option>
                <option value="school1">School 1</option>
                <option value="school2">School 2</option>
                <option value="school3">School 3</option>
                {/* Add more options as needed */}
              </select>
              <div className="absolute  top-8 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="h-6 w-6 text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
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
              </div>
              <button className="border w-96 p-6   mt-8 ml-28 rounded-lg bg-customBlack text-white font-Modarat">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </motion.div>

=======
          <div className="flex-1 mr-80 ml-20 mb-36">
            <form onSubmit={handleSubmit}>
              <div className="mb-6 ml-28">
                <input
                  className="border rounded w-96 py-2 px-3 text-gray-700   border-gray-700 border-opacity-30 "
                  id="schoolName"
                  value={formData.schoolName}
                  onChange={handleInputChange}
                  type="text"
                  
                  placeholder="School name"
                />
              </div>
              <div className="mb-6">
              <ReactFlagsSelect
  selected={selected}
  onSelect={(code) => {
    setSelected(code);
    setFormData({ ...formData, countryName: code }); // Update formData with selected country code
  }}
  searchable
  id="countryName"
  className="ml-28 text-gray-700 w-96"
/>

              </div>
              <input
                className="p-5 border border-gray-700 border-opacity-30 rounded  w-96 ml-28 h-48 "
                placeholder="Address"
                type="text"
                value={formData.address}
                onChange={handleInputChange}
                id="address"
               
              />
              <input
                className="border rounded w-96 py-2 px-3 text-gray-700  border-gray-700 ml-28 mt-6 border-opacity-30 "
                id="paymentType"
                type="text"
                value={formData.paymentType}
                onChange={handleInputChange}
                placeholder="Payment type"
              
              />
               <input
                className="border rounded w-96 py-2 px-3 text-gray-700  border-gray-700 ml-28 mt-6 border-opacity-30 "
                id="contactEmail"
                type="email"
                value={formData.contactEmail}
                onChange={handleInputChange}
                placeholder="contact Email"
              
              />
              <div className="relative inline-block">
                <button
                  type="submit"
                  className="border w-96 p-6 mt-8 ml-28 rounded-lg bg-customBlack text-white font-Modarat"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
>>>>>>> 6abd5a32427aebe06cb2a64e43bcffebbcfdb5bf
      <Footer />
    </>
  );
}
