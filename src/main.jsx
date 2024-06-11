import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SignupContextProvider } from "./context/SignupContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SignupContextProvider>
      <App />
    </SignupContextProvider>
  </React.StrictMode>
);
