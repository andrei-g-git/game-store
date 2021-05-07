import * as actionTypes from './actionTypes';
import { GameCardData } from '../interfaces/Data';

const initialState = {
    featured: [],
    newGames: [],
    free: []
}

const databaseReducer = (
    state: {
        featured: GameCardData[],
        newGames: GameCardData[],
        free: GameCardData[]
    } = initialState,
    action: {
        type: string,
        payload: any
    }
) => {
    switch(action.type){
        case actionTypes.FEATURED_GAMES_LOADED:
            return{
                ...state,
                featured: action.payload
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