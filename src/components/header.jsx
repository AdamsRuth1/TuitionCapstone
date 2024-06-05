import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <motion.div
          className="bg-gray-900 text-white p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-5">Payment Links</p>
          <div className="flex flex-col">
            <a href="./invoice" className="text-white mb-5">
              Invoices
            </a>
            <a href="./invoice" className="text-white mb-5">
              Capital
            </a>
            <a href="./invoice" className="text-white mb-5">
              Grow
            </a>
            <a href="./invoice" className="text-white mb-5">
              Card Issuing
            </a>
            <a href="./invoice" className="text-white mb-5">
              Faas
            </a>
            <a href="./invoice" className="text-white mb-5">
              Send App
            </a>
            <a href="./invoice" className="text-white mb-5">
              Tuition
            </a>
          </div>
        </motion.div>
        <motion.div
          className="bg-gray-900 text-white p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="mb-5">Blog</p>
          <div className="flex flex-col">
            <a href="./invoice" className="text-white mb-5">
              Integrations
            </a>
            <a href="./invoice" className="text-white mb-5">
              Why you get charged
            </a>
            <a href="./invoice" className="text-white mb-5">
              Cookie settings
            </a>
            <a href="./invoice" className="text-white mb-5">
              Payment Protection Promise
            </a>
          </div>
        </motion.div>
        {/* Add more footer items here */}
      </div>
    </>
  );
}
