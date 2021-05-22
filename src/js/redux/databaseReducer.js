"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.databaseReducer = void 0;
var actionTypes = require("./actionTypes");
var initialState = {
    popular: [],
    newGames: [],
    free: [],
    clickedGame: null,
    pics: [],
    searchQuery: "",
    searchedGames: []
};
var databaseReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes.POPULAR_GAMES_LOADED:
            return __assign(__assign({}, state), { popular: action.payload });
        case actionTypes.NEW_GAMES_LOADED:
            return __assign(__assign({}, state), { newGames: action.payload });
        case actionTypes.FREE_GAMES_LOADED:
            return __assign(__assign({}, state), { free: action.payload });
        case actionTypes.GAME_LOADED:
            return __assign(__assign({}, state), { clickedGame: action.payload });
        case actionTypes.PICS_LOADED:
            return __assign(__assign({}, state), { pics: action.payload });
        case actionTypes.SEARCH_QUERIED:
            return __assign(__assign({}, state), { searchQuery: action.payload });
        case actionTypes.SEARCHED_GAMES_LOADED:
            return __assign(__assign({}, state), { searchedGames: action.payload });
        default:
            return state;
    }
};
exports.databaseReducer = databaseReducer;
