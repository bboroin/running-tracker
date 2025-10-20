import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <img src="favicon.ico" alt="로고" />
        <h1>Running Tracker</h1>
      </div>
    </div>
  );
};

export default Header;
