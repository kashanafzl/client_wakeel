import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../../Asserts/Img/logo.svg";
import { Icon } from "@iconify/react";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {


  
  const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

    const goToLoginPage = () => {
    navigate('/login');
  };
    const applythecase = () => {
    navigate('/dashboard');
  };

    const gotheaboutuspage = () => {
    navigate('/aboutus');
  };


  return (
    <nav className="navbardiv">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Desktop Navigation */}
      <ul className={`uflex ${menuOpen ? "open" : ""}`}>
        <li><a href="/">Home</a></li>
        <li onClick={gotheaboutuspage}>About Us</li>
        <li><a href="/">Practice Area</a></li>
        <li onClick={applythecase} >Apply To case</li>
      </ul>

      {/* Sign In Button */}
      <div onClick={goToLoginPage}  className="signinbtn">
        <button>Sign in</button>
      </div>

      {/* Mobile Menu Button */}
      <button className="menu-btn" onClick={toggleMenu}>
        <Icon icon={menuOpen ? "basil:cross-outline" : "gg:menu-right"} width="30" height="30" />
      </button>

      {/* Mobile Menu Overlay */}
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </nav>
  );
}
