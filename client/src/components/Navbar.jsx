import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ role }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h1>{role === "admin" ? "Admin Dashboard" : "Welcome User"}</h1>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </nav>
  );
}
