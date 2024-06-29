import { motion } from "framer-motion";
import SidebarHeader from "./dashboardHeader";
import DashboardSideBar from "./DashboardSideBar";

const Dashboard = ({ children }) => {
  return (
    <main className="min-h-screen flex">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-row w-full h-full"
      >
        <DashboardSideBar />
        <div className="flex flex-col w-[100%]">
          <SidebarHeader />
          <div className="flex items-center ">
            <section className="w-full bg-[#FAFAFB] items-center flex flex-col pl-[16rem]  ">
              {children}
            </section>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Dashboard;
