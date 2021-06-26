import React from 'react';
import logoIcon from '../assets/img/gameStore2.png';
import '../css/Logo.scss';

function Logo() {
    return (
        <a className="logo-wrapper"
            href="/"
        >
            <img className="logo"
                src={logoIcon}
                alt="logo"
            />
        </a>
    )
}

export default Logo;
