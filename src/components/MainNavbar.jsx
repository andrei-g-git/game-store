import React from 'react';
import Hamburger from './Hamburger';
import NavIcon from './NavIcon';
import searchIcon from '../assets/img/search-icon-png-9973.png';
import cartIcon  from '../assets/img/shopping-cart-icon-29083.png';
import userIcon from '../assets/img/user.png';
import logoIcon from '../assets/img/gameStore2.png';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/MainNavbar.scss';

function MainNavbar() {
    return (
        <div className="container">

            <Navbar id="main-nav-bar" 
                expand="md" 
                fixed="top"
            >

                <Nav className="mr-auto">

                    <Hamburger/>

                    <Nav.Link className="d-none d-md-block" 
                        href="/"
                        id="nav-link-home"
                    >
                        Home
                    </Nav.Link>

                    <NavDropdown className="d-none d-md-block" 
                        id="dropdown-browse"
                        title="Dropdown"
                    >
                        <NavDropdown.Item>Action</NavDropdown.Item>
                        <NavDropdown.Item>Adventure</NavDropdown.Item>
                        <NavDropdown.Item>Strategy</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link data-test="main-nav-anchor" className="main-nav-anchor" href="/">
                        <img className="main-nav-icon"
                            id="logo"
                            src={logoIcon} 
                            alt="n/a"
                        />
                    </Nav.Link> 

                    <div class="nav-icons">
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
                    
                </Nav>

            </Navbar>
        </div>

    )
}

export default MainNavbar;
