const quotes = require("./data/quotes");
const buildMovie = require("./utils/buildMovie");
const displayRandomQuote = require("./utils/randomQuote");

document.addEventListener("DOMContentLoaded", function () {
  displayRandomQuote(quotes);
  buildMovies();
});

function buildMovies() {
  const containerMovies = document.getElementById("recs");

  $.get("https://api.1rodemayo.com/movies", (data) => {
    data.forEach((movie) => {
      const renderMovie = buildMovie(movie);
      containerMovies.appendChild(renderMovie);
    });
  });
}
