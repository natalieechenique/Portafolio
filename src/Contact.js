import React from 'react';

import gmail from './img/gmail.png'
import cell from './img/cell.png'
import location from './img/location.png'

import github from './img/github.png'
import linkedin from './img/linkedin.png'
import pdf from './img/pdf.png';
import './css/contact.css';

export const Contact = () => (
<div className='main-cont'>
<div className='title'>
<h2>Contacto</h2>
 </div>
 <div className='contact-cont'>
 <div className='contact'>
 <span className='icon'><img src={gmail} alt="Mail" width='35px'/><p>natalie.echenique.munita@gmail.com</p></span>
 <span className='icon'><img src={cell} alt="Cell" width='37'/><p>+56995525663</p></span>
 <span className='icon'><img src={location} alt="Location" width='37'/><p>Ñuñoa, Santiago</p></span>
</div>
<div className='contact'>
<span className='icon'>
<a href="https://github.com/natalieechenique/"><img src={github} alt="GitHub" width='37px'/><p>natalieechenique</p></a></span>
<span className='icon'>
<a href="https://www.linkedin.com/in/natalie-em/"><img src={linkedin} alt="GitHub" width='37px'/><p>natalie-em</p></a></span>
<span className='icon'><a href="https://drive.google.com/file/d/15JmcpKTew7A-ZjBfscd1--T3wuh22c0v/view" download="Currículum"><img class="projectImg" src={pdf} width='45px' alt="Currículum"></img><h6>Descargar CV</h6></a>
  </span>
  </div>
  </div>
  </div>
);