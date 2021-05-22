import React from 'react';
import { Link } from 'react-router-dom';
import { calculateDiscountedPrice } from '../js/utils/DerivedCalculations.js';
import '../css/FeaturedGamesCard.scss';

function GameCard(props) {

    const game = props.game;

    return (
        <Link className="card" 
            role="button"
            to={"/games/" + game.id}
        >
            <img
                className="card-img-top d-block w-100 featured-card-header-image"
                src={game.header_image}
                alt="n/a"
            />
            <div className="card-body featured-card-body">
                <h6 className="card-title">
                    {game.title}
                </h6>
                {
                    game.is_free ?
                        <div className="buy-group">
                            <div>Free!</div>
                        </div>    
                    :
                        <div className="buy-group">
                            {
                                game.discount_percent > 0 ? 
                                    <p className="strikethrough-price">
                                        ${game.price}
                                    </p>
                                :
                                    <div></div>  
                            }
                            <h6 className="actual-price">
                                ${ calculateDiscountedPrice(game.price, game.discount_percent).toFixed(2) }
                            </h6>
                        </div> 
                }

            </div>                            
        </Link>
    )
}

export default GameCard;
