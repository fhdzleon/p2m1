const quotes = require("./data/quotes");
const buildMovie = require("./utils/buildMovie");
const displayRandomQuote = require("./utils/randomQuote");
const tempData = require("./data/tempData");

document.addEventListener("DOMContentLoaded", function () {
  displayRandomQuote(quotes);
  buildMovies();
});

function buildMovies() {
  const containerMovies = document.getElementById("recs");

  tempData.forEach((movie) => {
    const renderMovie = buildMovie(movie);
    containerMovies.appendChild(renderMovie);
  });
}
