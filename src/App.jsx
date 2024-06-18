import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/landingPage/landingPage";
import EnrollPage from "./components/onboarding/Enroll";
import SignIn from "./components/onboarding/SignIn";
import SignUp from "./components/onboarding/SignUp";
import Blog from "./components/Blog/BlogPage";
import EnrollSuccess from "./components/onboarding/EnrollSuccess";
import ContactUs from "./components/onboarding/contactUs/contactus";
import Faq from "./components/landingPage/faq";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/enroll" element={<EnrollPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/enrollsuccess" element={<EnrollSuccess/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/faq" element={<Faq/>}/>
      </Routes>
    </Router>
  );
}

export default App;
