import React from "react";
import "../css/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <header>
      <div className="container d-flex flex-column justify-content-around align-items-center flex-md-row">
        <div className="header-content mb-4">
          <h1 className="mb-4">Welcome to Sipeng He's blog!</h1>
          <h3 className="mb-4">Computer Science Student & Developer</h3>
          <Link to="/about">
            <button className="index-btn mb-4">
              More about me <FontAwesomeIcon icon={solid("arrow-right")} />
            </button>
          </Link>
          <div className="icons d-flex justify-content-center gap-2 mt-2">
            <a
              href="https://www.linkedin.com/in/sipeng-he-250654190/"
              target="_blank"
              rel="noopener"
              className="icon-link"
            >
              <FontAwesomeIcon icon={brands("linkedin")} size="2x" />
            </a>
            <a
              href="https://github.com/hsp8412"
              target="_blank"
              rel="noopener"
              className="icon-link"
            >
              <FontAwesomeIcon icon={brands("github-square")} size="2x" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100015661125991"
              target="_blank"
              rel="noopener"
              className="icon-link"
            >
              <FontAwesomeIcon icon={brands("facebook-square")} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/hsp_steven/"
              target="_blank"
              rel="noopener"
              className="icon-link"
            >
              <FontAwesomeIcon icon={brands("instagram-square")} size="2x" />
            </a>
          </div>
        </div>
        <img src="img_2.jpeg" alt="" style={{ width: "400px" }} />
      </div>
    </header>
  );
};

export default Index;
