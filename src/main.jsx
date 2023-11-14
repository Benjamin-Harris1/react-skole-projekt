import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./components/Homepage.jsx";
import Navbar from "./components/Navbar.jsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Homepage />
    <Navbar />
  </React.StrictMode>
);
