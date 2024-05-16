import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { updateEmpAPI } from "../Services/allAPI";

const Update = ({ getEmp }) => {
  const [show, setShow] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState({
    id: getEmp.id,
    userName: getEmp.userName,
    Email: getEmp.Email,
    Status: getEmp.Status,
  });

  useEffect(() => {
    setEmployeeDetails({
      id: getEmp.id,
      userName: getEmp.userName,
      Email: getEmp.Email,
      Status: getEmp.Status,
    });
  }, [getEmp]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleUpdate = () => {
    const updatedDetails = {
      id: employeeDetails.id,
      userName: employeeDetails.userName,
      Email: employeeDetails.Email,
      Status: employeeDetails.Status,
    };
    updateEmpAPI(updatedDetails);
    window.location.href = '/';
    alert("updated successfullly")
    handleClose();
  };
  







  return (
    <>
      <div onClick={handleShow}>
        <i className="fa-solid fa-pen"></i>
      </div>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel className="mt-3 mb-3" controlId="floatingInputCaption" label="Enter UserName">
            <Form.Control
              type="text"
              value={employeeDetails.userName}
              onChange={(e) =>
                setEmployeeDetails({
                  ...employeeDetails,
                  userName: e.target.value,
                })
              }
              placeholder="Enter UserName"
            />
          </FloatingLabel>
          <FloatingLabel className="mt-3 mb-3" controlId="floatingInputCaption" label="Enter Email Id">
            <Form.Control
              type="email"
              value={employeeDetails.Email}
              onChange={(e) =>
                setEmployeeDetails({
                  ...employeeDetails,
                  Email: e.target.value,
                })
              }
              placeholder="Enter Email Id"
            />
          </FloatingLabel>
          <div>
            <label htmlFor="Status" className="form-label mt-2">Status</label>
            <select
              value={employeeDetails.Status}
              onChange={(e) =>
                setEmployeeDetails({
                  ...employeeDetails,
                  Status: e.target.value,
                })
              }
              className="form-select"
              id="Status"
            >
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
          <Button onClick={handleUpdate} variant="primary">
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Update;
