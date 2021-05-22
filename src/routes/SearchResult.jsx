import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../js/redux/actions';
import GameCard from '../components/GameCard';
import '../css/SearchResult.scss';

const $ = require('jquery');

function SearchResults(props) {

    useEffect(() => {
        $.ajax({
            type: "POST",
            url: "/api/search",
            data: { searchQuery: props.searchQuery },
            success: response => {
                console.log(response)
                props.fetchSearchedGames(response)
            }
        })
    }, [])

    console.log(props.searchQuery)
    return (
        <div id="games-grid">
            {
                typeof props.searchedGames !== "undefined" ?
                    props.searchedGames.map(game => 
                        <GameCard
                            game={game}
                        />
                    )
                :
                    <div></div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        searchQuery: state.databaseReducer.searchQuery,
        searchedGames: state.databaseReducer.searchedGames
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchSearchedGames: (games) => {
            dispatch(actions.searchedGamesLoaded(games))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
