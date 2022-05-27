import React, { useEffect, useState } from "react";
import greetingText from "../text/greetingText.md";
import ReactMarkdown from "react-markdown";
import "../../css/about.css";

const GreetingCard = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(greetingText)
      .then((response) => response.text())
      .then((text) => {
        setText(text);
      });
  }, []);

  return (
    <div className="card">
      <div className="card-body about-card">
        {/*<ReactMarkdown>{text}</ReactMarkdown>*/}
        <h2 className="about-title">Who am I?</h2>
        <div className="about-text mt-4">
          <p>
            Hi! I'm Sipeng He(何斯鹏), an undergraduate student at the
            University of Calgary.
          </p>
          <p>
            Growing up in Shenzhen, China, I moved to Calgary a year ago and
            totally fell in love with this city. Canada is such a fascinating
            country with the breath-taking natural sceneries and the diverse
            culture.
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
