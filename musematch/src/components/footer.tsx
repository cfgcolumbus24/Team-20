import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Lower Manhattan Project</h3>
        </div>
        <div className="footer-links">
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/about" className="footer-link">
            About Us{" "}
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
          <Link to="/privacy" className="footer-link">
            Privacy Policy
          </Link>
        </div>
        <div className="footer-social">
          <a
            href="https://www.facebook.com/LMCCNYC/"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://x.com/LMCC?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/lmcc_nyc/?hl=en"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Lower Manhattan Project. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
