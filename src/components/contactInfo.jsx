import React, { useRef } from "react";
import "../css/contact.css";
import { Container, FloatingLabel, Form } from "react-bootstrap";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const ContactInfo = () => {
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const {
    handleChange,
    handleBlur,
    errors,
    values,
    touched,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      message: "",
    },
    onSubmit: async ({ username, email, message }, { resetForm }) => {
      emailjs
        .send(
          serviceId,
          templateId,
          {
            to_name: "Sipeng He",
            from_name: username,
            message,
            reply_to: email,
          },
          publicKey
        )
        .then(
          function (response) {
            toast.success("Thank you for your message!");
            resetForm();
          },
          function (error) {
            toast.error(error.message);
          }
        );
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(50, "Username must be less than 50 characters")
        .required("Username is required"),
      email: Yup.string()
        .email("Please enter a valid email address")
        .max(128)
        .required("Email is required"),
      message: Yup.string().max(2000).required("Message is required"),
    }),
  });

  return (
    <div className="card mb-4 p-3">
      <div className="card-body text-start ">
        <h2 className="about-title">
          <FontAwesomeIcon icon={solid("envelope")} className="me-3" />
          Send me a message
        </h2>

        <div className="about-text">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              <Form.Text className="text-danger">
                {touched.username && errors.username ? errors.username : null}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <Form.Text className="text-danger">
                {touched.email && errors.email ? errors.email : null}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder=""
                className="message-textarea"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              <Form.Text className="text-danger">
                {touched.message && errors.message ? errors.message : null}
              </Form.Text>
            </Form.Group>
            <button className="send-btn mt-3" type="submit">
              Send
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
