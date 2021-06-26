import React from 'react';
import Hamburger from './Hamburger';
import Logo from './Logo';
import '../css/TopNavbar.scss'

function TopNavbar() {
    return (
        <div className="top-navbar d-md-none">
            <div className="nav-wrapper">
                <Hamburger />
                <Logo />
            </div>
        </div>
    )
}

export default TopNavbar;
