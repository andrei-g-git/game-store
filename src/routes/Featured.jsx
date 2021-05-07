import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../js/redux/actions';
import {withRouter} from "react-router-dom";

const $ = require('jquery');

function Featured() {

    useEffect(() => {
        $.ajax({
            type: "GET",
            url:"/api/featured",
            success: (response) => console.log(response),
            dataType: "json"
        })
    }, [])

    return (
        <div className="whatever">
            <div className="row">
                <img className="col-xs-12 col-md-3" src="https://steamcdn-a.akamaihd.net/steam/apps/546560/header.jpg" alt="" style={{margin: "0.5rem"}} />
                <img className="col-xs-12 col-md-3" src="https://steamcdn-a.akamaihd.net/steam/apps/546560/header.jpg" alt="" style={{margin: "0.5rem"}} />
                <img className="col-xs-12 col-md-3" src="https://steamcdn-a.akamaihd.net/steam/apps/546560/header.jpg" alt="" style={{margin: "0.5rem"}} />
            </div>
            <div className="row">
                <img className="col-3" src="https://steamcdn-a.akamaihd.net/steam/apps/546560/header.jpg" alt="" style={{margin: "0.5rem"}} />
                <img className="col-3" src="https://steamcdn-a.akamaihd.net/steam/apps/546560/header.jpg" alt="" style={{margin: "0.5rem"}} />
                <img className="col-3" src="https://steamcdn-a.akamaihd.net/steam/apps/546560/header.jpg" alt="" style={{margin: "0.5rem"}} />
            </div>
            <div className="row">
                <img className="col-3" src="https://steamcdn-a.akamaihd.net/steam/apps/546560/header.jpg" alt="" style={{margin: "0.5rem"}} />
                <img className="col-3" src="https://steamcdn-a.akamaihd.net/steam/apps/546560/header.jpg" alt="" style={{margin: "0.5rem"}} />
                <img className="col-3" src="https://steamcdn-a.akamaihd.net/steam/apps/546560/header.jpg" alt="" style={{margin: "0.5rem"}} />
            </div>                        
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        featured: state.databaseReducer.featured,
        newGames: state.databaseReducer.newGames,
        free: state.databaseReducer.free
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAll: (featured, newGames, free) => {
            dispatch(actions.featuredGamesLoaded(featured));
            dispatch(actions.newGamesLoaded(newGames));
            dispatch(actions.freeGamesLoaded(free))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Featured));
