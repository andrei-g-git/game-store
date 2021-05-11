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
exports.uiReducer = void 0;
var actionTypes = require("./actionTypes");
var initialState = {
    popularSelectIndex: 0,
    newSelectIndex: 0,
    freeSelectIndex: 0
};
var uiReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes.POPULAR_GAMES_LOADED:
            return __assign(__assign({}, state), { popularSelectIndex: action.payload });
        case actionTypes.NEW_GAMES_LOADED:
            return __assign(__assign({}, state), { newSelectIndex: action.payload });
        case actionTypes.FREE_GAMES_LOADED:
            return __assign(__assign({}, state), { freeSelectIndex: action.payload });
        default:
            return state;
    }
};
exports.uiReducer = uiReducer;
