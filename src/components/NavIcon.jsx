import React from 'react';
import '../css/NavIcons.scss';

function NavIcon(props) {
    return (
        <a className="main-nav-anchor"
            data-test="main-nav-anchor"
            href={props.path}
        >
            <img className={"d-none d-md-block main-nav-icon" + props.extraClass}
                src={props.image} 
                alt="n/a"
            />
        </a>
    )
}

export default NavIcon;
