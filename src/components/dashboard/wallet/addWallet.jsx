import React, { useState } from 'react';
import AddWallet from './addCardComponent';
import Pop from './popUp'; // Import the Modal component

export default function AddWalletPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="bg-customDash" style={{ marginLeft: "92px" }}>
                <div
                    className="flex bg-customDash py-4 flex-col items-center text-center rounded-lg mb-3.5 bg-white"
                    style={{
                        width: "368px",
                        border: "1px dotted #CCCCCC",
                    }}
                >
                    <button
                        className="hover flex items-center justify-center rounded-full text-white font-bold mb-2"
                        style={{
                            backgroundColor: "#8690D5",
                            width: "40px",
                            height: "40px",
                        }}
                        onClick={handleOpenModal} // Open modal on click
                    >
                        +
                    </button>
                    <span className="font-medium">Create New Card</span>
                </div>
                <div
                    className="rounded-lg bg-white"
                    style={{ border: "1px solid #CCCCCC" }}
                >
                    <div className="flex border-b mb-8 justify-between items-center py-4 mr-4 ml-4 mt-3.5">
                        <h3 className="font-Modarat font-bold text-customBlack text-lg">
                            Manage Cards
                        </h3>
                        <p className="font-Modarat text-base">View all</p>
                    </div>
                    <AddWallet className="mt-19" />
                </div>
            </div>
            <Pop isOpen={isModalOpen} onClose={handleCloseModal} /> {/* Render Modal */}
        </>
    );
}
