import * as actionTypes from './actionTypes';
import { GameCardData, GameData } from '../interfaces/Data';

const initialState = {
    popular: [],
    newGames: [],
    free: [],
    clickedGame: null,
    pics: [],
    searchQuery: "",
    searchedGames: []
}

const databaseReducer = (
    state: {
        popular: GameCardData[],
        newGames: GameCardData[],
        free: GameCardData[],
        //clickedGame: GameData | null
        clickedGame: {} | null,
        pics: string[],
        searchQuery: string,
        searchedGames: GameCardData[]
    } = initialState,
    action: {
        type: string,
        payload: any
    }
) => {
    switch(action.type){
        case actionTypes.POPULAR_GAMES_LOADED:
            return{
                ...state,
                popular: action.payload
            }
        case actionTypes.NEW_GAMES_LOADED:
            return{
                ...state,
                newGames: action.payload
            }
        case actionTypes.FREE_GAMES_LOADED:
            return{
                ...state,
                free: action.payload
            }    
        case actionTypes.GAME_LOADED:
            return{
                ...state,
                clickedGame: action.payload
            }
        case actionTypes.PICS_LOADED:
            return{
                ...state,
                pics: action.payload
            }
        case actionTypes.SEARCH_QUERIED:
            return{
                ...state,
                searchQuery: action.payload
            }
        case actionTypes.SEARCHED_GAMES_LOADED:
            return{
                ...state,
                searchedGames: action.payload
            }
        default: 
            return state;                    
    }
}

export {databaseReducer};