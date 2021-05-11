import React from 'react';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { calculateDiscountedPrice } from '../js/utils/DerivedCalculations.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/FeaturedGamesCarousel.scss'; //should be carousel.css or something like that

function CarouselPopular(props) {

    const [index, setIndex] = useState(0); //will use for now, problem with redux, the reducer returns an array of GameCardData objects...
    const handleSelect = (selectedIndex, event) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel //activeIndex={index} // I HAVE TO USE THIS STATE SHIT FOR NOW, THE uiReducer RETURNS ARRAYS OF GAMES INSTEAD OF NUMBERS FOR SOME REASON...
            //onSelect={handleSelect}
            indicators={true}
            interval={null}
        >
            {props.games.map((item, i) => {
                return (
                    <Carousel.Item key={item.id}>
                        <div className="card">
                            <img
                                className="card-img-top d-block w-100 featured-card-header-image"
                                src={item.header_image}
                                alt="n/a"
                            />
                            <div className="card-body featured-card">
                                <h4 className="card-title">
                                    {item.title}
                                </h4>


                                {
                                    item.is_free ?
                                        <div className="buy-group">
                                            <div className="btn btn-warning"
                                                type="button"
                                            >
                                                Play it!
                                            </div>
                                            <div>Free!</div>
                                        </div>    
                                    :
                                        <div className="buy-group">
                                            <div className="btn btn-success"
                                                type="button"
                                            >
                                                Buy!
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
                                }

                            </div>                            
                        </div>
                    </Carousel.Item>
                )
            })}

        </Carousel>
    )
}

export default CarouselPopular
