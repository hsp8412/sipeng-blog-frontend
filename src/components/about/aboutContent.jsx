import React from "react";
import TechStack from "./techStack";
import GreetingCard from "./greeting";
import ProjectsCard from "./projects";

const AboutContent = () => {
  return (
    <div className="d-flex flex-column">
      <GreetingCard />
      <TechStack />
      <ProjectsCard />
    </div>
  );
};

export default AboutContent;
