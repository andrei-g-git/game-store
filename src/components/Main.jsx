import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './MainNavbar';

import '../zdelete/wireframe.scss';

import cart from '../zdelete/shopping-cart-icon-29083.png'
import user from '../zdelete/user.png'
import hamburger from '../zdelete/white-hamburger.png'

export default class Main extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <MainNavbar/>
                
{/*                     <nav //className="col-sm-12"
                        id="nav-delete"
                    >
                        <div className="col-sm-8 nav-items">

                            <img className="d-block d-md-none nav-icon-delete" 
                                id="hamburger-delete"
                                src={hamburger}
                                alt="n/a"
                            />

                            <div className="d-md-flex nav-routes-delete">
                                GameShop
                            </div>
                            <div className="d-none d-md-flex nav-routes-delete">
                                Home
                            </div>
                            <div className="d-none d-md-flex nav-routes-delete">
                                Browse
                            </div>

                            <img className="d-none d-md-flex nav-icon-delete" src={user} />

                            <img className="d-none d-md-flex nav-icon-delete" src={cart} />
                        </div>
                        <div className="col-12 col-md-4"
                            id="search-delete"
                        >
                            Search
                        </div>
                    </nav> */}
                </div>
            </div>
        )
    }
}
