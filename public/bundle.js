(() => {
  var e = {
      134: (e) => {
        e.exports = [
          "La vida es como una caja de chocolates; nunca sabes lo que te va a tocar. - Forrest Gump",
          "Que la Fuerza te acompañe. - Star Wars",
          "¡A volar, juntos, hacia lo desconocido! - Titanic",
          "¡Eres un mago, Harry! - Harry Potter y la piedra filosofal",
          "Say 'hello' to my little friend! - Scarface",
          "Carpe diem. Aprovecha el día, chico. - El club de los poetas muertos",
          "To infinity and beyond! - Toy Story",
          "Mi precioso... - El Señor de los Anillos: La Comunidad del Anillo",
          "¡Eres un juguete! - Toy Story",
          "Puedes hacerlo. - Agua para elefantes",
          "La vida es bella. - La vida es bella",
          "¡No te rindas! - Buscando a Nemo",
          "¡¡Libertad!! - Braveheart",
          "Te amaré por siempre. - Ghost",
          "Ven conmigo si quieres vivir. - Terminator 2: Judgment Day",
          "¡Yo soy tu padre! - Star Wars: Episodio V - El imperio contraataca",
          "No existe la suerte, solo hay oportunidades. - Los juegos del hambre",
          "No tengo amigos, tengo familia. - Fast & Furious 7",
          "No hay lugar como el hogar. - El mago de Oz",
          "Nunca te rindas. Nunca te rindas. Nunca, nunca, nunca. - En busca del destino",
          "La fuerza de voluntad, la paciencia y la pasión son las claves del éxito. - Rocky",
          "No dejes que nadie diga que no eres lo suficientemente bueno. - El indomable Will Hunting",
          "Vive, muere, repite. - Al filo del mañana",
          "Si construyes, vendrán. - Campo de sueños",
          "¡Más vale tarde que nunca! - Volver al futuro",
          "Siempre nos quedará París. - Casablanca",
          "El invierno se acerca. - Juego de Tronos",
          "La fuerza de voluntad, la paciencia y la pasión son las claves del éxito. - Agua para elefantes",
          "Siempre hay un camino a la redención. - Shrek",
          "Espero que el infierno esté caliente esta noche. - Línea mortal",
          "¿Quieres volar, Johnny? - Volar sobre el nido del cuco",
          "El futuro pertenece a quienes creen en la belleza de sus sueños. - Mi chica",
          "¡Hazlo o no lo hagas, no hay intento! - Star Wars: Episodio V - El imperio contraataca",
          "Si te construyes, vendrán. - Campo de sueños",
          "Nunca hagas tratos con un dragón. - Shrek",
          "No tengo nada de especial, solo soy un apasionado. - Ratatouille",
          "Dios aprieta pero no ahoga. - El golpe",
          "A veces tienes que perder para ganar. - Jerry Maguire",
          "No es la vida la que importa, sino el coraje que pones en ella. - El príncipe de Egipto",
          "Recuerda quién eres. - El rey león",
          "Sigue nadando. - Buscando a Nemo",
          "Haz lo mejor que puedas con lo que Dios te dio. - Forrest Gump",
          "La verdad es una chispa que se mantiene encendida en el corazón de los hombres. - V de Vendetta",
          "No te rindas, no importa lo difícil que sea. - La vida secreta de Walter Mitty",
          "Nuestros ciclos pueden romperse. - El Señor de los Anillos: Las dos torres",
          "Una vez que el corazón decide algo, el universo conspira para que lo consigas. - El alquimista",
          "Lo que hacemos en la vida tiene eco en la eternidad. - Gladiador",
          "Hoy es el primer día del resto de tu vida. - Decisión final",
        ];
      },
      890: (e) => {
        e.exports = function (e) {
          const {
              title: a,
              year: o,
              director: n,
              duration: r,
              genre: t,
              rate: i,
              poster: s,
            } = e,
            l = document.createElement("h5");
          (l.className = "card-title bolder"), (l.innerHTML = a);
          const c = document.createElement("img");
          c.src = s;
          const d = document.createElement("p");
          d.innerHTML = `<b>Director: </b> ${n}`;
          const u = document.createElement("p");
          u.innerHTML = `<b>Año: </b> ${o}`;
          const m = document.createElement("p");
          m.innerHTML = `<b>Duración: </b> ${r}`;
          const p = document.createElement("p");
          p.innerHTML = `<b>Género: </b> ${t.join(" - ")}`;
          const v = document.createElement("p");
          v.innerHTML = `<b>Calificación: </b> ${i}⭐`;
          const g = document.createElement("div");
          (g.className =
            "containerhijo cardContainer card p-3 border-primary "),
            g.append(l, c, d, u, m, p, v);
          const h = document.createElement("div");
          return (
            (h.className =
              "containerPadre mb-4 col-12 col-sm-6 col-md-4 col-lg-4"),
            h.append(g),
            h
          );
        };
      },
      441: (e, a, o) => {
        o(134),
          (e.exports = (e) => {
            const a = document.getElementById("randomQuote");
            let o = e[Math.floor(Math.random() * e.length)];
            a.textContent = o;
          });
      },
    },
    a = {};
  function o(n) {
    var r = a[n];
    if (void 0 !== r) return r.exports;
    var t = (a[n] = { exports: {} });
    return e[n](t, t.exports, o), t.exports;
  }
  (() => {
    const e = o(134),
      a = o(890),
      n = o(441);
    document.addEventListener("DOMContentLoaded", function () {
      n(e),
        (function () {
          const e = document.getElementById("recs");
          $.get("https://api.1rodemayo.com/movies", (o) => {
            o.forEach((o) => {
              const n = a(o);
              e.appendChild(n);
            });
          });
        })();
    });
  })();
})();
