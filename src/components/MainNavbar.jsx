import React from 'react';
import Hamburger from './Hamburger';
import NavIcon from './NavIcon';
import searchIcon from '../assets/img/search-icon-png-9973.png';
import cartIcon  from '../assets/img/shopping-cart-icon-29083.png';
import userIcon from '../assets/img/user.png';
import logoIcon from '../assets/img/game_store.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/MainNavbar.scss';

function MainNavbar() {
    return (
        <nav className="container"
            id="main-nav-bar" 
            data-testid="main-nav-bar"
        >
            
            <div className="row" style={{height: "100%"}}>
                <div className="col-sm-8 nav-items">    
                    <Hamburger/>
                    <NavIcon 
                        image={logoIcon} 
                        path="/"
                        extraClass=" logo" /* mind the space */
                    />                    
                    <NavIcon 
                        image={cartIcon} 
                        path="/shopping-cart"
                        extraClass=""
                    />
                    <NavIcon 
                        image={userIcon} 
                        path="/user-login"
                        extraClass=""
                    />
                </div>
            </div>
            
        </nav>
    )
}

export default MainNavbar;
