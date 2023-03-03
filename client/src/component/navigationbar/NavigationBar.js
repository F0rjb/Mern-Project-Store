import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
           <Link to="/">home
           </Link>
           <Link to="/product">products
           </Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavigationBar