import React from 'react';
import sademoji from './img/sademoji.jpg';

export const Error = () => (
<div className='error'>
    <h2>Error 404</h2>
    <img class="code" src={sademoji} width='35px' alt='Code'></img>
    <p>La página solicitada no existe</p>
</div>
);