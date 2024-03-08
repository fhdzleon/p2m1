const quotes = require("../data/quotes");

const displayRandomQuote = (quotes) => {
  const displayQuote = document.getElementById("randomQuote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  let quote = quotes[randomIndex];

  displayQuote.textContent = quote;
};

module.exports = displayRandomQuote;
