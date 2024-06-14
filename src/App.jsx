import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/landingPage/landingPage";
import EnrollPage from "./components/onboarding/Enroll";
import SignIn from "./components/onboarding/SignIn";
import SignUp from "./components/onboarding/SignUp";
import EnrollSuccess from "./components/onboarding/EnrollSuccess";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/enroll" element={<EnrollPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/enrollsuccess" element={<EnrollSuccess/>}/>
      </Routes>
    </Router>
  );
}

export default App;
