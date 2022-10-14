import React from "react";
import NavBar from '../NavBar/NavBar';
import imagen from '../../images/videogame.png'
import './about.css';


function About(){
    return (
        <>
        <NavBar />
        <div className="container-about">
        <h1>Henry Videogames</h1>
        <h2>PI - Carmelo Cabezon</h2>
        <div className="foto-div">
            <img src={imagen} alt="imagen videogames"> </img>
        </div>
        </div>
        </>
    )
}

export default About;