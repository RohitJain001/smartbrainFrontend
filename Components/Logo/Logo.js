import React from 'react';
import Tilt from './tilt';
import './Logo.css';
import brain from './brain.png'

const Logo=()=>{
    return(
        <div className= 'ma4 mt0 sizes' >
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 200, width:200 }} >
            <div className="Tilt-inner"> <img style={{paddingTop:'40px'}} alt='brain' src={brain}></img> </div>
            </Tilt>
        </div>
    )
}

export default Logo;