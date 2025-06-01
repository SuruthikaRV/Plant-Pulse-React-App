import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar bg="dark" expand="lg" className="custom-navbar">
      <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
        PlantPulse
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/garden-journal" className="nav-link-custom">
            Garden Journal
          </Nav.Link>
          <Nav.Link as={Link} to="/plant-care-guide" className="nav-link-custom">
            Plant Care Guide
          </Nav.Link>
          <Nav.Link as={Link} to="/medicinal-plants" className="nav-link-custom">
            Medicinal Plant Benefits
          </Nav.Link>
          <Nav.Link as={Link} to="/about-us" className="nav-link-custom">
            About Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
