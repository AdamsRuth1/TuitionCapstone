import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignupContextProvider } from "./context/SignupContext";
import Landing from "./components/landingPage/landingPage";
import EnrollPage from "./components/onboarding/Enroll";
import SignIn from "./components/onboarding/SignIn";
import SignUp from "./components/onboarding/SignUp";
import Blog from "./components/onboarding/BlogPage";
import EnrollSuccess from "./components/onboarding/EnrollSuccess";
import ContactUs from "./components/onboarding/contactUs/contactus";
import Faq from "./components/landingPage/faq";
import Dashboard from "./components/dashboard/DashboardHome";
import Eservice from "./components/E-service/Services";
import Tuition from "./components/dashboard/PayTuition/Tuition";
import Wallet from "./components/dashboard/Wallets";
import "./index.css";

function App() {
  return (
    <SignupContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/enroll" element={<EnrollPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/enrollsuccess" element={<EnrollSuccess />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={"Not Found"} />
          <Route path="/dashboard/Tuition" element={<Tuition />} />
          <Route path="/dashboard/E-service" element={<Eservice />} />

          <Route path="/dashboard/wallet" element={<Wallet />} />
        </Routes>
      </Router>
    </SignupContextProvider>
  );
}

export default App;
