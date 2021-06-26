import * as actionTypes from './actionTypes';
import { ReduxAction } from '../interfaces/Redux';
import { GameData, GameCardData } from '../interfaces/Data';

export const popularGamesLoaded = (popularGames: GameData): ReduxAction => { //these seem to be loading game objects, not games arrays... although it still works, no idea why
    return {
        type: actionTypes.POPULAR_GAMES_LOADED,
        payload: popularGames
    }
}
export const newGamesLoaded = (newGames: GameData): ReduxAction => { //should be GameData[] ?
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

export const gameLoaded = (game: {}/* GameData */): ReduxAction => {
    return {
        type: actionTypes.GAME_LOADED,
        payload: game
    }
}

export const picsLoaded = (pics: string[]): ReduxAction => {
    return {
        type: actionTypes.PICS_LOADED,
        payload: pics
    }
}

export const searchQueried = (searchQuery: string): ReduxAction => {
    return {
        type: actionTypes.SEARCH_QUERIED,
        payload: searchQuery
    }
}

export const searchedGamesLoaded = (searchedGames: GameCardData[]): ReduxAction => {
    return {
        type: actionTypes.SEARCHED_GAMES_LOADED,
        payload: searchedGames
    }
}

export const mobileSearchToggled = (clicked: boolean): ReduxAction => {
    return{
        type: actionTypes.MOBILE_SEARCH_TOGGLED,
        payload: clicked
    }
}