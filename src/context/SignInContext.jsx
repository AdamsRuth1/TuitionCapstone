import { createContext, useState, useContext } from "react";

export const SignInContext = createContext();

export const useSignInContext = () => {
  return useContext(SignInContext);
};

export const SignInContextProvider = ({ children }) => {
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  return (
    <SignInContext.Provider value={{ signInData, setSignInData }}>
      {children}
    </SignInContext.Provider>
  );
};
