import * as actionTypes from './actionTypes';
import { GameCardData } from '../interfaces/Data';

const initialState = {
    popular: [],
    newGames: [],
    free: []
}

const databaseReducer = (
    state: {
        popular: GameCardData[],
        newGames: GameCardData[],
        free: GameCardData[]
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
        default: 
            return state;                    
    }
}

export {databaseReducer};