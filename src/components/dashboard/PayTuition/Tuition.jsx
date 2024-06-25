
import InstituteInfor from "./InstituteInfor";
import PaymentInformation from "./PaymentInformation";
import TuitionStatus from "./TuitionStatus";
import Dashboard from "../../views/dashboard";
import { useState } from "react";
const Tuition = () => {
  const [currentForm, setCurrentForm] = useState(1);
  const handleNext = () => {
    setCurrentForm(currentForm + 1);
  };

  const renderForm = () => {
    switch (currentForm) {
      case 1:
        return <InstituteInfor  Next={handleNext}/>;
      case 2:
        return <PaymentInformation Next={handleNext} />;
    }
  };
  return (
    <Dashboard>
      <div className=" flex justify-between gap-[19.75rem]">
        {renderForm()}
        <div>
          <TuitionStatus />
        </div>
      </div>
    </Dashboard>
  );
};

export default Tuition;
