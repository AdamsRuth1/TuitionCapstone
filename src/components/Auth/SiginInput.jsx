import { useState, useEffect } from "react";
import EyeOpen from "../../assets/Icons/eyeOpen.svg";
import EyeClose from "../../assets/Icons/eyeClose.svg";
import Button from "../Auth/Button";
import { Error } from "../../constants/ErrorMessage";
import axios from "axios";
import Loading from "../Auth/Loading";
import { useSignInContext } from "../../context/SignInContext";
import { base_URL } from "../../config/api_url";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

const SignInInput = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const { setSignInData } = useSignInContext();
  const [showErrorMessage, setShowErrorMessage] = useState("");

  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (value) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(value);

  const validatePassword = (value) =>
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[a-zA-Z._\=\:\*\&\^\%\$\@\#\/-\w]{8,}$/.test(
      value
    );

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setSignInData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    const isValid =
      name === "email"
        ? validateEmail(value)
        : name === "password"
        ? validatePassword(value)
        : true;

    setErrorMessage((prev) => ({
      ...prev,
      [name]: isValid ? "" : Error[name],
    }));
  };

  // Use useEffect to validate the form when the state changes
  useEffect(() => {
    const isFormValid = validateEmail(state.email) && validatePassword(state.password);
    setDisabled(!isFormValid);
  }, [state.email, state.password]); // Only run the effect when email or password changes

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userSignIn = new URLSearchParams();
      userSignIn.append("username", state.email);
      userSignIn.append("password", state.password);

      const signIn = await axios.post(`${base_URL}auth/login`, userSignIn, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (signIn.status === 200) {
        const data = signIn.data;
        navigate("/dashboard/");
        localStorage.setItem("token", data.access_token);
      }
    } catch (error) {
      setShowErrorMessage(error.response.data.detail);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="pb-4 max-sm:px-[1rem]">
          <label className="moderat-font">Email</label> <br />
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            placeholder="Enter Email here"
            className={`input-style max-sm:w-full  w-[81%] h-[48px] ${errorMessage.email ? "error-border" : ""}`}
          />
          {/* <p className="text-red-600" style={{ fontSize: "14px" }}>
            {errorMessage.email}
          </p> */}
        </div>
        <div className="max-sm:px-[1rem]">
        <label className="moderat-font">Password</label> <br />
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={state.password}
          placeholder="Enter Password here"
          onChange={handleChange}
          className={`input-style max-sm:w-full relative w-[81%] h-[48px] ${errorMessage.password ? "error-border" : ""}`}
        />
        <span className="absolute pt-5 -ml-10 cursor-pointer" onClick={handlePasswordVisibility}>
          {showPassword ? <img src={EyeOpen} alt="eye icon" /> : <img src={EyeClose} alt="eye icon" />}
        </span>
        <p className="text-red-600 text-[12px]" >
          {errorMessage.password}
        </p>
        </div>
        
        {/* <p className="pt-[1rem] moderat-font text-[#606569] font-normal text-[1rem] leading-[1rem]">
          Forgot password?
        </p> */}
        <div>
          {loading && <Loading text="Loading..." />}
          {!loading && <Button text="Sign In" disable={disabled} />}
        </div>
      </form>

      {showErrorMessage && (
        <ErrorMessage
          errormessage={showErrorMessage}
          onClose={() => setShowErrorMessage("")}
        />
      )}
    </div>
  );
};

export default SignInInput;
