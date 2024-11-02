import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css"; // Import the CSS file for styling

export const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      {/* Navigation Links */}
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/find-people" className="nav-link">
        Find People
      </Link>
      <Link to="/connections" className="nav-link">
        Connections
      </Link>
      <Link to="/user-profile" className="nav-link">
        User Profile
      </Link>
    </div>
  );
};
