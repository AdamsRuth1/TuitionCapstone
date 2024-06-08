import { Link } from "react-router-dom";

const SignInFooter = ({ text, navigate, to, footerText, className }) => {
  return (
    <>
      <div className="pt-3 text-center " style={{ paddingBottom: "1.9rem" }}>
        <p className="  font-normal text-[1rem] leading-[1rem] text-[#606569] ">
          {text}
          <Link
            to={to}
            style={{
              color: "#0A0E27",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            {navigate}
          </Link>
        </p>
      </div>
      <div
        style={{
          width: "29rem",
          height: "4.5rem",
          fontWeight: "400",
          fontSize: "0.875rem",
          lineHeight: "1.5rem",
          color: "#A1A4A8",
        }}
        className="text-center w-[29rem] h-[4.5rem] font-normal text-[0.875rem] leading-[1.5rem] text-[#A1A4A8]"
      >
        <p className={`pb-5 ${className}`}>
          By clicking “{footerText}”, I acknowledge that I have read and do
          hereby accept the terms and conditions in the Flutterwave's
          <span style={{ textDecoration: "underline" }}>Term’s of Use</span>
          and
          <span style={{ textDecoration: "underline" }}>Privacy Policy</span>
        </p>
      </div>
    </>
  );
};

export default SignInFooter;
