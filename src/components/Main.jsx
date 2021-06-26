import React, { Component } from 'react';
//import MainNavbar from './MainNavbar';
import SideNavbar from './SideNavbar';
import TopNavbar from './TopNavbar';
import { Switch, Route } from 'react-router-dom';
import Home from '../routes/Home';
import GamePage from '../routes/GamePage';
import SearchResult from '../routes/SearchResult';
import Footer from './Footer';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Main.scss';

export default class Main extends Component {
    render() {
        return (
            <div id="main">

                <SideNavbar layout="left"/>

                <div className="scrollable-wrapper">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route path="/games/:id"
                            render={routeProps => {
                                const paramId = routeProps.match.params.id;
                                return <GamePage 
                                    currencyPrefix = "$" 
                                    gameId={paramId}
                                />
                            }}
                        />

                        <Route path="/search-result">
                            <SearchResult />
                        </Route>
                    </Switch>
                </div>

                <SideNavbar layout="right"/> {/* test delete */}

                <TopNavbar />

                <Footer></Footer>

            </div>
        )
    }
}
