import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <NavLink to="/">Hjem</NavLink>
      <NavLink to="/users">Brugere</NavLink>
      <NavLink to="/">Tilføj brugere</NavLink>
    </nav>
  );
}
