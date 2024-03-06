// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
// - Todos los datos del objeto son obligatorios.
// - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
// - Valida que el título no rebase los 100 caracteres.
// - Valida que el director no rebase los 50 caracteres.
// - Valida que el año de estreno sea un número entero de 4 dígitos.
// - Valida que el país o paises sea introducidos en forma de arreglo.
// - Valida que los géneros sean introducidos en forma de arreglo.
// - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
// - Crea un método estático que devuelva los géneros aceptados*.
// - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
class Peliculas {
  constructor({
    id,
    titulo,
    director,
    estreno,
    paises,
    generos,
    calificacion,
  }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.paises = paises;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPaises(paises);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }
  // Atributo estatico
  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }
  // Metodo estatico
  static generosAceptados() {
    return console.info(
      `Los generos aceptados son: ${Peliculas.listaGeneros.join(", ")}`
    );
  }

  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if (typeof valor !== "string")
      return console.error(
        `${propiedad} "${valor}" ingresado, NO es una cadena de texto`
      );
    return true;
  }
  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        `${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud}).`
      );
    return true;
  }
  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if (typeof valor !== "number")
      return console.error(
        `${propiedad} "${valor}" ingresado, NO es un numero`
      );
    return true;
  }
  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if (!(valor instanceof Array))
      return console.error(
        `${propiedad} "${valor}" ingresado, no es un arreglo`
      );
    if (valor.length === 0)
      return console.error(`${propiedad} "${valor}" no tiene datos`);
    for (let cadena of valor) {
      if (typeof cadena !== "string")
        return console.error(
          `${propiedad} "${cadena}" ingredado, NO es una cadena de texto`
        );
    }
    return true;
  }
  ///////////////////////////////////////////////
  validarIMDB(id) {
    // Expresion regular
    if (this.validarCadena("IMBD id", id))
      if (!/^([a-z]){2}([0-9]){7}$/.test(id))
        return console.error(
          `IMDB id "${id}" no es valido, debe tener 9 caracteres, las primeras letras minusculas, los 7 restantes numeros.`
        );
  }
  validarTitulo(titulo) {
    if (this.validarCadena("Título", titulo))
      this.validarLongitudCadena("Título", titulo, 100);
  }

  validarDirector(director) {
    if (this.validarCadena("Director", director))
      this.validarLongitudCadena("Director", director, 50);
  }
  validarEstreno(estreno) {
    if (this.validarNumero("Año de estreno", estreno))
      if (!/^([0-9]){4}$/.test(estreno))
        return console.error(
          `Año de estreno "${estreno}" no es valido, debe tener 4 caracteres, y solo se permiten numeros`
        );
  }
  validarPaises(paises) {
    this.validarArreglo("Paises", paises);
  }
  validarGeneros(generos) {
    if (this.validarArreglo("Géneros", generos)) {
      // Atributo estatico(array): console.info(Peliculas.listaGeneros);
      // Metodo estatico(string):  Peliculas.generosAceptados();
      for (let genero of generos) {
        if (!Peliculas.listaGeneros.includes(genero)) {
          Peliculas.generosAceptados();
          return console.error(`El genero ${genero}, no se encontro`);
        }
      }
    }
  }
  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificación", calificacion))
      return calificacion < 0 || calificacion > 10
        ? console.error(
            `Calificación "${calificacion}" no es válida, debe estar entre 0 y 10.`
          )
        : (this.calificacion = calificacion.toFixed(1));
  }
  fichaTecnica() {
    console.info(
      `Ficha Tecnica:\nTitulo: "${this.titulo}",\nDirector: "${
        this.director
      }",\nAño: "${this.estreno}",\nPais: "${this.paises.join(
        "-"
      )}",\nGeneros: "${this.generos.join(",")}",\nCalificacion: "${
        this.calificacion
      }",\nIMDB id: "${this.id}"`
    );
  }
}

/* const peli = new Peliculas({
  id: "tt1234567",
  titulo: "Titulo de la Peli",
  director: "Gustab",
  estreno: 2002,
  paises: ["peru", "rusia"],
  generos: ["Comedy", "Fantasy", "Animation"],
  calificacion: 7.64887,
});
console.log(peli);
peli.fichaTecnica();
 */

const misPelis = [
  {
    id: "tt0759385",
    titulo: "Into the Wild",
    director: "Sean Penn",
    estreno: 2007,
    paises: ["USA"],
    generos: ["Adventure", "Biography", "Drama"],
    calificacion: 8.1,
  },
  {
    id: "tt0432572",
    titulo: "Rocky Balboa",
    director: "Sylvestrer Stallone",
    estreno: 2006,
    paises: ["USA"],
    generos: ["Action", "Drama", "Sport"],
    calificacion: 7.1,
  },
  {
    id: "tt0382383",
    titulo: "Black clover",
    director: "Takashi Noto",
    estreno: 2017,
    paises: ["Japan"],
    generos: ["Animation", "Action", "Adventure"],
    calificacion: 9.6,
  },
];
misPelis.forEach((element) => new Peliculas(element).fichaTecnica());
