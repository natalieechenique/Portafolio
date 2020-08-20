import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import fondo3 from '../assets/fondo3.jpg';

const Styles = styled.div`
.jumbo {
    background: url(${fondo3}) no-repeat fixed bottom;
    background-size: cover;
    color: black;
    height: 100px;
    position: relative;
    z-index: -2;
}
.overlay {
    background-color: black;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    botton: 0;
    right: 0;
    z.index: -1;
}
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className='jumbo'>
            <div className='overlay'></div>
            <Container>
                {/* <h1>Bienvenido</h1> */}
                {/* <p>Bienvenido</p> */}
            </Container>
        </Jumbo>
    </Styles>
);