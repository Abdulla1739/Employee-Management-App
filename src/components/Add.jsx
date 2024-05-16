import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { addEmployeeAPI } from "../Services/allAPI";

const Add = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [employeeDetails, setemployeeDetails] = useState({
    userName: "",
    Email: "",
    Status: "",
  });

  const handleUpload = async () => {
    console.log("inside handle upload function");
    const { userName, Email, Status } = employeeDetails;
  
    if (userName && Email && Status) {
      console.log("api call");
      try {
        const result = await addEmployeeAPI(employeeDetails);
        console.log(result);
  
        if (result.status >= 200 && result.status < 300) {
          console.log(result.data);
          alert(`Employee Details of ${result.data.userName} is successfully uploaded`);
          setemployeeDetails(""); 
          handleClose(); 
          window.location.href = '/'
        } else {
          alert(`${result.response.data}`);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Please fill the form completely");
    }
  };

  return (
    <>
      <div onClick={handleShow}>Add</div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            className="mt-3 mb-3"
            controlId="floatingInputCaption"
            label="Enter UserName"
          >
            <Form.Control
              type="text"
              onChange={(e) =>
                setemployeeDetails({
                  ...employeeDetails,
                  userName: e.target.value,
                })
              }
              placeholder="Enter UserName"
            />
          </FloatingLabel>
          <FloatingLabel
            className="mt-3 mb-3"
            controlId="floatingInputCaption"
            label="Enter Email Id"
          >
            <Form.Control type="email"               onChange={(e) =>
                setemployeeDetails({
                  ...employeeDetails,
                  Email: e.target.value,
                })
              } placeholder="Enter Email Id" />
          </FloatingLabel>
          <div>
            <label htmlFor="Status" className="form-label mt-2">
              Status
            </label>
            <select multiple="" onChange={(e) =>
                setemployeeDetails({
                  ...employeeDetails,
                  Status: e.target.value,
                })
              }

             className="form-select" id="Status">
              <option value="">Choose a status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>

      </Modal>
    </>
  );
};

export default Add;
