import { useState } from "react";
import EyeOpen from "../../assets/Icons/eyeOpen.svg";
import EyeClose from "../../assets/Icons/eyeClose.svg";
import Button from "../Auth/Button";
import axios from "axios";
import { useSignInContext } from "../../context/SignInContext";
import { useNavigate } from "react-router-dom";

const SiginInput = () => {
  const navigate = useNavigate();
  const [showpassword, setShowPassword] = useState(false);
  const { signInData, setSignInData } = useSignInContext();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handlePasswordVisibility = () => {
    setShowPassword(!showpassword);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
    setSignInData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const signIn = await axios.post(
        "https://mole-relevant-salmon.ngrok-free.app/api/auth/signin",
        signInData
      );
      console.log(signIn);
      console.log(signInData);
      navigate("/dashboard");

      
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="pb-4">
        <label className="moderat-font">Email</label> <br />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Enter Email here"
          className={`input-style w-[81%] h-[48px] moderat-font`}
        />
      </div>
      <label className="moderat-font">Password</label> <br />
      <input
        type={showpassword ? "text" : "password"}
        name="password"
        value={state.password}
        placeholder="Enter email here"
        onChange={handleChange}
        className={`input-style w-[81%]   h-[48px] `}
      />
      <span
        className="eyeIcon cursor-pointer"
        onClick={handlePasswordVisibility}
      >
        {showpassword ? (
          <img src={EyeOpen} alt="eye icon" />
        ) : (
          <img src={EyeClose} alt="eye icon" />
        )}
      </span>
      <p className="pt-[1rem] moderat-font text-[#606569] font-normal text-[1rem] leading-[1rem]">
        Forgot password?
      </p>
      <Button text="Sign In" handleSubmit={handleSubmit} />
    </form>
  );
};

export default SiginInput;
