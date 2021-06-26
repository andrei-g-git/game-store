import * as actionTypes from './actionTypes';
import { ReduxAction } from '../interfaces/Redux';

const initialState = {
    popularSelectIndex: 0,
    newSelectIndex: 0,
    freeSelectIndex: 0,
    mobileSearchToggled: false
}

const uiReducer = (
    state: {
        popularSelectIndex: number,
        newSelectIndex: number,
        freeSelectIndex: number,
        mobileSearchToggled: boolean
    } = initialState,
    action: ReduxAction
) => {
    switch(action.type){
        case actionTypes.POPULAR_GAMES_LOADED:
            return {
                ...state,
                popularSelectIndex: action.payload
            }
        case actionTypes.NEW_GAMES_LOADED:
            return {
                ...state,
                newSelectIndex: action.payload
            } 
        case actionTypes.FREE_GAMES_LOADED:
            return {
                ...state,
                freeSelectIndex: action.payload
            }  
        case actionTypes.MOBILE_SEARCH_TOGGLED:
            return{
                ...state,
                mobileSearchToggled: action.payload
            }
        default:
            return state                         
    }
}

export { uiReducer }