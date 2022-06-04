import React from "react";
import "../../css/about.css";

const GreetingCard = () => {
  return (
    <div className="card">
      <div className="card-body about-card">
        <h2 className="about-title">Who am I?</h2>
        <div className="about-text mt-4">
          <p>
            Hi! I'm Sipeng He(何斯鹏), an undergraduate student at the
            University of Calgary. I love Canada because it is such a fascinating country with breath-taking natural sceneries and diverse culture.
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
