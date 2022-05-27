import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const ProjectsCard = () => {
  return (
    <div className="card mt-5">
      <div className="card-body about-card">
        <h2 className="card-title">My projects</h2>
        <div>
          <h5 className="about-title mt-4">
            1. Workout Day Gym Management System
          </h5>
          <p className="about-text">
            This is a course project from CPSC471 at the University of Calgary.
            I completed it with another two group members. It is designed to be
            a comprehensive system to help a gym chain interact with its
            customers as well as doing internal management.
          </p>
          <p className="about-text">
            Key technologies used: React, Node.js, MongoDB
          </p>
          <p className="about-text">My contribution:</p>
          <ul className="about-text">
            <li>
              E-commerce logic: products display, shopping cart, place orders
            </li>
            <li>
              Display the basic information and fitness data of the customer.
            </li>
            <li>Branch information display for the executive manager.</li>
            <li>Login and register form for customers.</li>
            <li>Part of the mongoose model schemas.</li>
            <li>Part of the express APIs.</li>
            <li>Backend API authentications for customers.</li>
          </ul>
          <p className="about-text">
            Other contributors: Junyi Li, YiHan(Joy) Wang
          </p>
          <div>
            <FontAwesomeIcon icon={solid("arrow-up-right-from-square")} />
            <a
              href="https://github.com/hsp8412/workout-day-gym-management-system"
              className="project-url mx-2"
            >
              https://github.com/hsp8412/workout-day-gym-management-system
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
