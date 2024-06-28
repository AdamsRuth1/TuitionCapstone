import InstituteInfor from "./InstituteInfor";
import PaymentInformation from "./PaymentInformation";
import TuitionStatus from "./TuitionStatus";
import Dashboard from "../../views/dashboard";
import StudentInfor from "./StudentInfor";
import TransactionSummary from "./TransactionSummary";
import CompletePayment from "./CompletePayment";
import { useState } from "react";
const Tuition = () => {
  const [currentForm, setCurrentForm] = useState(1);
  // const [active, setActive] = useState(1);
  const handleNext = () => {
    setCurrentForm((prevForm) => Math.min(prevForm + 1, 5)); // Ensure it doesn't exceed the number of steps
  };

  const renderForm = () => {
    switch (currentForm) {
      case 1:
        return <InstituteInfor Next={handleNext} />;
      case 2:
        return <PaymentInformation Next={handleNext} />;
      case 3:
        return <StudentInfor Next={handleNext} />;
      case 4:
        return <TransactionSummary Next={handleNext} />;
      case 5:
        return <CompletePayment Next={handleNext} />;
      default:
        return;
    }
  };
  return (
    <Dashboard>
      <div className=" flex justify-between gap-[12.75rem]">
        <div className="w-2/3">{renderForm()}</div>
        <div className="w-1/3">
          <TuitionStatus activeState={currentForm} />
        </div>
      </div>
    </Dashboard>
  );
};

export default Tuition;
