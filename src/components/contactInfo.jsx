import React from "react";
import "../css/contact.css";
import { Container } from "react-bootstrap";

const ContactInfo = () => {
  return (
    <div className="card mb-4">
      <div className="card-body about-card">
        <h2 className="about-title">Contact-info</h2>
        <div className="about-text">
          If you have any questions about me, please email me at{" "}
          <a
            href="mailto:sipeng.he@ucalgary.ca"
            target="_blank"
            className="contact-email"
          >
            sipeng.he@ucalgary.ca
          </a>
          .
          <div>
            You may also find me on{" "}
            <a
              href="https://www.linkedin.com/in/sipeng-he-250654190/"
              target="_blank"
              className="contact-link"
            >
              Linkedin
            </a>{" "}
            or{" "}
            <a
              href="https://www.instagram.com/hsp_steven/"
              target="_blank"
              className="contact-link"
            >
              Instagram
            </a>
            .
          </div>
          <p>I will reply to your message ASAP.</p>
        </div>
        <Container className="d-flex justify-content-center">
          <img
            src="/contact-img.jpeg"
            alt="contact-img"
            className="contact-img"
          />
        </Container>
      </div>
    </div>
  );
};

export default ContactInfo;
