import Dashboard from "../../views/dashboard";
import TuitionHeader from "../PayTuition/TuitionHeader";
import PaymentStatus from "../Pay E-Service/paymentStatus";

const Wallets = () => {
  return (
    <Dashboard>
  <div className="flex justify-between ">
    <div className="w-full pt-[4rem] mr-32">
      <TuitionHeader
        count={1}
        Header="E-Service Information"
        Paragraph="Select E-service platform you want to pay for"
      />
    </div>
    <div className="ml-auto">
      <PaymentStatus activeState={1} />
    </div>
  </div>
</Dashboard>

  );
};

export default Wallets;
