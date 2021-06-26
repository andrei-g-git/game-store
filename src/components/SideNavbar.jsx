import React from 'react';
import SearchBar from './SearchBar';
import SignInOrUp from './SignInOrUp';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoIcon from '../assets/img/gameStore2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/SideNavbar.scss';


function SideNavbar(props) { //the layout prop should be removed since both sidebars will be different components
    return (
        <div className={"navbar-wrapper" + " " + props.layout + " " + "d-none d-md-block"}>
            <a className="logo-wrapper"
                href="/">
                <img className="logo"
                    src={logoIcon}
                    alt="logo"
                />
            </a>   
            <div className="searchbar-wrapper">
                <SearchBar />                
            </div>

            <div className="vertical-link-container-wrapper"> {/* for pete's sake, all because flex doesn't play nice with fixed positions */}
                <div className="vertical-link-container">

                    <a className="nav-link"
                        href="/"
                    >
                        Home
                    </a>
                    {/* <div className="nav-link">Browse games {'>'}</div> */}
                    <NavDropdown className="navigation-dropdown" 
                        title="Browse games"
                    >
                        <NavDropdown.Item className="navigation-dropdown-item">All</NavDropdown.Item>                        
                        <NavDropdown.Item className="navigation-dropdown-item">Action</NavDropdown.Item>
                        <NavDropdown.Item className="navigation-dropdown-item">Adventure</NavDropdown.Item>
                        <NavDropdown.Item className="navigation-dropdown-item">Strategy</NavDropdown.Item>                        
                    </NavDropdown>
                    {/* <div className="nav-link">Deals{'        >'}</div> */}
                    <NavDropdown className="navigation-dropdown" 
                        title="Deals"
                    >
                        <NavDropdown.Item className="navigation-dropdown-item">All</NavDropdown.Item>                        
                        <NavDropdown.Item className="navigation-dropdown-item">Under $30</NavDropdown.Item>
                        <NavDropdown.Item className="navigation-dropdown-item">Under $20</NavDropdown.Item>
                        <NavDropdown.Item className="navigation-dropdown-item">Under $10</NavDropdown.Item>                        
                    </NavDropdown>

                    <div className="nav-divider" />

                    <a className="nav-link"
                        href="/about"
                    >
                        About
                    </a>
                    <a className="nav-link"
                        href="contact"
                    >
                        Contact
                    </a>                    
                </div>
            </div>

            <div className="lower-buttons-wrapper">
                <SignInOrUp name="Sign In" 
                    redirectPath="/authentication"
                    colorClass="sign-in-color"
                />
                <SignInOrUp name="Sign Up" 
                    redirectPath="/account-creation"
                    colorClass="sign-up-color"
                />                
            </div>

        </div>
    )
}

export default SideNavbar;
