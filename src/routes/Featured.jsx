import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../js/redux/actions';
import { withRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from 'react-bootstrap/Carousel';

import { useState } from 'react';

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
        /*         <div id="whatever" 
                    className="carousel slide" 
                    data-ride="carousel" 
                    style={{backgroundColor: "gray"}}
                >
        
        
                    <ol className="carousel indicators">
        
                        <li data-target="whatever" data-slide-to="0" className="active"></li>
        
                        {
                            
                            props.popular.map(item => 
                                
                                <li data-target="whatever" data-slide-to={item.index} key={item.id}></li>    
                            )
                        }
         
                    </ol>
        
        
        
                    <div className="carousel-inner">
                        
        
        
                        <div className="carousel-item active"> 
                            <div className="container">
                            <div className="card" style={{width: "3rem;"}}>
                                <img className="card-img-top d-block w-100"
                                    src={firstItem.header_image}
                                    alt="n/a"
                                    onClick={ () => console.log("was clicked")}
                                />
                                <div className="card-body">
                                    <h4 className="card-title">
                                        {firstItem.title}
                                    </h4>
                                    <p className="card-text">
                                        {firstItem.description}
                                    </p>
                                </div>
                            </div>
                            </div> 
                        </div>    
        
                        {
        
                            props.popular.map(item => 
                                <div className="carousel-item" 
                                    key={item.id}
                                > 
                                    <div className="container">
                                    <div className="card" style={{width: "3rem;"}}>
                                        <img className="card-img-top d-block w-100"
                                            src={item.header_image}
                                            alt="n/a"
                                            onClick={ () => console.log("was clicked")}
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
                    
        
        
                </div> */





        <Carousel activeIndex={index} 
            onSelect={handleSelect}
            indicators={true}
        >
            {props.popular.map((item, i) => {
                return (
                    <Carousel.Item>
                        <div className="card">
                            <img
                                className="card-img-top d-block w-100"
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
