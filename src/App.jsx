import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/dashbord/DashboardHome";
import Faq from "./components/landingPage/faq";
import Landing from "./components/landingPage/landingPage";
import Blog from "./components/onboarding/BlogPage";
import EnrollPage from "./components/onboarding/Enroll";
import EnrollSuccess from "./components/onboarding/EnrollSuccess";
import SignIn from "./components/onboarding/SignIn";
import SignUp from "./components/onboarding/SignUp";
import ContactUs from "./components/onboarding/contactUs/contactus";
import { SignupContextProvider } from "./context/SignupContext";
// import PayTuition from "./components/dashboard/PayTuition/InstituteInfor";
import Tuition from "./components/dashboard/PayTuition/Tuition";
// import PaymentInformation from "./components/dashboard/PayTuition/PaymentInformation";
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
          {/* <Route path="/dashboard/Tuition/payment" element={<PaymentInformation />} /> */}
          <Route path="/dashboard/wallet" element={<Wallet />} />
        </Routes>
      </Router>
    </SignupContextProvider>
  );
}

export default App;
