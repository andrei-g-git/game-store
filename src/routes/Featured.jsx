import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../js/redux/actions';
import {withRouter} from "react-router-dom";

const $ = require('jquery');

function Featured(props) {

    useEffect(() => {
        // $.ajax({
        //     type: "GET",
        //     url:"/api/popular",
        //     success: (response) => props.fetchPopular(response),
        //     dataType: "json"
        // });
        // $.ajax({
        //     type:"get",
        //     url:"/api/new",
        //     success: (response) => props.newGamesLoaded(response),
        //     dataType: "json"
        // });
        // $.ajax({
        //     type:"get",
        //     url:"/api/free",
        //     success: (response) => props.freeGamesLoaded(response),
        //     dataType: "json"
        // });    
        $.when(
            $.get("/api/popular", (response) => props.fetchPopular(response)),
            $.get("/api/new", (response) => props.fetchNew(response)),
            $.get("/api/free", (response) => props.fetchFree(response))
        ).then(() => console.log(props.newGames))   

    }, [])

    return (
        <div className="whatever">
            {
                props.popular.map(item => 
                    <h3 key={item.id}> {item.title} </h3>    
                )
            }
            <br/>
            {
                props.newGames.map(item => 
                    <h3 key={item.id}> {item.title} </h3>    
                )
            }

{/*             <div className="row">
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
            </div>  */}                       
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        popular: state.databaseReducer.popular,
        newGames: state.databaseReducer.newGames,
        free: state.databaseReducer.free
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPopular: (popular) => {
            dispatch(actions.popularGamesLoaded(popular));
        },
        fetchNew: (newGames) => {
            dispatch(actions.newGamesLoaded(newGames));
        },
        fetchFree: (free) => {
            dispatch(actions.freeGamesLoaded(free))
        }                
    }
}

export default /* withRouter( */connect(mapStateToProps, mapDispatchToProps)(Featured)/* ) */;
