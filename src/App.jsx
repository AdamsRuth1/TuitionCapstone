import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/landingPage/landingPage";
import EnrollPage from "./components/onboarding/Enroll";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/enroll" element={<EnrollPage />} />
      </Routes>
    </Router>
  );
}

export default App;
