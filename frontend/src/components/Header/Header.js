import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 sticky-top py-3">
      <a onClick={() => navigate("/")} role="button">
        <img src={logo} alt="logo" width="40px" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNav}
        aria-expanded={isNavOpen ? "true" : "false"}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
        id="navbarNav"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => {
                navigate("/");
                closeNav();
              }}
              role="button"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => {
                navigate("/");
                closeNav();
              }}
              href="#about"
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => {
                navigate("/");
                closeNav();
              }}
              href="#services"
            >
              Services
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => {
                navigate("/models");
                closeNav();
              }}
              role="button"
            >
              Explore Models
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
