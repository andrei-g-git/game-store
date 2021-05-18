import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../js/redux/actions';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { calculateDiscountedPrice } from '../js/utils/DerivedCalculations.js';
import FeaturedGamesSwiper from '../components/FeaturedGamesSwiper';
import '../css/Featured.scss';

const $ = require('jquery');

function Featured(props) {

    useEffect(() => {
        $.when(
            $.get("/api/popular", (response) => props.fetchPopular(response)),
            $.get("/api/new", (response) => props.fetchNew(response)),
            $.get("/api/free", (response) => props.fetchFree(response))
        ).then(() => console.log(props.newGames))

    }, [])

    return (
        <div id="featured-games">
            <label className="featured-label">Popular:</label>
            <FeaturedGamesSwiper games={props.popular} />
            <label className="featured-label">New releases:</label>
            <FeaturedGamesSwiper games={props.newGames} />
            <label className="featured-label">Free games:</label>
            <FeaturedGamesSwiper games={props.free} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        popular: state.databaseReducer.popular,
        newGames: state.databaseReducer.newGames,
        free: state.databaseReducer.free,
        popularSelectIndex: state.uiReducer.popularSelectIndex,
        newSelectIndex: state.uiReducer.newSelectIndex,
        freeSelectIndex: state.uiReducer.freeSelectIndex        
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
        },
        handleSelectPopular: (index => {
            dispatch(actions.popularCarouselIndexChanged(index))
        }),
        handleSelectNew: (index => {
            dispatch(actions.newCarouselIndexChanged(index))
        }),
        handleSelectFree: (index => {
            dispatch(actions.freeCarouselIndexChanged(index))
        }),                
    }
}


export default /* withRouter( */connect(mapStateToProps, mapDispatchToProps)(Featured)/* ) */;
