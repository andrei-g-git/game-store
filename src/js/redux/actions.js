"use strict";
exports.__esModule = true;
exports.freeCarouselIndexChanged = exports.newCarouselIndexChanged = exports.popularCarouselIndexChanged = exports.freeGamesLoaded = exports.newGamesLoaded = exports.popularGamesLoaded = void 0;
var actionTypes = require("./actionTypes");
var popularGamesLoaded = function (popularGames) {
    return {
        type: actionTypes.POPULAR_GAMES_LOADED,
        payload: popularGames
    };
};
exports.popularGamesLoaded = popularGamesLoaded;
var newGamesLoaded = function (newGames) {
    return {
        type: actionTypes.NEW_GAMES_LOADED,
        payload: newGames
    };
};
exports.newGamesLoaded = newGamesLoaded;
var freeGamesLoaded = function (freeGames) {
    return {
        type: actionTypes.FREE_GAMES_LOADED,
        payload: freeGames
    };
};
exports.freeGamesLoaded = freeGamesLoaded;
var popularCarouselIndexChanged = function (index) {
    return {
        type: actionTypes.POPULAR_CAROUSEL_INDEX_CHANGED,
        payload: index
    };
};
exports.popularCarouselIndexChanged = popularCarouselIndexChanged;
var newCarouselIndexChanged = function (index) {
    return {
        type: actionTypes.NEW_CAROUSEL_INDEX_CHANGED,
        payload: index
    };
};
exports.newCarouselIndexChanged = newCarouselIndexChanged;
var freeCarouselIndexChanged = function (index) {
    return {
        type: actionTypes.FREE_CAROUSEL_INDEX_CHANGED,
        payload: index
    };
};
exports.freeCarouselIndexChanged = freeCarouselIndexChanged;
