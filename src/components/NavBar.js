import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
   background-color: black; 
}

.navbar-brand, .navbar-nav .nav-link {
color: cyan;

&:hover {
    color: white;
  }
 }
`;

export const NavBar = () => (
    <Styles>
        <Navbar expand='lg'>
            <Navbar.Brand href='/'>NE</Navbar.Brand>
            <Navbar.Toggle aría-controls='basic-navbar-nav' />

            <Navbar.Collapse id='Basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/About'>About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/Proyects'>Proyects</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/Contact'>Contact</Nav.Link></Nav.Item><Nav.Item>
                    <Nav.Link href='/Error'></Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)