// Prototipos
/* 
POO
Clases- Modelo a seguir
Objetos- Es una instancia de una clase
  Atrigutos-s una caracteristica o propiedad del objeto( son variables dentro de un objeto)
  Metodos - Son las acciones que un objeto puede realizar ( son funciones dentro de un objeto)
*/
// Funcion constructora

/* function Animal(nombre, genero) {
  // Atributos
  this.nombre = nombre;
  this.genero = genero;
  // Metodos
  this.sonar = function () {
    console.log("Hago sonidos por que estoy vivo");
  };
  this.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`);
  };
}
 */

// Funcion constructora mejorada; Donde asignamos los metodos al prototipo, no a la funcion como tal.
function Animal(nombre, genero) {
  // Atributos
  this.nombre = nombre;
  this.genero = genero;
}

// Metodos agregados al prototipo de la funcion constructora
Animal.prototype.sonar = function () {
  console.log("Hago sonidos por que estoy vivo");
};
Animal.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre}`);
};

// Herencia Prototipica
function Perro(nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}

// Perro esta heredado de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;
// Sobreescritura de metodo del Prototipo padre en el hijo
Perro.prototype.sonar = function () {
  console.log("Soy un perro y mi sonido es un ladrido");
};
Perro.prototype.ladrar = function () {
  console.log("Guauuu Guauuu !!!");
};
/* Perro.prototype.ladrar = function () {
  console.log("wiwo woie woie!!!");
}; */
const boxBunny = new Animal("box Bunny", "male");
console.log(boxBunny);

boxBunny.sonar();
boxBunny.saludar();

const boby = new Perro("Boby", "Macho", "mediano");
console.log(boby);

boby.saludar();
boby.sonar();
boby.ladrar();
/* // Objetos
const objeto = {
  atributo: "propiedad",
  metodo() {},
}; */
