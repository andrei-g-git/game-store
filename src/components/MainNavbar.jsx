import React from 'react';
import Hamburger from './Hamburger';
import NavIcon from './NavIcon';
import searchIcon from '../assets/img/search-icon-png-9973.png';
import cartIcon  from '../assets/img/shopping-cart-icon-29083.png';
import userIcon from '../assets/img/user.png';
import logoIcon from '../assets/img/game_store.png';

import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/MainNavbar.scss';

function MainNavbar() {
    return (
        <div className="container">

            <NavBar bg="dark" expand="md">
                <Nav className="mr-auto">

                    <Hamburger/>

                    <NavIcon 
                        image={logoIcon} 
                        path="/"
                        extraClass=" logo" //mind the space 
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

                </Nav>
            </NavBar>
        </div>

    )
}

export default MainNavbar;
