import express = require('express');
const app = express();
import months = require('./modules/months');
import randomNumber = require('./modules/randomNumbers');
import quote = require('./modules/quotes');
const PORT = 3000;

app.get('/', function (req, res) {
 res.send('Hello World!');
});

let server = app.listen(PORT, function () {
 console.log(`Server is running on http://localhost:${PORT}`);
});


let jan  = months[0];
let random = randomNumber(50, 100);
let quoteArr = quote.quotes;
quote.addQuote('Today is an awesome day!');
let randQuote = quote.randomQuotes();
console.log(randQuote);
