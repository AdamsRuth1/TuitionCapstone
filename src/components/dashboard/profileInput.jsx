import { useState } from 'react';
import { motion } from "framer-motion";
import Footer from "../views/footer";
import Header from "../views/header";
import logo from "../../assets/images/Vector (1).png";

// API endpoint
const API_URL = "https://alt-wave-b-project-backend.onrender.com/api/flutter_app/profile";

export default function ProfileInput() {
    const [formData, setFormData] = useState({
        phone_number: '',
        student_id: '',
        date_of_birth: '',
        additional_information: '', // Added other expected fields
        institution_information: '',
        payment_information: '',
        country_paying_from: '',
        discount_code: '',
        payment_for: '',
        payment_by: '',
    });

    const token = JSON.parse(localStorage.getItem("token")) || '';

    // Handle input changes
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                // Get detailed error response from the server
                const errorData = await response.json();
                console.error('Server returned error:', errorData); // Log the detailed error response
                throw new Error(`Failed to save data: ${errorData.message || 'Unknown error'}`);
            }

            alert('Profile saved successfully');
        } catch (error) {
            console.error('Error saving profile:', error); // Log the error for debugging
            alert('Error saving profile. Please check the console for details.'); // User-friendly message
        }
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <Header />
                <div className="flex flex-col md:flex-row md:mt-10 p-4 md:p-8">
                    <div className="flex-1 md:mr-16 md:ml-20">
                        {/* <img src={logo} alt="Logo" /> */}
                        <h1 className="text-2xl md:text-3xl text-customBlack font-millik font-normal mb-6">
                            My Profile
                        </h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input
                                    className="border rounded w-full md:w-96 py-2 px-3 text-gray-700 border-gray-700 border-opacity-30"
                                    id="phone_number"
                                    value={formData.phone_number}
                                    onChange={handleInputChange}
                                    type="text" // Changed to type "text" for phone number
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    className="border rounded w-full md:w-96 py-2 px-3 text-gray-700 border-gray-700 border-opacity-30"
                                    id="student_id"
                                    value={formData.student_id}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Enter your student ID"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    className="border rounded w-full md:w-96 py-2 px-3 text-gray-700 border-gray-700 border-opacity-30"
                                    id="date_of_birth"
                                    value={formData.date_of_birth}
                                    onChange={handleInputChange}
                                    type="date"
                                    placeholder="Enter your date of birth"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="border w-full p-4 rounded-lg bg-customBlack text-white font-Modarat"
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </motion.div>
            <Footer />
        </>
    );
}
