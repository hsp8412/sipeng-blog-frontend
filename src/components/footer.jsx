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
            <a href="/" className="footer-nav-item">
              Home
            </a>
          </li>
          <li className="d-inline">
            <a href="/about" className="footer-nav-item">
              About
            </a>
          </li>
          <li className="d-inline">
            <a href="/contact" className="footer-nav-item">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="icons d-flex justify-content-center gap-2 mt-2">
        <a
          href="https://www.linkedin.com/in/sipeng-he-250654190/"
          target="_blank"
          className="footer-link"
        >
          <FontAwesomeIcon icon={brands("linkedin")} size="2x" />
        </a>
        <a
          href="https://github.com/hsp8412"
          target="_blank"
          className="footer-link"
        >
          <FontAwesomeIcon icon={brands("github-square")} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100015661125991"
          target="_blank"
          className="footer-link"
        >
          <FontAwesomeIcon icon={brands("facebook-square")} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/hsp_steven/"
          target="_blank"
          className="footer-link"
        >
          <FontAwesomeIcon icon={brands("instagram-square")} size="2x" />
        </a>
      </div>
      <div className="mt-3 footer-copyright">Copyright © 2022 Sipeng He</div>
    </div>
  );
};

export default Footer;
