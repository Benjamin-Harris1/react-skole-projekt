import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import UserDataPage from "../pages/UserDataPage";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/users" element={<UserDataPage />} />
      </Routes>
    </div>
  );
}
