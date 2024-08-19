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
  const { setSignInData, signInData } = useSignInContext();
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
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`|\\-]).{8,}$/.test(value);

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
    const isFormValid =
      validateEmail(state.email) && validatePassword(state.password);
    setDisabled(!isFormValid);
  }, [state.email, state.password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // console.log("Sending request with data:", signInData);

      const signIn = await axios.post(`${base_URL}auth/login`, signInData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { email, first_name, last_name } = signIn.data.data.user;
      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem("first_name", JSON.stringify(first_name));
      localStorage.setItem("last_name", JSON.stringify(last_name));
      localStorage.setItem("token", JSON.stringify(signIn.data.data.access_token));
      localStorage.setItem("u-id", JSON.stringify(signIn.data.data.user.id));


      if (signIn.status === 200) {
        const data = signIn.data;
        // console.log("Response data:", data);
        navigate("/dashboard/");
      }
    } catch (error) {
      // console.error("Error response:", error.response);
      setShowErrorMessage(error.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div className="max-sm:px-[1rem]">
      <form onSubmit={handleSubmit}>
        <div className="pb-4 ">
          <label className="moderat-font">Email</label> <br />
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            placeholder="Enter Email here"
            className={`input-style max-sm:w-full  w-[81%] h-[48px] ${
              errorMessage.email ? "error-border" : ""
            }`}
          />
          {/* <p className="text-red-600" style={{ fontSize: "14px" }}>
            {errorMessage.email}
          </p> */}
        </div>
        <div className="">
          <label className="moderat-font">Password</label> <br />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={state.password}
            placeholder="Enter Password here"
            onChange={handleChange}
            className={`input-style max-sm:w-full relative w-[81%] h-[48px] ${
              errorMessage.password ? "error-border" : ""
            }`}
          />
          <span
            className="absolute pt-5 -ml-10 cursor-pointer"
            onClick={handlePasswordVisibility}
          >
            {showPassword ? (
              <img src={EyeOpen} alt="eye icon" width={25}/>
            ) : (
              <img src={EyeClose} alt="eye icon" />
            )}
          </span>
          <p className="text-red-600 text-[12px]">{errorMessage.password}</p>
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
