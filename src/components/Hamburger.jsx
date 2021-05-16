import React from 'react';
import hamburgerIcon from '../assets/img/white-hamburger.png';
//import '../css/NavIcons.scss';

function Hamburger() {
    return (
        <img className="d-block d-md-none" // main-nav-icon"
            src={hamburgerIcon} 
            alt="n/a"
            style={{width: "3rem", height: "3rem"}} //delete
        />
    )
}

export default Hamburger;
