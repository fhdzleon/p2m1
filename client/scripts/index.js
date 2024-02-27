 
//? --> Funcion para mostrar citas random

const displayRandomQuote = (quotes) => {
    const displayQuote = document.getElementById("randomQuote") 
    const randomIndex = Math.floor(Math.random() * quotes.length) 
    let quote = quotes[randomIndex]

    displayQuote.textContent = quote;
}

document.addEventListener('DOMContentLoaded', function() {
    displayRandomQuote(quotes);
    buildMovies();
});

//? Definimos las clases que necesitaremos -->

class Movie {
    constructor(title,year, director, duration, genre, rate, poster) {
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
    }
}

//? --> Funcion creadora de cards

    function buildMovie(tempData) {
        const {title,year, director, duration, genre, rate, poster} = tempData;

        const domTitle = document.createElement("h2");
        domTitle.innerHTML = title;

        const domPoster = document.createElement("img");
        domPoster.src = poster;

        const domDirector = document.createElement("p");
        domDirector.innerHTML = `<b>Director: </b> ${director}`

        const domYear = document.createElement("p");
        domYear.innerHTML = `<b>Año: </b> ${year}`

        const domDuration = document.createElement("p");
        domDuration.innerHTML = `<b>Duración: </b> ${duration}`

        const domGenre = document.createElement("p");
        domGenre.innerHTML = `<b>Género: </b> ${genre.join(' - ')}`

        const domRate = document.createElement("p");
        domRate.innerHTML = `<b>Calificación: </b> ${rate}`

        // CONTENEDOR DE LOS DATOS -->
        const container = document.createElement('div')
        container.className = "card"

        // ARAMDO DE CARD -->

        container.appendChild(domTitle)
        container.appendChild(domPoster)
        container.appendChild(domDirector)
        container.appendChild(domYear)
        container.appendChild(domDuration)
        container.appendChild(domGenre)
        container.appendChild(domRate)

        return container;
    }

    function buildMovies() {
        const containerMovies = document.getElementById("recs")

        const renderMovies = tempData.map((movie) => 
            buildMovie(movie)
        );

        renderMovies.forEach((renderMovie) => 
            containerMovies.appendChild(renderMovie)
        )
    }
