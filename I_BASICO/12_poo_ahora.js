// POO esta basada en prototipos, no en clases.

class Animal {
  // El constructor es un metodo especial que se ejecuta en le momento de instanciar la clase.
  constructor(raza, genero) {
    this.raza = raza;
    this.genero = genero;
  }
  sonar() {
    console.log("Hago sonido por que soy animal que esta vivo");
  }
  saludar() {
    console.log(`Hola, soy un animal de la raza ${this.raza}`);
  }
}

const firulais_n = new Animal("Saluki", "macho");
console.log(firulais_n);
firulais_n.saludar();
firulais_n.sonar();

// Herencia
class Perro extends Animal {
  constructor(raza, genero, edad) {
    // con el metodo super() se manda a llamar el constructor de la clase padre
    super(raza, genero);
    this.edad = edad;
    this.tamanio = null;
  }
  // Metodos
  sonar() {
    console.log("Soy un perro y mi sonido es un ladrido");
  }
  ladrar() {
    console.log("Guauuu Guauuu !!!");
  }
  static queEres() {
    console.log(
      "Los perros son animales mamiferos que son pertenecientes a la familia de los caninos. Se les consideran como los mejores amigos del hombre"
    );
  }
  // Los setters y getters son metodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase.
  get getTamanio() {
    return this.tamanio;
  }

  set setTamanio(tamanio) {
    this.tamanio = tamanio;
  }
}

Perro.queEres();

const boby = new Perro("chiwawa", "macho", 2);
console.log(boby);
boby.saludar();
boby.sonar();
boby.ladrar();

// GETTERS AND SETTER SON PROPIEDADES
// Metodo get y set, obtenedor y dar en js lo convierte en una propiedad(es tratado como un atributo)
console.log(boby.getTamanio);
boby.setTamanio = "pequenio";
console.log(boby.getTamanio);
