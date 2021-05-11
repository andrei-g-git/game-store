import * as actionTypes from './actionTypes';
import { ReduxAction } from '../interfaces/Redux';
import { GameData } from '../interfaces/Data';

export const popularGamesLoaded = (popularGames: GameData): ReduxAction => {
    return {
        type: actionTypes.POPULAR_GAMES_LOADED,
        payload: popularGames
    }
}
export const newGamesLoaded = (newGames: GameData): ReduxAction => {
    return {
        type: actionTypes.NEW_GAMES_LOADED,
        payload: newGames
    }
}
export const freeGamesLoaded = (freeGames: GameData): ReduxAction => {
    return {
        type: actionTypes.FREE_GAMES_LOADED,
        payload: freeGames
    }
}

export const popularCarouselIndexChanged = (index: number): ReduxAction => {
    return {
        type: actionTypes.POPULAR_CAROUSEL_INDEX_CHANGED,
        payload: index
    }
}

export const newCarouselIndexChanged = (index: number): ReduxAction => {
    return {
        type: actionTypes.NEW_CAROUSEL_INDEX_CHANGED,
        payload: index
    }
}

export const freeCarouselIndexChanged = (index: number): ReduxAction => {
    return {
        type: actionTypes.FREE_CAROUSEL_INDEX_CHANGED,
        payload: index
    }
}