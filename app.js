"use strict";
var express = require('express');
var app = express();
var months = require('./modules/months');
var randomNumber = require('./modules/randomNumbers');
var quote = require('./modules/quotes');
var PORT = 3000;
app.get('/', function (req, res) {
    res.send('Hello World!');
});
var server = app.listen(PORT, function () {
    console.log("Server is running on http://localhost:" + PORT);
});
var jan = months[0];
var random = randomNumber(50, 100);
var quoteArr = quote.quotes;
quote.addQuote('Today is an awesome day!');
var randQuote = quote.randomQuotes();
console.log(randQuote);
