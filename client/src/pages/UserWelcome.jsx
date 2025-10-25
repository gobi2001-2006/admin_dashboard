import React from "react";
import Navbar from "../components/Navbar.jsx";

export default function UserWelcome() {
  const role = localStorage.getItem("role");
  return (
    <>
      <Navbar role={role} />
      <div className="user-container">
        <h2>Welcome, User!</h2>
        <p>You do not have access to the admin dashboard.</p>
      </div>
    </>
  );
}
