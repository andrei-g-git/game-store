import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './MainNavbar';
import { Switch, Route } from 'react-router-dom';
import Featured from '../routes/Featured';
import GamePage from '../routes/GamePage';
import Footer from './Footer';
import '../css/Main.scss';

export default class Main extends Component {
    render() {
        return (
            <div className="container"
                id="main"
            >
                <div className="row">
                    <MainNavbar/>
                </div>

                <Switch>
                    <Route exact path="/">
                        <Featured></Featured>
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
                </Switch>

                <Footer></Footer>

            </div>
        )
    }
}
