import React from 'react';
import SearchBar from './SearchBar';
import SignInOrUp from './SignInOrUp';
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

                    <div className="nav-link">Browse games {'>'}</div>
                    <div className="nav-link">Deals{'        >'}</div>
                    <div className="nav-divider" />
                    <div className="nav-link">about</div>
                    <div className="nav-link">contact</div>                    
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
