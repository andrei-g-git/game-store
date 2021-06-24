import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../js/redux/actions';
import FeaturedGamesSwiper from '../components/FeaturedGamesSwiper';
import headerVideo from '../assets/video/bg-hero-video.mp4';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Home.scss';

const $ = require('jquery');

function Home(props) {

    useEffect(() => {
        $.when(
            $.get("/api/popular", (response) => props.fetchPopular(response)),
            $.get("/api/new", (response) => props.fetchNew(response)),
            $.get("/api/free", (response) => props.fetchFree(response))
        ).then(() => console.log(props.newGames))

    }, [])

    return (
        <div className="container">
            <div className="row">
                <video className="header-video col-sm-12"
                    autoPlay
                    muted
                    loop
                >
                    <source src={headerVideo}
                        type="video/mp4"
                    />
                </video>            
            </div>

            <div className="swiper-wrapper row">
                <label className="home-label">New releases</label>
                <FeaturedGamesSwiper games={props.newGames} />
            </div>
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
        handleSelectPopular: (index => { // ### !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ####
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
