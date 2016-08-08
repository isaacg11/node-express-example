"use strict";
function randomNumber(upper, lower) {
    return Math.floor(Math.random() * (upper - lower * 1));
}
module.exports = randomNumber;
