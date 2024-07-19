import React from 'react';
import Close from "../../../assets/images/close.png"
import Atm from "../../../assets/images/ATM Illustration.png"
const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
            <div className="bg-white p-6 rounded-lg shadow-lg w-2/5">
            <div className='flex justify-end'>
            <button
                    onClick={onClose}
                    className=" bg-customLine text-white  rounded-full p-2"
                >
                    <img src={Close} className='w-6 h-6'/>
                </button>
            </div>
               <div>
               <div className='flex justify-center'>
                <img src={Atm} className='w-[106px]'/>
                
               </div>
               <h6 className='font-millik text-base text-customBlack mt-6 font-normal text-center' >Create New Virtual Card</h6>

               </div>
              
                <p className="text-lg mt-6 text-center font-medium font-Modarat text-[#606569] font-normal mb-4">When you create a virtual card, topping up is instant and directly from your Tuition wallet for seamless transactions</p>
                <button
                   
                    className="bg-[#252E6A] text-white py-[12px] px-[24px] rounded-lg" style={{width:'100%'}}
                >
                    Proceed
                </button>
            </div>
        </div>
    );
};

export default Modal;
