import React from 'react';
import nat from "./img/nat.png";
import wordcloud from "./img/wordcloud.png";
import js from "./img/js.png";
import html from "./img/html.png";
import git from "./img/git.png";
import css from "./img/css.png";
import ps from "./img/ps.png";
import react2 from "./img/react2.png";
import gh from "./img/gh.png";
import trello from "./img/trello.png";
import figma from "./img/figma.png";
import maze from "./img/maze.png";
import firebase from "./img/firebase.png";
import nodejs from "./img/nodejs.png";
import roller from "./img/roller.png";
import tkd from "./img/tkd.png";
import swimming from "./img/swimming.png";
import yogi from "./img/yogi.png";
import paint from "./img/paint.png";
import music from "./img/music.png";
import nature from "./img/nature.png";
import dogi from "./img/dogi.png";
import space from "./img/space.png";
import joy from "./img/joy.png";
import './css/about.css';


export const About= () => (
<div className='main-cont'>

<div className='title'>
    <h2>Sobre mí</h2>
    </div>
    <div className='aboutme'>
    <img src={nat} alt="foto" width="100px"/>
    <p class='description'>Siempre me gustó la tecnología, el descubrir nuevas cosas y ponerlas en práctica. 
    Mis primeras experiencias laborales fueron en el área de la salud y Yoga, dónde cultivé la relación con clientes.
    Luego tuve una experiencia de 2 años en empresa de tecnología, realizando edición de contenidos para plataforma de educación online, Pleno Internacional (Santillana), después revisión de digitación, además de trabajo administrativo.
    En este lugar conocí este ambiente y me interesé en él.
    Luego, en 2020 estudié Front-end developer en el bootcamp de Laboratoria, donde nos potenciaron en el trabajo ágil, el autoaprendizaje, trabajo en equipo, entre otras cualidades.
    Actualmente complemento mis horas libres trabajando en emprendimiento personal <a href="https://www.instagram.com/orbeyogawheel/">@orbeyogawheel</a> en próxima página web 'e-commerce', venta y guía en uso del producto.
    </p>
    </div>

    <div className='aboutme'>
    <h5 className='title2'>Habilidades</h5>
    <span className='cloud'><img src={wordcloud} alt="wordcloud" width="300px"/></span>
   </div>

    <div className='aboutme'>
    <h5 className='title2'>Conocimientos</h5>
    <div className='skills'>
    <span className='skill'><img src={html} alt="foto" width="33px"/></span>
    <span className='skill'><img src={js} alt="foto" width="33px"/></span>
    <span className='skill'><img src={react2} alt="foto" width="40px"/></span>
    <span className='skill'><img src={css} alt="foto" width="40px"/></span>
    </div>
    <div className='skills'>
    <span className='skill'><img src={nodejs} alt="foto" width="40px"/></span>
    <span className='skill'><img src={git} alt="foto" width="40px"/></span>
    <span className='skill'><img src={gh} alt="foto" width="40px"/></span>
    <span className='skill'><img src={firebase} alt="foto" width="35px"/></span>
    </div>
    <div className='skills'>
    <span className='skill'><img src={ps} alt="foto" width="32px"/></span>
    <span className='skill'><img src={figma} alt="foto" width="32px"/></span>
    <span className='skill'><img src={maze} alt="foto" width="36px"/></span>
    <span className='skill'><img src={trello} alt="foto" width="30px"/></span>
    </div>
    </div>

   <div className='aboutme'>

    <h5 className='title2'>Hobbies e intereses</h5>
    <div className='hobbies'>
  
    <span className='hobby'><img src={roller} alt="foto" width="32px"/></span>
    <span className='hobby'><img src={tkd} alt="foto" width="35px"/></span>
    <span className='hobby'><img src={swimming} alt="foto" width="32px"/></span>
    <span className='hobby'><img src={yogi} alt="foto" width="32px"/></span>
    </div>
    <div className='hobbies'>
    <span className='hobby'><img src={paint} alt="foto" width="38px"/></span>
    <span className='hobby'><img src={music} alt="foto" width="32px"/></span>
    </div>
    <div className='hobbies'>
    <span className='hobby'><img src={nature} alt="foto" width="34px"/></span>
    <span className='hobby'><img src={dogi} alt="foto" width="28px"/></span>
    </div>
    <div className='hobbies'>
    <span className='hobby'><img src={space} alt="foto" width="40px"/></span>
    <span className='hobby'><img src={joy} alt="foto" width="40px"/></span>
    
    </div>
    </div>

    </div>
  
);

