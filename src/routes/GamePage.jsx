import React from 'react';
import { useEffect } from 'react';
import * as actions from '../js/redux/actions';
import { connect } from 'react-redux';

const $ = require('jquery');

function GamePage(props) {

    useEffect(() => {
        $.ajax({
            type: "POST",
            url: "/api/games", //+ props.gameId.toString(), //I forget why it's not already a string
            data: { id: props.gameId },
            success: (response) => { 
                console.log(response);
                props.loadGame(response[0]); //SELECT * FROM table WHERE   returns an array
            },
            dataType: "json"
        })
    }, []);

    return (
        <div>
            {
                props.clickedGame !== null ?
                    <div>
                        <div>{props.clickedGame.title}</div>
                        <img src={props.clickedGame.header_image} />
                        <div> {props.clickedGame.description}</div>
                    </div>
                :
                    <div></div>
            }
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        clickedGame: state.databaseReducer.clickedGame
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loadGame: (game) => {
            dispatch(actions.gameLoaded(game))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
