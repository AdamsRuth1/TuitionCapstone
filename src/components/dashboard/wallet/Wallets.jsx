import Dashboard from "../../views/dashboard";
import TuitionHeader from "../PayTuition/TuitionHeader";
import TuitionStatus from "../PayTuition/TuitionStatus";
import Card from "./cardComponent";
import History from "./history";
const Wallets = () => {
  return (
    <Dashboard className="flex">
      <Card />
    </Dashboard>
  );
};

export default Wallets;
