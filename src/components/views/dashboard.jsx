import { motion } from "framer-motion";
import DashboardSideBar from "./DashboardSideBar";

export default function Dashboard({ children }) {
  return (
    <div>
     
      <DashboardSideBar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <main className="flex flex-col items-center bg-customDashBoard h-full">
          {children}
        </main>
      </motion.div>
    </div>
  );
}
