import React from 'react';
import { Container } from 'react-bootstrap';


export const Layout = (props) => (
<div>
<Container>   
{props.children}

</Container>
</div>
);