// Compuestos::. se accede a la referencia del valor
console.groupCollapsed("Tipos de datos: COMPUESTOS");
// FUNCIONES ::: ciudadanos de primer orden en JavaScript
console.group("FUNCIONES");
fDeclarada();
// funcion declarada:::::antes
function fDeclarada() {
  console.log(
    "Una funcion declarada: puede ser invocada antes o despues de declarar la funcion (Hoisting)"
  );
}
fDeclarada();

// funcion expresada  --- funcion anonima:::::desde Ecma script 6
let fExpresada = function () {
  console.log(
    "Una funcion Expresada: solo puede ser invocada despues de asignar la funcion a la variable determinada"
  );
  return "fExpresada:: asignado a una variable";
};
let saludo = fExpresada();
console.log(saludo);
console.groupEnd();

// ARRAY
console.group("ARRAY");
const fruits = ["Orange", "Banana", "Apple"];
console.log(fruits);
// const arrObj = new Array(3, 2, 1, true, false, "new");
// console.log(arrObj);:::::forma antigua ya nadie utiliza

const arr = Array.of("X", "Y", "Z", 9, 8, 7);
console.log(arr);

const determinate = Array(100).fill(true);
console.log(determinate);

fruits.forEach((fruit, index) => {
  console.log(`<li id="${index}">${fruit}</li>`);
}); // callBack
// forEach es una funcion internamente del objeto array:::metodo

console.groupEnd();
////////////////////////////////
// OBJETOS
const objeto = {
  atributo: "propiedad",
  metodo() {},
};

console.group("OBJETOS");
const obj = new Object(); // Igual Ya no se usa mas
console.log(obj);

const Ian = {
  nam: "Ian",
  surnam: "silva",
  age: 22,
  hobby: ["run", "exercise", "project"],
  soltero: true,
  contacto: {
    email: "ivansfuerza@gmail.com",
    x: "@ivansfuerza",
    movil: "51913131785",
  },
  saludar: function () {
    console.log("Hola :)");
  },
  arrowFunction: () => {
    console.log("arrow Function, a qui si. Pero en clases no");
  },
  givesMyName() {
    console.log(
      `New kind to create a method: Your name is ${this.nam} ${this.surnam} and you're ${this.age} years old, you can be followed as ${this.contacto.x} in x`
    );
    // aqui this es el mismo objeto
  },
};
console.log(Ian);

// nombre
console.log(Ian["nam"]);
console.log(Ian.nam);

// hobby
console.log(Ian.hobby);
console.log(Ian.hobby[2]);

// contacto
console.log(Ian.contacto);
console.log(Ian.contacto.movil);

// Un metodo que arroja un texto
Ian.givesMyName();
// METODOS DE OBJETOS
// Una array de keys; y otro solo de los valores
console.log(Object.keys(Ian));
console.log(Object.values(Ian));

// Preguntar si tien la propiedad
console.log(Ian.hasOwnProperty("age"));

// ver mas propiedades y metodos de los objetos en mdn ......

console.groupEnd();
// CLASS
console.groupEnd();
