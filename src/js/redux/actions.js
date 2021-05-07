import * as actionTypes from './actionTypes';

export const featuredGamesLoaded = (featuredGames) => {
    return {
        type: actionTypes.FEATURED_GAMES_LOADED,
        payload: featuredGames
    }
}
export const newGamesLoaded = (newGames) => {
    return {
        type: actionTypes.NEW_GAMES_LOADED,
        payload: newGames
    }
}
export const freeGamesLoaded = (freeGames) => {
    return {
        type: actionTypes.FREE_GAMES_LOADED,
        payload: freeGames
    }
}