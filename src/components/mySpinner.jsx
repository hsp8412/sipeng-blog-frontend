import React from "react";
import { Spinner } from "react-bootstrap";

const MySpinner = () => {
  return (
    <div>
      <Spinner className="mt-4" animation="border" variant="primary" />
    </div>
  );
};

export default MySpinner;
