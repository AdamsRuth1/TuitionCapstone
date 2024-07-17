import TuitionButton from "./TuitionButton";
import TuitionHeader from "./TuitionHeader";
import PaymentMethod from "./PaymentMethod";
import Payment01 from "../../../assets/images/payment01.png";
import card02 from "../../../assets/images/card02.png";
import wallet04 from "../../../assets/images/wallet04.png";
import bank03 from "../../../assets/images/bank03.png";
import Google from "../../../assets/images/Google play logo (1).png";
const CompletePayment = ({ Next }) => {
  const style = "pl-2"
  return (
    <div className="w-full ml-[3rem] pt-[4rem] mb-[18rem] ">
      <TuitionHeader
        count="5"
        Header=" Complete Payment"
        Paragraph="Confirm your bank’s transaction limit and choose your preferred payment
        method"
      />
      <PaymentMethod
        image={Payment01}
        Method=" Generate Payment Link"
        description=" Send a link to someone else to pay your fee for you"
      />
      <PaymentMethod
        image={wallet04}
        Method="Tuition Wallet"
        description="Easily pay through your Tuition Wallet"
      />
      <PaymentMethod
        image={bank03}
        Method="Bank Transfer"
        description=" Send funds directly from your bank account"
      />
      <PaymentMethod
        image={card02}
        Method="Debit Card"
        description="Send funds securely to your school using your card"
      />
      <PaymentMethod
        image={Google}
        className={style}
        Method="Google Pay"
        description="Make instant payment to your school via Google Pay"
      />

      <TuitionButton back="Back" forward="continue" Next={Next} />
    </div>
  );
};

export default CompletePayment;
