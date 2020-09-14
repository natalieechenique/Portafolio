import React from 'react';
import HP4 from './img/HP4.PNG';
import FW from './img/FW.jpg';
import BQ4 from './img/BQ4.PNG';
import MDL3 from './img/MDL3.PNG';
import HH from './img/HH.JPG';
import code from './img/code.png';
import './css/proyects.css';

export const Proyects = () => (
<div className='main-cont'>

<div className='title'>
    <h2>Proyectos</h2>
    </div>
    <div className='proyects'>

    <div className='proyect'>
    <span className='title-cont'>
    <h5>Ganémosle al virus</h5></span>
    <span className='proyectinf'>
    <h6>App para empresa Hottie Hoo, gamificación e inclusión</h6></span>
    <div className='imgcode'>
    <a href="https://hootiehoo.web.app/"><img class="projectImg" src={HH} width='180px' heigth='130px' alt='Gánemosle al virus'></img></a>
    <a href="https://github.com/natalieechenique/covid-19_hootiehoo/"><img class="code" src={code} width='60px' heigth='100px' alt='Code'></img></a>
    </div>
    </div>
  
    <div className='proyect'>
    <span className='title-cont'>
    <h5>Burger Queen</h5></span>
    <span className='proyectinf'>
    <h6>App de manejo de comandas para restaurantes; meseros y cocina</h6></span>
    <div className='imgcode'>
    <a href="https://burgerqueen-615be.web.app/"><img class="projectImg" src={BQ4} width='180px' heigth='100px' alt='Burger Queen'></img></a>
    <a href="https://github.com/natalieechenique/SCL013-burger-queen/"><img class="code" src={code} width='60px' alt='Code'></img></a>
    </div>
    </div>

    <div className='proyect'>
    <span className='title-cont'>
    <h5>Face Wars</h5></span>
    <span className='proyectinf'>
    <h6>Red social para seguidores de Star Wars</h6></span>
    <div className='imgcode'>
    <a href="https://face-wars-9766e.web.app/#/"><img class="projectImg" src={FW} width='180px' heigth='100px' alt='Face Wars'></img></a>
    <a href="https://github.com/natalieechenique/SCL013-social-network/"><img class="code" src={code} width='60px' alt='Code'></img></a>
    </div>
    </div>

    <div className='proyect'>
    <span className='title-cont'>
    <h5>Harry Potter Beginners</h5></span>
    <span className='proyectinf'>
    <h6>Busca y filtra personajes de Harry Potter</h6></span>
    <div className='imgcode'>
    <a href="https://carlareneedc.github.io/SCL013-data-lovers/src/index.html"><img class="projectImg" src={HP4} width='180px' heigth='180px' alt='HP Beginners'></img></a>
    <a href="https://github.com/natalieechenique/SCL013-data-lovers/"><img class="code" src={code} width='60px' alt='Code'></img></a>
    </div>
    </div>

    <div className='proyect'>
    <span className='title-cont'>
    <h5>Get your MD Links</h5></span>
    <span className='proyectinf'>
    <h6>Librerìa npm-backend, filtra links válidos en archivos .md</h6></span>
    <div className='imgcode'>
    <a href="https://www.npmjs.com/package/get_my_md_links"><img class="projectImg" src={MDL3} width='180px' heigth='200px' alt='MD Links'></img></a>
    <a href="https://github.com/natalieechenique/SCL013-md-links/"><img class="code" src={code} width='60px' alt='Code'></img></a>
    </div>
    </div>

    </div>

    </div>
);