"use strict";
exports.__esModule = true;
exports.calculateDiscountedPrice = void 0;
var calculateDiscountedPrice = function (fullPrice, discountPercent) {
    // if(discountPercent >= 0 && discountPercent <= 100){
    //     if(fullPrice >= 0){
    return fullPrice * (100 - discountPercent) / 100;
    //     }
    // }
    //return null;
};
exports.calculateDiscountedPrice = calculateDiscountedPrice;
