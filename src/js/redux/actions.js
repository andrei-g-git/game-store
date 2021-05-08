import * as actionTypes from './actionTypes';

export const popularGamesLoaded = (popularGames) => {
    return {
        type: actionTypes.POPULAR_GAMES_LOADED,
        payload: popularGames
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