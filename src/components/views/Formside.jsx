import FormImage from "../../assets/images/SignIn-image.svg";

const Formside = () => {
  return (
    <section className=" ">
      <div className="flex justify-center" style={{ paddingTop: "7rem" }}>
        <img src={FormImage} alt="Image of a book" width={352} height={320} />
      </div>
      <div className="millik-font pb-[10.85rem] flex justify-center">
        <h2 className="text-center w-[256px] h-[144px] pt-[2.6rem] font-normal text-[2.375rem] leading-[3rem] ">
          Pay Local. <br /> Study Global with
          <span style={{ color: "#EB5757" }}> Tuition</span>
        </h2>
      </div>
      <div className="text-center w-[36rem] h-[4.5rem] font-normal text-[0.875rem] leading-[1.5rem] text-[#A1A4A8]">
        <p className="pb-5">
          Tuition is powered by Swap, a product of Flutterwave Technology
          Solutions Limited - Licensed by the Central Bank of Nigeria in
          partnership with Kadavra BDC and Wema Bank
        </p>
      </div>
    </section>
  );
};

export default Formside;
