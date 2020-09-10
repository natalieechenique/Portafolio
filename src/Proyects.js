import React from 'react';
import HP4 from './img/HP4.PNG';
import FW4 from './img/FW4.PNG';
import BQ4 from './img/BQ4.PNG';
import MDL3 from './img/MDL3.PNG';
import HH from './img/HH.JPG';


export const Proyects = () => (
<div>

    <div>
    <h2>Proyectos</h2>
    </div>
    <br></br> 

    <div className='proyects'>

    <div className='proyect'>
    <span className='title-cont'>
    <h4>Ganémosle al virus</h4></span>
    <a href="https://hootiehoo.web.app/"><img class="projectImg" src={HH} width='200px' alt='Gánemosle al virus'></img></a>
    </div>
    <br></br> 

    <div className='proyect'>
    <span className='title-cont'>
    <h4>Get your MD Links</h4></span>
    <a href="https://www.npmjs.com/package/get_my_md_links"><img class="projectImg" src={MDL3} width='200px' alt='MD Links'></img></a>
    </div>
    <br></br> 
   

    <div className='proyect'>
    <span className='title-cont'>
    <h4>Burger Queen</h4></span>
    <a href="https://burgerqueen-615be.web.app/"><img class="projectImg" src={BQ4} width='200px' alt='Burger Queen'></img></a>
    </div>
    <br></br> 

    <div className='proyect'>
    <span className='title-cont'>
    <h4>Face Wars</h4></span>
    <a href="https://face-wars-9766e.web.app/"><img class="projectImg" src={FW4} width='200px' alt='Face Wars'></img></a>
    </div>
    <br></br> 

    <div className='proyect'>
    <span className='title-cont'>
    <h4>Harry Potter Beginners</h4></span>
    <a href="https://carlareneedc.github.io/SCL013-data-lovers/src/index.html"><img class="projectImg" src={HP4} width='200px' alt='HP Beginners'></img></a>
    </div>
    <br></br>
    </div>

</div>
);