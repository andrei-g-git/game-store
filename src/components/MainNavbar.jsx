import React from 'react';
import Hamburger from './Hamburger';
import NavIcon from './NavIcon';
import searchIcon from '../assets/img/search-icon-png-9973.png';
import cartIcon  from '../assets/img/shopping-cart-icon-29083.png';
import userIcon from '../assets/img/user.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/MainNavbar.scss';
function MainNavbar() {
    return (
        <nav id="main-nav-bar" className="container">
            
            <div className="row">
                <div className="col-sm-8 nav-items">    
                    <Hamburger/>
                    <NavIcon 
                        image={cartIcon} 
                        path="/shopping-cart"
                    />
                    <NavIcon 
                        image={userIcon} 
                        path="/user-login"
                    />
                </div>
            </div>
            
        </nav>
    )
}

export default MainNavbar;
