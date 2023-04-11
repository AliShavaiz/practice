import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import '../index.css'


const MyNavbar = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand  >Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink className="m-2" to='/'>Home</NavLink>
            <NavLink className="m-2" to='/about'>About</NavLink>
            <NavLink className="m-2" to='/contact'>Contact</NavLink>
          </Nav>
        </Container>
      </Navbar>
     
    </div>
  )
}

export default MyNavbar
