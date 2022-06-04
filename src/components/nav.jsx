import React, { useState } from "react";
import "../css/nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const MyNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const renderMenuIcon = () => {
    if (!showMenu) return <FontAwesomeIcon icon={solid("bars")} />;
    return <FontAwesomeIcon icon={solid("xmark")} />;
  };

  return (
    <nav className="my-nav">
      <a className="nav-logo" href="/about">
        <FontAwesomeIcon icon={solid("earth-asia")} size="2x" />
      </a>

      <ul className={`nav-menu ${showMenu ? "menu-active" : ""}`}>
        <li>
          <a href="/" className="menu-item">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="menu-item">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="menu-item">
            Contact
          </a>
        </li>
      </ul>
      <div className="menu-icon" onClick={toggleShowMenu}>
        {renderMenuIcon()}
      </div>
    </nav>
  );
};

export default MyNav;
