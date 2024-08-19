import Arrow from "../../assets/Icons/Arrrow-down.svg";
import eyeOpen from "../../assets/Icons/eyeOpen.svg";
import eyeClose from "../../assets/Icons/eyeClose.svg";
import Button from "../Auth/Button";
import { Error } from "../../constants/ErrorMessage";
import Nigeria from "../../assets/Icons/Nigeria.svg";
import { useState, useEffect } from "react";
import { useSignupContext } from "../../context/SignupContext";
import axios from "axios";
import { base_URL } from "../../config/api_url";
import Loading from "../Auth/Loading";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

const SignupForm = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const { signupData, setSignupData } = useSignupContext();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showpassword, setShowPassword] = useState(false);
  const [countries, setCountries] = useState([]);
  const [showErrorMessage, setShowErrorMessage] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    // phone_number: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  const validateEmail = (value) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(value);
  const validateName = (value) => /^[a-zA-Z\-']{3,}$/.test(value.trim());

  const validatePassword = (value) =>
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`|\\-]).{8,}$/.test(
      value
    );

  const handleChange = (event) => {
    const { name, value } = event.target;
    const isValid =
      name === "email"
        ? validateEmail(value)
        : name === "first_name" || name === "last_name"
        ? validateName(value)
        : name === "password"
        ? validatePassword(value)
        : true;

    if (name === "phone_number") {
      let formattedPhoneNumber = value;

      if (selectedCountry && !value.startsWith(`+${selectedCountry.code}`)) {
        formattedPhoneNumber = `+${selectedCountry.code}`;
      }

      setState((prevState) => ({ ...prevState, [name]: formattedPhoneNumber }));
      setSignupData((prevState) => ({
        ...prevState,
        [name]: formattedPhoneNumber,
      }));
    } else {
      setState((prevState) => ({ ...prevState, [name]: value }));
      setSignupData((prevState) => ({ ...prevState, [name]: value }));
    }

    if (!isValid) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }

    setErrorMessage((prev) => ({
      ...prev,
      [name]: isValid ? "" : Error[name],
    }));
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showpassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userData = await axios.post(`${base_URL}auth/register`, signupData);

      navigate("/signin");

      // console.log(userData);

      // alert(userData.data.message);
    } catch (error) {
      setShowErrorMessage(
        error.response?.data?.message || "An error occurred."
      );
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="pt-[3rem] max-sm:w-full ">
        <label className="moderat-font">Email</label> <br />
        <input
          type="email"
          name="email"
          value={state.email}
          placeholder="Enter email here"
          onChange={handleChange}
          className={`input-style max-sm:w-full sm:w-full lg:w-[81%] h-[48px] ${
            errorMessage.email ? "error-border" : ""
          }`}
          required
        />
        <div className="lg:flex max-sm:block lg:gap-4 sm:block lg:w-[81%]  py-[1.5rem]">
          <div className="lg:w-[50%]">
            <label className="moderat-font">First Name</label>
            <br />
            <input
              type="text"
              name="first_name"
              value={state.first_name}
              placeholder="Enter First Name here"
              onChange={handleChange}
              className={`input-style h-[48px] max-sm:w-full sm:w-full  ${
                errorMessage.first_name ? "error-border" : ""
              }`}
              required
            />
          </div>
          <div className="max-sm:pt-6 sm:pt-6 lg:pt-0 ">
            <label className="moderat-font"> Last name</label>
            <br />
            <input
              type="text"
              name="last_name"
              value={state.last_name}
              placeholder="Enter your last name"
              onChange={handleChange}
              className={`input-style lg:w-[100%] max-sm:w-full sm:w-full h-[48px] ${
                errorMessage.last_name ? "error-border" : ""
              }`}
              required
            />
          </div>
        </div>
        <div>
          <label className="moderat-font">Password</label> <br />
          <input
            type={showpassword ? "text" : "password"}
            name="password"
            value={state.password}
            placeholder="Choose your password"
            onChange={handleChange}
            className={`input-style relative lg:w-[81%] max-sm:w-full sm:w-full  h-[48px] ${
              errorMessage.password ? "error-border" : ""
            }`}
          />
          <span
            className="cursor-pointer absolute pt-5 -ml-10"
            onClick={handlePasswordVisibility}
          >
            {showpassword ? (
              <img src={eyeOpen} alt="eye icon"  width={25}/>
            ) : (
              <img src={eyeClose} alt="eye icon" />
            )}
          </span>
        </div>
        <p className="text-red-600 lg:w-[28rem]" style={{ fontSize: "14px" }}>
          {errorMessage.password}
        </p>
      
      </div>

      {loading && <Loading text="Loading..." />}
      {!loading && (
        <Button text="Sign Up" handleSubmit={handleSubmit} disable={disabled} />
      )}
      {/* </div> */}

      {showErrorMessage && (
        <ErrorMessage
          errormessage={showErrorMessage}
          onClose={() => setShowErrorMessage("")}
        />
      )}
    </form>
  );
};
export default SignupForm;
