import "./Contact.css";

import { Button, Form } from "react-bootstrap";

import Alert from "../common/alerts/Alert";
import { useState } from "react";

const Contact = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); // showSuccessAlert is a boolean state variable to show the success alert
  const [showErrorAlert, setShowErrorAlert] = useState(false); // showErrorAlert is a boolean state variable to show the error alert
  const [formData, setFormData] = useState({
    // formData is an object with email, subject, and message properties
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    // handleChange function updates the formData object when the user types in the input fields
    const { name, value } = e.target; // name and value are the properties of the input field
    setFormData((prevFormData) => ({
      ...prevFormData, // spread operator to copy the previous formData object
      [name]: value, // update the value of the input field
    }));

    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (!formData.email || !formData.subject || !formData.message) {
      setShowErrorAlert(true);
      return;
    }

    setFormData({
      email: "",
      subject: "",
      message: "",
    }); // clear the form after submission
    console.log("Email Successfully Sent with values", formData);
    setShowSuccessAlert(true); // show the success alert
  };

  return (
    <div className="contact">
      <Alert // Alert component to show the success alerts
        variant="success"
        show={showSuccessAlert}
        message="Email Successfully Sent"
        close={() => setShowSuccessAlert(false)}
      />

      <Alert // Alert component to show the error alerts
        variant="danger"
        show={showErrorAlert}
        message="Please fill out all fields"
        close={() => setShowErrorAlert(false)}
      />
      <h1>Contact</h1>
      <div className="contact-form">
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              value={formData.email}
              type="email"
              placeholder="name@example.com"
              size="lg"
              required
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              name="subject"
              value={formData.subject}
              type="text"
              placeholder="Job opportunity for..."
              size="lg"
              required
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              name="message"
              value={formData.message}
              as="textarea"
              rows={5}
              placeholder="I'm interested in..."
              size="lg"
              required
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
