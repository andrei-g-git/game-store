"use strict";
exports.__esModule = true;
exports.mobileSearchToggled = exports.searchedGamesLoaded = exports.searchQueried = exports.picsLoaded = exports.gameLoaded = exports.freeCarouselIndexChanged = exports.newCarouselIndexChanged = exports.popularCarouselIndexChanged = exports.freeGamesLoaded = exports.newGamesLoaded = exports.popularGamesLoaded = void 0;
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
var gameLoaded = function (game /* GameData */) {
    return {
        type: actionTypes.GAME_LOADED,
        payload: game
    };
};
exports.gameLoaded = gameLoaded;
var picsLoaded = function (pics) {
    return {
        type: actionTypes.PICS_LOADED,
        payload: pics
    };
};
exports.picsLoaded = picsLoaded;
var searchQueried = function (searchQuery) {
    return {
        type: actionTypes.SEARCH_QUERIED,
        payload: searchQuery
    };
};
exports.searchQueried = searchQueried;
var searchedGamesLoaded = function (searchedGames) {
    return {
        type: actionTypes.SEARCHED_GAMES_LOADED,
        payload: searchedGames
    };
};
exports.searchedGamesLoaded = searchedGamesLoaded;
var mobileSearchToggled = function (clicked) {
    return {
        type: actionTypes.MOBILE_SEARCH_TOGGLED,
        payload: clicked
    };
};
exports.mobileSearchToggled = mobileSearchToggled;
