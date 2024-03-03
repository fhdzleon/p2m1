// --> Funcion para mostrar citas random

const displayRandomQuote = (quotes) => {
  const displayQuote = document.getElementById("randomQuote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  let quote = quotes[randomIndex];

  displayQuote.textContent = quote;
};

document.addEventListener("DOMContentLoaded", function () {
  displayRandomQuote(quotes);
  buildMovies();
});

// --> Funcion creadora de cards

function buildMovie(data) {
  const { title, year, director, duration, genre, rate, poster } = data;

  const domTitle = document.createElement("h2");
  domTitle.innerHTML = title;

  const domPoster = document.createElement("img");
  domPoster.src = poster;

  const domDirector = document.createElement("p");
  domDirector.innerHTML = `<b>Director: </b> ${director}`;

  const domYear = document.createElement("p");
  domYear.innerHTML = `<b>Año: </b> ${year}`;

  const domDuration = document.createElement("p");
  domDuration.innerHTML = `<b>Duración: </b> ${duration}`;

  const domGenre = document.createElement("p");
  domGenre.innerHTML = `<b>Género: </b> ${genre.join(" - ")}`;

  const domRate = document.createElement("p");
  domRate.innerHTML = `<b>Calificación: </b> ${rate}⭐`;

  // CONTENEDOR DE LOS DATOS -->
  const container = document.createElement("div");
  container.className = "card";

  // ARAMDO DE CARD -->

  container.append(
    domTitle,
    domPoster,
    domDirector,
    domYear,
    domDuration,
    domGenre,
    domRate
  );

  return container;
}

// --> Funcion para solicitar datos de api y armar todas las cards.

function buildMovies() {
  const containerMovies = document.getElementById("recs");

  $.get("https://webpt19b.web.app/data/movies.json", (data) => {
    data.forEach((movie) => {
      const renderMovie = buildMovie(movie);
      containerMovies.appendChild(renderMovie);
    });
  });
}
