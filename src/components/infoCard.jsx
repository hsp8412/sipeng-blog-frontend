import React from "react";
import "../css/infoCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  brands,
  regular,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const InfoCard = () => {
  return (
    <div className="card d-flex flex-column">
      <div className="card-body">
        <img src="/avatar.gif" alt="avatar" className="avatar" />
        <h3>Sipeng He</h3>
        <h5>Computer Science Student at the University of Calgary</h5>
        <p>Email: sipeng.he@ucalgary.ca</p>
        <div className="icons d-flex justify-content-center gap-2 mt-2">
          <a href="" className="icon-link">
            <FontAwesomeIcon icon={brands("linkedin")} size="2x" />
          </a>
          <a href="" className="icon-link">
            <FontAwesomeIcon icon={brands("github-square")} size="2x" />
          </a>
          <a href="" className="icon-link">
            <FontAwesomeIcon icon={brands("facebook-square")} size="2x" />
          </a>
          <a href="" className="icon-link">
            <FontAwesomeIcon icon={brands("instagram-square")} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
