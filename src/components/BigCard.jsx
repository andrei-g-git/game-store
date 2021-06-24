import React, { useEffect } from 'react';
import * as actions from '../js/redux/actions';
import { connect } from 'react-redux';
import { calculateDiscountedPrice } from '../js/utils/DerivedCalculations.js';

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

    return (
        <a className="spotlight-card" 
            href={"/games/" + props.id}
        >
            <img className="spotlight-image"
                src={props.imageUrl}
                alt="spotlight"
            />
            <h1>
                ${ 
                    props.game !== null ?
                        calculateDiscountedPrice(props.game.price, props.game.discount_percent).toFixed(2) 
                    :
                        <div></div>
                }
            </h1>

            <h3>
                { props.game.title } {/* there needs to be a separate table for special card game descriptions, and another for special card images */}
            </h3>
        </a>
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
