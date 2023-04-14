import VerifyOtp from "./pages/VerifyOtp/VerifyOtp";
import Login from "./pages/Login/Login";
import DashBoard from "./pages/DashBoard/DashBoard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./pages/News/News";
import Alumni from "./pages/Alumni/Alumni";

const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verifyotp" element={<VerifyOtp />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/news" element={<News />} />
        <Route path="/alumni" element={<Alumni />} />
      </Routes>
    </Router>
  );
};
export default MyRouter;
