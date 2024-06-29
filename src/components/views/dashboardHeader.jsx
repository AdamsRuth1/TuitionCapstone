import { motion } from "framer-motion";
// import { useSignupContext } from "../../context/SignupContext";
import Notification from "../../assets/images/Notification icon.png";
import Profile from "../../assets/images/Profile empty.png";

export default function Payment1() {
  const email = JSON.parse(localStorage.getItem("email"));
  const firstname = JSON.parse(localStorage.getItem("first_name"));
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-end p-2 sticky top-0 bg-white z-10 dashboardheader">
        <button className="flex">
          <img src={Notification} alt="Notification icon" className="mr-10" />
        </button>
        <button className="flex">
          <img src={Profile} alt="Profile icon" className="mr-6" />
        </button>
        <div className="mr-10 text-customBlack font-Modarat">
          <h1 className="text-base">{firstname}</h1>
          <p className="text-customGray text-xs">{email}</p>
        </div>
      </div>
    </motion.div>
  );
}
