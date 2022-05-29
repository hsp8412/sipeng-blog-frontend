import React from "react";
import { Button, Modal } from "react-bootstrap";

const InvalidLoginCredential = ({ show, setInvalidShow }) => {
  return (
    <div>
      <Modal show={show} onHide={() => setInvalidShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Invalid Credential</Modal.Title>
        </Modal.Header>
        <Modal.Body>Invalid email or password.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setInvalidShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default InvalidLoginCredential;
