import React from 'react';
import sademoji from './img/sademoji.jpg';

export const Error = () => (
<div>
    <h2>Error 404</h2>
    <h4>La página solicitada no existe</h4><img src={sademoji} alt="Error" width="250px"/>
</div>
);