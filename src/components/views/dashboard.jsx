import { motion } from "framer-motion";
import SidebarHeader from "./dashboardHeader";
import DashboardSideBar from "./DashboardSideBar";
// import Sidebar from "./sidebar";

export default function Dashboard({ children }) {
  return (
    <div>
      <SidebarHeader />
      {/* <Sidebar /> */}
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
