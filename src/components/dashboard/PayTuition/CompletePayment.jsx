import TuitionButton from "./TuitionButton";
import TuitionHeader from "./TuitionHeader";
import PaymentMethod from "./PaymentMethod";

const CompletePayment = ({ Next }) => {

  return (
    <div className="w-full ml-[3rem] pt-[4rem] mb-[18rem] ">
      <TuitionHeader
        count="5"
        Header=" Complete Payment"
        Paragraph="Confirm your bank’s transaction limit and choose your preferred payment
        method"
      />
      <PaymentMethod
        Method=" Generate Payment Link"
        description=" Send a link to someone else to pay your fee for you"
      />
      <PaymentMethod
        Method="Tuition Wallet"
        description="Easily pay through your Tuition Wallet"
      />
      <PaymentMethod
        Method="Bank Transfer"
        description=" Send funds directly from your bank account"
      />
      <PaymentMethod
        Method="Debit Card"
        description="Send funds securely to your school using your card"
      />
      <PaymentMethod
        Method="Google Pay"
        description="Make instant payment to your school via Google Pay"
      />
      {/* <div className="w-[436px]"> */}
        <TuitionButton
          back="Back"
          forward="continue"
          Next={Next}
          // className={style}
        />
      {/* </div> */}
    </div>
  );
};

export default CompletePayment;
