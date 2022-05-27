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
          <li>Java && Java Swing</li>
          <li>Python, C, Haskell</li>
        </ul>
        <h4>Interested in learning in the near future:</h4>
        <ul className="about-text">
          <li>Jest</li>
          <li>C++</li>
          <li>Angular</li>
          <li>Pandas</li>
        </ul>
      </div>
    </div>
  );
};

export default TechStack;
