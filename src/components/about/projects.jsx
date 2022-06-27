import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const ProjectsCard = () => {
  return (
    <div className="card my-5">
      <div className="card-body about-card">
        <h2 className="card-title">My projects</h2>
        <div>
          <h5 className="about-title mt-4">1. Sipeng's Blog (this site!)</h5>
          <p className="about-text">
            This is my personal blog site that displays my posts and information
            about me. Features such as pagination and filtering of posts are
            implemented. An admin system that requires login credentials is
            built so that I can edit, delete and create new posts.
          </p>
          <p className="about-text">
            Key technologies used: React, Node.js, MongoDB
          </p>
          <p className="about-text">Features:</p>
          <ul className="about-text">
            <li>Display posts and other information about me</li>
            <li>Pagination and filtering of posts</li>
            <li>Admin system: login</li>
            <li>Admin system: editing, deleting and create new posts</li>
          </ul>
          <div>
            <FontAwesomeIcon icon={solid("arrow-up-right-from-square")} />
            <a
              href="https://github.com/hsp8412/sipeng-blog-frontend"
              className="project-url mx-2"
            >
              https://github.com/hsp8412/sipeng-blog-frontend
            </a>
          </div>
          <div>
            <FontAwesomeIcon icon={solid("arrow-up-right-from-square")} />
            <a
              href="https://github.com/hsp8412/sipeng-blog-backend"
              className="project-url mx-2"
            >
              https://github.com/hsp8412/sipeng-blog-backend
            </a>
          </div>
        </div>
        <div>
          <h5 className="about-title mt-4">
            2. Workout Day Gym Management System
          </h5>
          <p className="about-text">
            This is our group project for CPSC 471 at the University of Calgary.
            I completed it with other two group members. It is designed to be a
            comprehensive system to help a gym chain interact with its customers
            as well as managing equipments, employees, orders, etc.
          </p>
          <p className="about-text">
            Key technologies used: React, Node.js, MongoDB
          </p>
          <p className="about-text">My contributions:</p>
          <ul className="about-text">
            <li>
              E-commerce features: products display, shopping cart, place
              orders, etc.
            </li>
            <li>Display the fitness data of the customer.</li>
            <li>Branch information display for the executive manager.</li>
            <li>Login and sign up form for customers.</li>
            <li>Some of the mongoose model schemas.</li>
            <li>Some of the express APIs.</li>
            <li>Backend API authentications for customers.</li>
          </ul>
          <p className="about-text">Other contributors: Junyi Li, Yihan Wang</p>
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
        <div>
          <h5 className="about-title mt-4">3. My Shop Ecommerce Site</h5>
          <p className="about-text">
            This is an ecommerce site for customers to browse products and make
            purchase.
          </p>
          <p className="about-text">
            Key technologies used: React, React-Redux, Node.js, MySQL, sequelize
          </p>
          <p className="about-text">Features: </p>
          <ul className="about-text">
            <li>Displaying products.</li>
            <li>Detail of products.</li>
            <li>Product searching bar.</li>
            <li>Customer adding products to the shopping cart.</li>
            <li>Customer modify the items in the shopping cart.</li>
            <li>Login and sign up for customers.</li>
          </ul>
          <div>
            <FontAwesomeIcon icon={solid("arrow-up-right-from-square")} />
            <a
              href="https://github.com/hsp8412/my-shop-frontend"
              className="project-url mx-2"
            >
              https://github.com/hsp8412/my-shop-frontend
            </a>
          </div>
          <div>
            <FontAwesomeIcon icon={solid("arrow-up-right-from-square")} />
            <a
              href="https://github.com/hsp8412/my-shop-backend"
              className="project-url mx-2"
            >
              https://github.com/hsp8412/my-shop-backend
            </a>
          </div>
        </div>
        <div>
          <h5 className="about-title mt-4">4. China Travel Guide</h5>
          <p className="about-text">
            A guide that introduce the "must-dos" when visiting Chinese cities
            of different provinces.
          </p>
          <p className="about-text">
            Key technologies used: Vue, Node.js, MongoDB
          </p>
          <p className="about-text">Features: </p>
          <ul className="about-text">
            <li>Menu of cities and provinces.</li>
            <li>
              Basic info of cities(population, international airport, etc.)
            </li>
            <li>Display must-dos of cities.</li>
          </ul>
          <div>
            <FontAwesomeIcon icon={solid("arrow-up-right-from-square")} />
            <a
              href="https://github.com/hsp8412/China-travel-guide"
              className="project-url mx-2"
            >
              https://github.com/hsp8412/China-travel-guide
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
