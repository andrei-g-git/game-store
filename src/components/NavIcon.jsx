import React from 'react';
import '../css/NavIcons.scss';
import Nav from 'react-bootstrap/Nav';


function NavIcon(props) {
    return (
        <Nav.Link data-test="main-nav-anchor" className="main-nav-anchor" href={props.path}>
            <img className={"d-none d-md-block main-nav-icon" + props.extraClass}
                src={props.image} 
                alt="n/a"
            />
        </Nav.Link>         
    )
}

export default NavIcon;
