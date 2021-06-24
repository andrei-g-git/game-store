import React from 'react';
import SearchBar from './SearchBar';
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

                    <div>Browse games {'>'}</div>
                    <div>Deals{'        >'}</div>
                    <div className="nav-divider" />
                    <div>about</div>
                    <div>contact</div>                    
                </div>
            </div>

        </div>
    )
}

export default SideNavbar;
