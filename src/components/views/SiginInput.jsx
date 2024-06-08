import { useState } from "react";
import EyeOpen from "../../assets/Icons/eyeOpen.svg";
import EyeClose from "../../assets/Icons/eyeClose.svg";

const SiginInput = () => {
  const [showpassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(!showpassword);
  };
  return (
    <div className="">
      <div className="pb-4">
        <label className="moderat-font">Email</label> <br />
        <input
          type="email"
          placeholder="Enter Email here"
          className="input-style w-[480px] h-[48px] moderat-font"
        />
      </div>

      <div className="">
        <label className="moderat-font">Password</label> <br />
        <input
          type={showpassword ? "text" : "password"}
          name="password"
          // value={state.password}
          placeholder="Enter email here"
          // onChange={handleChange}
          className={`input-style w-[480px] h-[48px] moderat-font`}
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
      </div>
    </div>
  );
};

export default SiginInput;
