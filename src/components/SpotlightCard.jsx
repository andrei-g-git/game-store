import React, { useEffect } from 'react';
import * as actions from '../js/redux/actions';
import { connect } from 'react-redux';
import { calculateDiscountedPrice } from '../js/utils/DerivedCalculations.js';
import '../css/SpotlightCard.scss';

const $ = require('jquery');

function BigCard(props) {

    useEffect(() =>{
        $.ajax({
            type: "POST",
            url: "/api/games",
            data: {id: props.id},
            success: (response) => props.fetchGame(response[0])
        })
    }, [])
    //there needs to be a separate table for special card game descriptions, and another for special card images
    return (
        <div>
            {   
                props.game !== null ?         
                    <a className="spotlight-card" 
                        href={"/games/" + props.id}
                    >
                        <img className="spotlight-image"
                            src={props.imageUrl}
                            alt="spotlight"
                        />
                        <div className="spotlight-price-group">
                            <h1 className="spotlight-price">
                                ${ calculateDiscountedPrice(props.game.price, props.game.discount_percent).toFixed(2) }
                            </h1>

                            <input className="spotlight-buy"
                                type="button"
                                value="Buy!"
                            />
                        </div>
                    </a>
                :
                    <div></div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        game: state.databaseReducer.clickedGame
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchGame: (game) => {
            dispatch(actions.gameLoaded(game))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BigCard);
