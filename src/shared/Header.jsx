import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import { AuthContex } from '../provider/AuthProvider';


const Header = () => {

  const {user , logOut} = useContext(AuthContex)

  const handleLogOut =()=>{
    logOut()
  }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home" className='text-danger font-bold'>IFC</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            
          </Nav>
          <Nav>
            <img className='w-25 me-2 rounded rounded-circle' title={user?.displayName} src={user?.photoURL} alt="" />
            {
              user ?
              <button onClick={handleLogOut} className='btn btn-secondary'>Log Out</button>
              :
              <Link to='/login'>
                <button className='btn btn-secondary'>Login</button>
              </Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;