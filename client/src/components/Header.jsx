import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="left"></div>
      <div className="right">
        <Link to="/login"></Link>
      </div>
    </header>
  );
};

export default Header;
