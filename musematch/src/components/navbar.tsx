import { NavLink } from "react-router-dom";
import React from "react";
import { FaHome, FaUser, FaUsers, FaLink, FaHandshake } from "react-icons/fa"; // Import icons from react-icons
import "./navbar.css";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      {/* Logo or Brand Name */}
      <div className="navbar-brand">
        <NavLink to="/" className="nav-link brand">
          LMCC MUSE MATCH
        </NavLink>
      </div>

      {/* Navigation Links */}
      <div className="navbar-links">
        <NavLink to="/" className="nav-link">
          <FaHome size="1.1em" className="icon" /> Home
        </NavLink>
        <NavLink to="/events" className="nav-link">
          <FaUsers size="1.1em" className="icon" /> Events
        </NavLink>
        <NavLink to="/connections" className="nav-link">
          <FaLink size="1.1em" className="icon" /> Connections
        </NavLink>
          <NavLink to="/login" className="nav-link">
            <FaUser size="1.1em" className="icon" /> Login
          </NavLink>
        <NavLink to="/matching" className="nav-link">
          <FaHandshake size="1.1em" className="icon" /> Matching
        </NavLink>
      </div>
    </nav>
  );
};
