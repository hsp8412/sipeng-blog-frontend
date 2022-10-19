import React from "react";
import "../../css/about.css";

const GreetingCard = () => {
  return (
    <div className="card">
      <div className="card-body about-card">
        <h2 className="about-title">Who am I?</h2>
        <div className="about-text mt-4">
          <p>
            Hi! My name is Sipeng He(何斯鹏). I'm an undergraduate student at
            the university of Calgary, Canada. I'm also working as an intern at
            the IT department of Alberta Health Services.
          </p>
          <p>
            I want to become a developer not only because it is{" "}
            <span className="greeting-highlight">Super Cool</span>, but also for
            my skills and techniques can help people in many ways.
          </p>
          <p>
            If you are interested in my projects, or just want to know more
            about me, please don't hesitate to contact me at:
          </p>
          <div className="d-flex justify-content-center">
            <a
              href="mailto:sipeng.he@ucalgary.ca"
              target="_blank"
              className="d-flex info-email"
            >
              sipeng.he@ucalgary.ca
            </a>
          </div>
          <p className="mt-3">I'm looking forward to your email ^_^</p>
        </div>
      </div>
    </div>
  );
};

export default GreetingCard;
