import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SignupContextProvider } from "./context/SignupContext.jsx";
import { SignInContextProvider } from "./context/SignInContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SignupContextProvider>
      <SignInContextProvider>
        <App />
      </SignInContextProvider>
    </SignupContextProvider>
  </React.StrictMode>
);
