import React from "react";
import "./header.css";
import Logo from "./../../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img
          src={Logo} alt="Logo"
          className="header-logo"
      />
      <span className="heading-gradient">RYP</span>
    </div>
  );
};

export default Header;
