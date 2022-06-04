import React from "react";
import "../css/infoCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const InfoCard = () => {
  return (
    <div className="card d-flex flex-column">
      <div className="card-body">
        <img src="/avatar.JPG" alt="avatar" className="avatar" />
        <h3>Sipeng He</h3>
        <h5>Computer Science Student at the University of Calgary</h5>
        <div>
          Email:{" "}
          <a
            href="mailto:sipeng.he@ucalgary.ca"
            target="_blank"
            rel="noopener"
            className="info-email"
          >
            sipeng.he@ucalgary.ca
          </a>{" "}
        </div>
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
    </div>
  );
};

export default InfoCard;
