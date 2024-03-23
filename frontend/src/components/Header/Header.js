import React from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 sticky-top py-3">
      <a onClick={() => navigate("/")} role="button">
        <img src={logo} alt="logo" width="40px" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse px-2 mx-3" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" onClick={() => navigate("/")} role="button">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => navigate("/")} href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => navigate("/")}
              href="#services"
            >
              Services
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => navigate("/models")}
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
