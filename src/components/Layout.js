import React from 'react';
import { Container } from 'react-bootstrap';
import { Laptop } from '../components/Laptop';

export const Layout = (props) => (
<div>
<Container>   
{props.children}
<Laptop />
</Container>
</div>
);