import React, { useEffect, useState } from "react";
import { getEmpAPI, removeEmpAPI, updateEmpAPI } from "../Services/allAPI";
import Update from "./Update";



const Service = () => {
  const [getEmp, setgetEmp] = useState([]);

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = async () => {
    try {
      const result = await getEmpAPI();
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        setgetEmp(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(getEmp);

  const handleUpdate = async (employeeId, updatedData) => {
    try {
      const result = await updateEmpAPI(employeeId, updatedData);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (employeeId) => {
    try {
      const result = await removeEmpAPI(employeeId);
      console.log(result);
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container container-fluid my-5">
        <h1 className="my-5 text-center">Employee Dashboard</h1>
        <table className="table shadow text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {getEmp.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.userName}</td>
                <td>{employee.Email}</td>
                <td>{employee.Status}</td>
                <td>
                
                  <button

                    className="btn"
                  >

                    <Update getEmp={employee}/>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="btn"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Service;
