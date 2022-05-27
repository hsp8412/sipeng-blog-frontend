import React from "react";
import "../css/contact.css";

const ContactInfo = () => {
  return (
    <div className="card">
      <div className="card-body about-card">
        <h2 className="about-title">Contact-info</h2>
        <div className="about-text">
          If you have any questions about me, please email me at{" "}
          <a href="mailto:sipeng.he@ucalgary.ca" className="contact-email">
            sipeng.he@ucalgary.ca
          </a>
          .
          <div>
            You may also find me on{" "}
            <a href="" className="contact-link">
              Linkedin
            </a>{" "}
            or{" "}
            <a href="" className="contact-link">
              Instagram
            </a>
            .
          </div>
          <p>I will reply to your message ASAP.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
