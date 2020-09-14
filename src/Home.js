import React from 'react';
import foto from "./img/foto.png";
import { Laptop } from './components/Laptop';
import './css/home.css';

export const Home = () => (
<div className='main-cont'>

<div className='title'>
    <h1>Natalie Echenique</h1>
 </div>
 <div className="photo-description">
 <div className="photo-subtitle">
    <div className="photo">
    <img src={foto} alt="foto" width="250px"/>
    </div>
    <div className='subtitle'>
    <h3>Front-End Developer / UI</h3>
    </div>
    </div>
    <div className='description'>
    <h4>Soy Natalie, Estudié desarrollo front-end. 
      Inicié mi vida laboral en otro rubro, pero opté dar un giro hacia otra área de mi interés, la tecnología. 
      En este interesante e inmenso mundo puedo tener muchos desafíos, además de mayor estabilidad laboral.
      Me gusta el arte y para mi el código también es crear, a su vez, me interesa mucho el diseño UI.</h4>
    </div>
    </div>
    <Laptop />

</div>
);