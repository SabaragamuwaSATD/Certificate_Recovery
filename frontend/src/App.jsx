import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminProfile from "./pages/Admin/AdminProfile";
import CertificationDetails from "./pages/Admin/CertificationDetails";
import StudentProfile from "./pages/Admin/StudentProfile";
// import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route
            path="/admin/certification"
            element={<CertificationDetails />}
          />
          <Route path="/admin/studentProfile" element={<StudentProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
