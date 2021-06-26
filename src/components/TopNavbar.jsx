import React from 'react';
import Hamburger from './Hamburger';
import Logo from './Logo';
import SearchMobile from './SearchMobile';
import '../css/TopNavbar.scss'

function TopNavbar() {
    return (
        <div className="top-navbar d-md-none">
            <div className="nav-wrapper">
                <Hamburger />
                <Logo />
                <SearchMobile />
            </div>
        </div>
    )
}

export default TopNavbar;
