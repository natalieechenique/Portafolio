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
    .lo
        margin-left:20px;
    }
} 
 }
`;

export const NavBar = () => (
    <Styles>
        <Navbar expand='lg'>
            
            <Navbar.Brand href='/'> {<img alt="logo" width='50px' src = {logo} />}</Navbar.Brand>

            <Navbar.Toggle aría-controls='navbar-dark .navbar basic-navbar-nav' />
           
            <Navbar.Collapse id='Basic-navbar-nav'>

                <Nav className='ml-auto'>
                    <Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/Skills'>About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/Proyects'>Proyects</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/Contact'>Contact</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/Error'></Nav.Link></Nav.Item>

                </Nav>

            </Navbar.Collapse>

        </Navbar>

    </Styles>
);