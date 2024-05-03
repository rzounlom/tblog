import { Alert as AlertMessage, Button } from "react-bootstrap"; //

import React from "react";

const Alert = ({ variant, message, show, close }) => {
  return (
    <AlertMessage show={show} variant={variant} onClose={close}>
      <AlertMessage.Heading>
        <p>{message}</p>
      </AlertMessage.Heading>
      <div className="d-flex justify-content-end">
        <Button onClick={close} variant={variant}>
          Close
        </Button>
      </div>
    </AlertMessage>
  );
};

export default Alert;
