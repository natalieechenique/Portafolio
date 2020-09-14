import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../img/logo.png'
import fondo13 from '../img/fondo13.jpg';

const Styles = styled.div`
.navbar {  
   background: url(${fondo13}) no-repeat fixed bottom;
   background-size:cover;
}



.navbar-brand, .navbar-nav .nav-link {
color: cyan;
&:hover {
    color: pink;
  }
  .Navbar.Toggle aría-controls { 
    color: cyan !important; 
  }
    
} 
.navbar-toggler{
  border-color: rgba(0,255,255,0.3);
}
 .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

 }
`;

export const NavBar = () => (
  <Styles>
    <Navbar expand='lg'>

      <Navbar.Brand href='/'> {<img alt="logo" width='50px' src={logo} />}</Navbar.Brand>

      <Navbar.Toggle aría-controls='navbar-dark .navbar basic-navbar-nav' />

      <Navbar.Collapse id='Basic-navbar-nav'>

        <Nav className='ml-auto'>
          <Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href='/About'>About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href='/Proyects'>Proyects</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href='/Contact'>Contact</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href='/Error'></Nav.Link></Nav.Item>

        </Nav>

      </Navbar.Collapse>

    </Navbar>

  </Styles>
);