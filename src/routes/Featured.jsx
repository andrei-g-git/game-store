import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../js/redux/actions';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { calculateDiscountedPrice } from '../js/utils/DerivedCalculations.js';
import '../css/Featured.scss';

const $ = require('jquery');

function Featured(props) {


    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, event) => {
        setIndex(selectedIndex);
    };







    useEffect(() => {
        $.when(
            $.get("/api/popular", (response) => props.fetchPopular(response)),
            $.get("/api/new", (response) => props.fetchNew(response)),
            $.get("/api/free", (response) => props.fetchFree(response))
        ).then(() => console.log(props.newGames))

    }, [])

    let carouselClass = "carousel-item active";

    let firstItem = {}
    if (props.popular.length) firstItem = props.popular[0];


    return (

        <Carousel activeIndex={index} 
            onSelect={handleSelect}
            indicators={true}
        >
            {props.popular.map((item, i) => {
                return (
                    <Carousel.Item key={item.id}>
                        <div className="card">
                            <img
                                className="card-img-top d-block w-100"
                                src={item.header_image}
                                alt="n/a"
                            />
                            <div className="card-body featured-card">
                                <h4 className="card-title">
                                    {item.title}
                                </h4>
                                <div className="buy-group">
                                    <div className="btn btn-success"
                                        type="button"
                                    >
                                        Buy now!
                                    </div>

                                    {
                                        item.discount_percent > 0 ?
                                            <p className="strikethrough-price">
                                                ${item.price}
                                            </p>
                                        :
                                            <div></div>    
                                    }
                                    <h5>
                                        ${ calculateDiscountedPrice(item.price, item.discount_percent).toFixed(2) }
                                    </h5>
                                </div>
                            </div>                            
                        </div>
                    </Carousel.Item>
                )
            })}

        </Carousel>

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



const data = [
    {
        image: 'https://steamcdn-a.akamaihd.net/steam/apps/546560/header.jpg',
        caption: "Caption",
        description: "Description Here"
    },
    {
        image: 'https://steamcdn-a.akamaihd.net/steam/apps/1091500/header.jpg',
        caption: "Caption",
        description: "Description Here"
    },
    {
        image: 'https://steamcdn-a.akamaihd.net/steam/apps/1097150/header.jpg',
        caption: "Caption",
        description: "Description Here"
    }
]



export default /* withRouter( */connect(mapStateToProps, mapDispatchToProps)(Featured)/* ) */;
