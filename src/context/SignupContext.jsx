import { createContext, useState, useContext } from "react";

export const SignupContext = createContext();

export const useSignupContext = () => {
  return useContext(SignupContext)
}

export const SignupContextProvider = ({ children }) => {
  const [signupData, setSignupData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  })

  return (
    <SignupContext.Provider value={{ signupData, setSignupData }}>
      {children}
    </SignupContext.Provider>
  );
};
