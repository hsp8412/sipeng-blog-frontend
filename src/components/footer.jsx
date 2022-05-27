import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="d-flex flex-column py-5">
      <hr />
      <div>
        <ul className="d-flex justify-content-center p-0 gap-4 footer-nav">
          <li className="d-inline ">
            <a href="" className="footer-nav-item">
              Home
            </a>
          </li>
          <li className="d-inline">
            <a href="" className="footer-nav-item">
              About
            </a>
          </li>
          <li className="d-inline">
            <a href="" className="footer-nav-item">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="icons d-flex justify-content-center gap-2 mt-2">
        <a href="" className="footer-link">
          <FontAwesomeIcon icon={brands("linkedin")} size="2x" />
        </a>
        <a href="" className="footer-link">
          <FontAwesomeIcon icon={brands("github-square")} size="2x" />
        </a>
        <a href="" className="footer-link">
          <FontAwesomeIcon icon={brands("facebook-square")} size="2x" />
        </a>
        <a href="" className="footer-link">
          <FontAwesomeIcon icon={brands("instagram-square")} size="2x" />
        </a>
      </div>
      <div className="mt-3 footer-copyright">Copyright © 2022 Sipeng He</div>
    </div>
  );
};

export default Footer;
