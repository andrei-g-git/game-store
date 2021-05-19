import * as actionTypes from './actionTypes';
import { GameCardData, GameData } from '../interfaces/Data';

const initialState = {
    popular: [],
    newGames: [],
    free: [],
    clickedGame: null
}

const databaseReducer = (
    state: {
        popular: GameCardData[],
        newGames: GameCardData[],
        free: GameCardData[],
        //clickedGame: GameData | null
        clickedGame: {} | null
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
        default: 
            return state;                    
    }
}

export {databaseReducer};