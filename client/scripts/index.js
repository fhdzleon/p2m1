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

  const domTitle = document.createElement("h5");
  domTitle.className = "card-title bolder";
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

  const containerNieto = document.createElement("div");
  containerNieto.className =
    "containerhijo cardContainer card p-3 border-primary ";

  // ARAMDO DE CARD -->

  containerNieto.append(
    domTitle,
    domPoster,
    domDirector,
    domYear,
    domDuration,
    domGenre,
    domRate
  );

  const containerHijo2 = document.createElement("div");
  containerHijo2.className =
    "containerPadre mb-4 col-12 col-sm-6 col-md-4 col-lg-4";

  containerHijo2.append(containerNieto);

  return containerHijo2;
}

// --> Funcion para solicitar datos de api y armar todas las cards.

function buildMovies() {
  const containerMovies = document.getElementById("recs");

  $.get("https://api.1rodemayo.com/movies", (data) => {
    data.forEach((movie) => {
      const renderMovie = buildMovie(movie);
      containerMovies.appendChild(renderMovie);
    });
  });
}
