import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase.init';
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth)
  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <header className='header'>
      <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/' >React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/services'>Services</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              {
                user ?
                  <button onClick={handleSignOut}>Sign Out</button>
                  :
                  <Nav.Link eventKey={2} as={Link} to="/login">
                    Log In
                  </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </header>
  );
};

export default Header;