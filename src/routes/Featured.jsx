import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../js/redux/actions';
import {withRouter} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

const $ = require('jquery');

function Featured(props) {

    useEffect(() => {  
        $.when(
            $.get("/api/popular", (response) => props.fetchPopular(response)),
            $.get("/api/new", (response) => props.fetchNew(response)),
            $.get("/api/free", (response) => props.fetchFree(response))
        ).then(() => console.log(props.newGames))   

    }, [])

    let carouselClass = "carousel-item active";

    return (
        <div id="whatever" style={{backgroundColor: "gray"}}>
            <div className="carousel-inner">
                {
                    props.popular.map(item => 
                        <div className={carouselClass} 
                            key={item.id}
                        > 
                            {
                                carouselClass = "carousel-item"
                            }
                            <div className="card" style={{width: "3rem;"}}>
                                <img className="card-img-top"
                                    src={item.header_image}
                                    alt="n/a"
                                />
                                <div className="card-body">
                                    <h4 className="card-title">
                                        {item.title}
                                    </h4>
                                    <p className="card-text">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>    
                    )
                }
            </div>



            <a class="carousel-control-prev" href="#whatever" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#whatever" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>




            <br/>

            {
                props.newGames.map(item => 
                    <h3 key={item.id}> {item.title} </h3>    
                )
            }
            




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
