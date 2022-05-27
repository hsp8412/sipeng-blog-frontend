import React from "react";
import EduCard from "./edu";
import GreetingCard from "./greeting";
import ProjectsCard from "./projects";

const AboutContent = () => {
  return (
    <div className="d-flex flex-column">
      <GreetingCard />
      <EduCard />
      <ProjectsCard />
    </div>
  );
};

export default AboutContent;
