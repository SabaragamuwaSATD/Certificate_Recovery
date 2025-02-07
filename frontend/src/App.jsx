import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminProfile from "./pages/Admin/AdminProfile";
import AdminDashboard from "./pages/Admin/AdminDashboard";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
