import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import UserDataPage from "../pages/UserDataPage";
import UserCreate from "../pages/UserCreate";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/users" element={<UserDataPage />} />
        <Route path="/newuser" element={<UserCreate />} />
      </Routes>
    </div>
  );
}
