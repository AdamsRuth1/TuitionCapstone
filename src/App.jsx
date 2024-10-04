import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { SignupContextProvider } from "./context/SignupContext";
import { CardProvider } from "./context/CardContext"; // Updated import name
import Landing from "./components/landingPage/landingPage";
import EnrollPage from "./components/onboarding/Enroll";
import SignIn from "./components/onboarding/SignIn";
import Testimonial from "./components/landingPage/testimonial";
import SignUp from "./components/onboarding/SignUp";
import Blog from "./components/onboarding/BlogPage";
import EnrollSuccess from "./components/onboarding/EnrollSuccess";
import ContactUs from "./components/onboarding/contactUs/contactus";
import ComingSoon from "./components/landingPage/comingSoon";
import Faq from "./components/landingPage/faq";
import Dashboard from "./components/dashboard/dashbord/DashboardHome";
import Eservice from "./components/E-service/Services";
import Tuition from "./components/dashboard/PayTuition/Tuition";
import Wallet from "./components/dashboard/wallet/Wallets";
import TargetSavings from "./components/dashboard/target-Savings/target";
import Profile from "./components/dashboard/profileInput";
import "./index.css";

function App() {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <GoogleOAuthProvider clientId="1073252734008-7hcm78qd5c72lsfagh081qspat4k1ach.apps.googleusercontent.com">
       <SignupContextProvider>
      <CardProvider> 
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/enroll" element={<EnrollPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/enrollsuccess" element={<EnrollSuccess />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="*" element={<div>Not Found</div>} />

            <Route
              path="/dashboard/"
              element={isLoggedIn ? <Dashboard /> : <SignIn />}
            />
            <Route
              path="/dashboard/tuition"
              element={isLoggedIn ? <Tuition /> : <SignIn />}
            />
            <Route
              path="/dashboard/e-service"
              element={isLoggedIn ? <Eservice /> : <SignIn />}
            />
            <Route
              path="/dashboard/wallet"
              element={isLoggedIn ? <Wallet /> : <SignIn />}
            />
             <Route
              path="/dashboard/target-savings"
              element={isLoggedIn ? <TargetSavings /> : <SignIn />}
            />
              <Route
              path="/dashboard/profile"
              element={isLoggedIn ? <Profile /> : <SignIn />}
            />
          </Routes>
        </Router>
      </CardProvider> {/* Updated provider name */}
    </SignupContextProvider>
    </GoogleOAuthProvider>
   
  );
}

export default App;
