import React from "react";
import { Button, Modal } from "react-bootstrap";

const DeleteConfirm = ({ show, handleClose, handleConfirmDelete }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>Confirm Delete</Modal.Header>
      <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="warning" onClick={handleConfirmDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirm;
