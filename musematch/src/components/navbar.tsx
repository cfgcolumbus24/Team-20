import { Link } from "react-router-dom";
import React from "react";
import { FaHome, FaUser, FaUsers, FaLink, FaHandshake } from "react-icons/fa"; // Import icons from react-icons
import "./navbar.css";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      {/* Logo or Brand Name */}
      <div className="navbar-brand">
        <Link to="/" className="nav-link brand">
          LMCC MUSE MATCH
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          <FaHome size="1.1em" className="icon" /> Home
        </Link>
        <Link to="/events" className="nav-link">
          <FaUsers size="1.1em" className="icon" /> Events
        </Link>
        <Link to="/connections" className="nav-link">
          <FaLink size="1.1em" className="icon" /> Connections
        </Link>
        <Link to="/user-profile" className="nav-link">
          <FaUser size="1.1em" className="icon" /> User Profile
        </Link>
        <Link to="/matching" className="nav-link">
          <FaHandshake size="1.1em" className="icon" /> Matching
        </Link>
      </div>
    </nav>
  );
};
