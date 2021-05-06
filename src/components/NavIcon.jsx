import React from 'react';
import '../css/NavIcons.scss';

function NavIcon(props) {
    return (
        <a className="main-nav-anchor"
            href={props.path}
        >
            <img className="main-nav-icon"
                src={props.image} 
                alt="n/a"
            />
        </a>
    )
}

export default NavIcon;
