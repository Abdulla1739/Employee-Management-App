import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Add from './Add';







const NavBar = () => {
  return (
    <div className='bg-dark'>
    <Navbar expand="lg" className="container ">
      <Container fluid>
        <Navbar.Brand className='text-light' href="/">Employee Management Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

          </Nav>

            <Button variant="outline-success"><Add/></Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>



    </div>
  )
}

export default NavBar