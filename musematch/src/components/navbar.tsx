import { Link } from "react-router-dom";
import React from "react";
import { FaHome, FaUser, FaUsers, FaLink } from "react-icons/fa"; // Import icons from react-icons
import "./Navbar.css";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      {/* Logo or Brand Name */}
      <div className="navbar-brand">
        <Link to="/" className="nav-link brand">
          MyApp
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          <FaHome className="icon" /> Home
        </Link>
        <Link to="/find-people" className="nav-link">
          <FaUsers className="icon" /> Find People
        </Link>
        <Link to="/connections" className="nav-link">
          <FaLink className="icon" /> Connections
        </Link>
        <Link to="/user-profile" className="nav-link">
          <FaUser className="icon" /> User Profile
        </Link>
      </div>
    </nav>
  );
};

