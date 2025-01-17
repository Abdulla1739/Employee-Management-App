import React from 'react'

const Footer = () => {
  return (
<div className="container mt-5 w-100 text-black">
      <div className="d-lg-flex justify-content-between text-black">
        <div style={{ width: "400px" }} className="intro ">
          <h5 className="py-2">
            <i className="fa-solid fa-music me-2"></i>Employee Management
          </h5>
          <p>
            Designed and built with all the love in the world by Luminar team
            with the help of our contributors
          </p>
          <p>Code Licensed Luminar, docs CC by 3.0</p>
          <p>Currently v5.3.2.</p>
        </div>
        <div className="links d-flex flex-column">
          <h5 className="py-2">Links</h5>

        </div>
        <div className="Guides d-flex flex-column text-black">
          <h5 className="py-2">Guides </h5>
          <a
            href="https://react.dev/"
            style={{ textDecoration: "none", color: "black" }}
            target="_blank"
          >
            React JS
          </a>
          <a
            href="https://reactrouter.com/en/main"
            style={{ textDecoration: "none", color: "black" }}
            target="_blank"
          >
            React Routing
          </a>
          <a
            href="https://react-bootstrap.github.io/"
            style={{ textDecoration: "none", color: "black" }}
            target="_blank"
          >
            React Bootstrap
          </a>
        </div>
        <div className="Contact d-flex flex-column">
          <h5 className="py-2">Contact Us</h5>
          <div className="d-flex">
            <input
              type="text"
              placeholder="Email id Please"
              className="form-control"
            />
            <button className="btn btn-info ms-2">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="icons d-flex justify-content-between mt-3">
            <a
              href=""
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
            >
              <i className="fa-solid fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center p-4">
        <p>Copyright © 2024 Media Player. Built with React.</p>
      </div>
    </div>
  );
}

export default Footer