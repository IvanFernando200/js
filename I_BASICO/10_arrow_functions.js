// Funciones declaradas y expresadas
// Funciones anonimas
// Funcion declarada
function fDeclarada() {
  console.log("Funcion Declarada");
} // Tiene hosting::puede ser llamada en cualquier momento incluido antes

// Funcion expresada
const fExpresada = function () {
  console.log("Ahha esto es una funcion expresada");
}; // No puede ser llamada antes de crear la funcion

// ARROW FUNCTION
const arrowF = () => {
  console.log("Usando arrow function");
};
arrowF();
// mult
const mult = (a) => a * 50;
console.log(mult(6));
//
const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function (n) {
  console.log(n);
});

numeros.forEach((number, index) =>
  console.log(`${number} esta en la posicion ${index}`)
);
// this > segun el contexto donde se encuentra: objeto funcion y {}
function prueba() {
  console.log(this);
} // this === Objeto window
prueba();

let perro = {
  nombre: "Tatke",
  ladrar: function () {
    console.log(this);
  },
}; // this === Objeto perro
perro.ladrar();

let dog = {
  nombre: "Tatke",
  ladrar: () => {
    console.log(this);
  },
}; // this === Objeto window
dog.ladrar();
// Por eso no es recomendable usar un arrow function al crear un metodo

// bin call apply:::funciones que nos permieten enlasar a un metodo o a un objeto

// MEJORADO
let perr = {
  nombre: "Tatke",
  ladrar() {
    console.log(this);
  },
}; // this === Objeto perro
perr.ladrar();
