import { useState } from 'react';
import { motion } from "framer-motion";
import Footer from "../views/footer";
import Header from "../views/dashboardHeader";
import logo from "../../assets/images/Vector (1).png";

// API endpoint
const API_URL = "https://alt-wave-b-project-backend.onrender.com/api/flutter_app/profile";

export default function ProfileInput() {
    const [formData, setFormData] = useState({
        phone_number: '',
        student_id: '',
        date_of_birth: '',
        additional_information: '',
        institution_information: '',
        payment_information: '',
        country_paying_from: '',
        discount_code: '',
        payment_for: '',
        payment_by: '',
    });

    const [statusMessage, setStatusMessage] = useState(''); 
    const [isSaving, setIsSaving] = useState(false); 
    const token = JSON.parse(localStorage.getItem("token")) || '';

    
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
        setStatusMessage(''); // Clear previous status messages
        setIsSaving(true); // Set saving status to true

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
                
                const errorData = await response.json();
                // console.error('Server returned error:', errorData);
                setStatusMessage(` ${errorData.message || 'Unknown error'}`);
                return;
            }

            setStatusMessage('Profile saved successfully');
        } catch (error) {
            // console.error('Error saving profile:', error);
            setStatusMessage('Error saving profile. Please check the console for details.');
        } finally {
            setIsSaving(false); // Set saving status to false after processing
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
                            {statusMessage && (
                                <div className={`mb-4 ${statusMessage.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
                                    {statusMessage}
                                </div>
                            )}
                            <div className="mb-4">
                                <input
                                    className="border rounded w-full md:w-96 py-2 px-3 text-gray-700 border-gray-700 border-opacity-30"
                                    id="phone_number"
                                    value={formData.phone_number}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Number must be in the format +234 123 456 7890"
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
                                className={`border w-full md:w-96 p-4 rounded-lg ${isSaving ? 'bg-gray-500 cursor-not-allowed' : 'bg-customBlack'} text-white font-Modarat`}
                                disabled={isSaving}
                            >
                                {isSaving ? 'Saving...' : 'Save'}
                            </button>
                        </form>
                    </div>
                </div>
            </motion.div>
            <Footer />
        </>
    );
}
