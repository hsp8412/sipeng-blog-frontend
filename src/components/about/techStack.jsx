import React from "react";

const TechStack = () => {
  return (
    <div className="card mt-5">
      <div className="card-body about-card">
        <h2 className="about-title">My Technical skills</h2>
        <ul className="about-text mt-4">
          <li>HTML && CSS && JavaScript</li>
          <li>React, React Redux, Vue</li>
          <li>Bootstrap, React-Bootstrap</li>
          <li>Node.js, Express, JWT</li>
          <li>C#, ASP.NET</li>
          <li>MongoDB, MySQL, sequelize</li>
          <li>Java, Spring Boot, Hibernate, Swing</li>
          <li>Python, C</li>
          <li>Haskell, Prolog</li>
        </ul>
        <h4>Interested in exploring in the near future:</h4>
        <ul className="about-text">
          <li>C++</li>
          <li>Angular</li>
        </ul>
      </div>
    </div>
  );
};

export default TechStack;
