import React from 'react';
import sademoji from './img/sademoji.jpg';

export const Error = () => (
<div className='error'>
    <h2>Error 404</h2>
    <img class="code" src={sademoji} width='40px' alt='Code'></img>
    <h5>La página solicitada no existe</h5>
</div>
);