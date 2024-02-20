{
  // DESTRUCTURACION
  // Array:
  let [one, two, three] = numero;
  console.log(one, two, three);

  // Objetos:
  const persona = {
    nombre: "Ian",
    apellido: "Silva",
    edad: 22,
  };
  // Ojo al declarar las variable usando destructuracion en un objeto, se tien que usar los mismos nombres de sus atributos.
  let { nombre, apellido } = persona;
  console.log(nombre, apellido);

  const { edad, ...restPerson } = persona;
  console.log(edad); // 22 {nombre: 'Ian', apellido: 'Silva'}
}
{
  // REST
  function suma(...a) {
    console.log(a); // [3.5, 4, 7, 4, 3.2]
  }
  suma(3.5, 4, 7, 4, 3.2);

  // SPRED
  const arra = [3, 6, 3];
  console.log(arra.join(""));
  const newArray = [1, 1, 1, ...arra];
  console.log(newArray);

  const [first, ...others] = arra;
  console.log(others); // [6,3]
  // ARGUMENTS
  function foo() {
    for (var i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
    }
  }

  foo(1, 2, 3);
  //1
  //2
  //3
}

// falsy values: false, 0, -0, 0n, null, undefined, NaN, and the empty string ""
Boolean(false); // false
Boolean(0); // false
Boolean(-0); // false
Boolean(0n); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // false
Boolean(""); // false
document.all; // false
typeof Boolean(""); // boolean

// truthy values: true, 1, -1, 1n, -1n, Infinity, -Infinity, " ", {}, []
Boolean(true); // true
Boolean(1); // true
Boolean(-1); // true
Boolean(1n); // true
Boolean(-1n); // true
Boolean(Infinity); // true
Boolean(-Infinity); // true
Boolean(" "); // true
Boolean({}); // true
Boolean([]); // true
Boolean("foo"); // true
Boolean(new Date()); // true
typeof Boolean([]); // boolean

//Here is a list of built-in number methods in JavaScript.
// NUMBERS:
// 1e-2 === 0.01
// isNaN()
// isFinite()
// Objeto------> Number
Number.isNaN("abc" * 5); // true
Number.isNaN("abc" + 5); // false
Number.isFinite(1 / 0); // false
Number.isFinite(124); // true
Number.isInteger(4.5); // false
Number.isInteger(4); // true
parseInt("83.43883 mxn"); // 83
parseInt(43.493494); // 43
// Number()
// Number.parseFloat(#)
// Number.parseFloat('#')
// parseFloat(#)
// parseInt(#)---pasar strin a number-- o de base especificada a base 10---->parseInt('888',15) //1928
// isSafeInteger()
// Number.parseInt
let mill = 1000000;
mill.toExponential(); // 1e+6
Math.PI.toFixed(3); // 3.142
Math.PI.toPrecision(5); // 3.1416
// toString()
// toLocaleString()	returns a string with a language sensitive representation of a number
let n = new Number(5);
n.valueOf(); // 5
{
  // Academlo
  // NUMBERS:
  parseInt("43.9283838 mxn"); // 44
  parseInt(43.9283838); // 44
  parseFloat(43.9283838); // 43.9283838

  (43.9283838).toFixed(2); // 43.92

  Number.isNaN("abc" * 5); // true
  Number.isNaN("abc" + 5); // false

  Number.isFinite(1 / 0); // false
  Number.isFinite(123); // true

  Number.isInteger(6.5); // false
  Number.isInteger(6); // true
  // MATH:
  // property
  Math.PI;
  // method
  Math.round(4.3);
  Math.ceil(3.4344);
  Math.floor(4.4553);
  Math.max(2, 4, 7, 3, 0);
  Math.mim(2, 4, 7, 3, 0);
  Math.trunc();
  // Strings
  let text1 = "I can use it, what can you do";
  // chatAt and at ---> al no enviar nada por defecto la primera palabra
  text1.charAt(3); // a; cuando no existe su indice me devuelve ' '
  text1.charAt(43); // ' '
  text1.charAt(-2); // No permite negativos
  text1.at(-2); // i;
  text1.at(43); // undefined

  text1.indexOf("c"); // 2
  text1.indexOf("c", 6); // 19
  text1.indexOf("z"); // -1; cuando no encuentra
  text1.lastIndexOf();

  text1.includes("hola", Index);
  text1.includes("hola", Index);
  text1.startsWith("soy", 5);
  text1.endsWith("hola", 22);

  text1.toUpperCase();
  text1.toLowerCase();

  // string to array
  text1.substring(0); // devuelve toda la cadena de texto
  text1.slice();

  text1.split("true");
  text.trim();
  text1.replace(valo, nuevoValor);
  text1.repeat(4);
}

// MATH
let x = 3;
let y = 4;
let z = 6;
v = Math.pow(x, 2); // x.exp(2) == 9
console.log(v);
// abs()
Math.round(4.6); // 5
Math.ceil(6.3); // 7
Math.floor(3.7); // 3
// MAX && MIN:
let maximum = Math.max(x, y, z);
console.log(maximum); // 6
let minimum = Math.min(x, y, z);
console.log(minimum); // 3
Math.random(); //-----> a random number 0-1
// Consume menos recursos que el parseInt
Math.trunc("49.8388323 mxn"); // NaN
Math.trunc("49.8388323"); // 50
Math.trunc(49.8388323); // 50

// STRING METHODS
n = 56;
n.toString(); // '56'
// De base 10 a otra base
n.toString(2); // '111000'
// String length
const text1 = "hello";
const text2 = "world";
text1.charAt(1); // e ----->no utiliza valores negativos ''
text1.at(-1); //o -----> igual que charAt pero tambien utiliza valores negativos
text1.charCodeAt(1); // 101
text1.concat(text2); // helloworld
text1.endsWith("o"); // true
String.fromCharCode(101); // e
text1.includes("l"); // true
text1.indexOf("l"); // 2
text1.indexOf("l", 0); // 2
text1.lastIndexOf("l"); // 3
text1.match(/l/g); // ["l","l"] ........
text1.match(/llo/); // ['llo',index: 2, input: 'hello', groups: undefined];
text1.match(/w/); // null
// matchAll
text1.repeat(3); // hellohellohello
// text1.replace(/l/gi, "lalala");
text1.replace("ll", "ter"); // hetero
text1.replace(/l/g, "ter"); // heterterlo ---g global means all of the considence
// gi --- means all and i>> insensitive; so uppercase and lowercase; doen't matter
text1.replace("ll", (match) => {
  return match.toUpperCase();
}); // heLLo
// replaceAll
let sentence = "tu abuela fue una zorra";
// sentence.replace(" ",",") // tu,abuela fue una zorra
sentence.replaceAll(" ", ","); // tu,abuela,fue,una,zorra
text1.search("o"); // 4
text1.slice(-1); // o
text1.slice(1, 4); // ell
text1.split(); // ["hello"]
text1.split(""); // ["h","e","l","l","o"]
text1.startsWith("he"); // true
text1.substring(1, 4); // ell ---- igual que slice pero no permite numeros negativos
text1.toLowerCase(); // hello
text1.toUpperCase(); // HELLO
let txt = "  yes   ";
txt.trim(); // yes
text1.padStart(6); // " hello";
text1.padStart(10, "ell"); // "ellelhello"

// ARRAY METHODS: filter, find, map, reduce
// Array length
// Declarar Array
new Array(3, 2, 1, true, false, "new"); // 3,2,1,true,false,'new' ------->Forma antigua
Array.of("X", "Y", "Z", 9, 8, 7); // 'X','Y','Z'
Array(3).fill(true); // [ true, true, true]

// Array delete()
[20, 40, 3, 6].forEach((n) => console.log(n));
[1, 2, 3].isArray; // true
[1, 2, 3].valueOf(); // [ 1, 2, 3]
[1, 2, 3].push(4); // [1, 2, 3, 4]
[1, 2, 3].pop(); // [1, 2]
[1, 2, 3].shift(); // [2, 3]
[1, 2, 3].unshift(0); // [0, 1, 2, 3]
["a", "b"].concat("c", ["d", "j"]); // ['a', 'b', 'c'. 'd','j']
["a", "b", "c"].join("-"); // a-b-c
["a", "b", "c"].slice(1); // ['b', 'c']
["a", "b", "c", "d"].slice(1, 2); // ['b', 'c']
["a", "b", "c"].indexOf("b"); // 1
["a", "b", "c"].includes("c"); // true
[1, 2, 3, 4, 5, 6].copyWithin(2); // [1, 2, 1, 2, 3, 4]
[3, 5, 6, 8].find((n) => n % 2 === 0); // 6
[2, 4, 3, 5].findIndex((n) => n % 2 !== 0); // 2
[3, 4, 8, 6].map((n) => n * 2); // [6, 8, 16, 12]
[1, 4, 7, 8].filter((n) => n % 2 === 0); // [4, 8]
[1, false, 8, false, 1, 9].filter(Boolean); // ¨[1, 8, 1, 9]

[2, 4, 3, 7].reduce((acc, cur) => {
  return acc + cur;
}, 0); // 16
// reduceRight((acc,cur)=>{},0)---just form right to left
[2, 3, 4, 5].every((x) => x < 6); // true
[3, 5, 6, 8].some((n) => n > 6); // true
[1, 2, 3, 4].reverse(); // [4, 3, 2, 1]
[3, 5, 7, 8].at(-2); // 7
// sort()
[1, 5, 80, 9, 6].sort(); // [ 1, 5, 6, 80, 9]
[1, 5, 80, 9, 6].sort((a, b) => a - b); // [ 1, 5, 6, 9, 80]

// flat()
[1, 2, (3)[(4, [5, [6]])]].flat(); // [ 1, 2, 3, 4[ 5,[6]]];
[1, 2, (3)[(4, [5, [6]])]].flat(3); // [ 1, 2, 3, 4, 5, 6];
// .flat(Infinity)
// Obtener un array con solo al multiplicacion de los numeros Impares
[1, 2, 3, 4, 5, 6].filter((n) => n % 2 !== 0).map((n) => n * 2); // [2, 6, 10]
// flatMap()	map().flat()
[1, 2, 3, 4, 5, 6].flatMap((n) => (n % 2 === 0 ? [] : [n * 2])); // [2, 6, 10]

//fill(thing, initIndex, lastIndex)
Array(3).fill(true); // [ true, true, true]

// from()
const str = "1234";
Array.from(str); // [ "1", "2", "3", "4"]
Array.from(str, (element) => Number(element)); // [ 1, 2, 3, 4]

// splice(index,cantidad a eliminar, elemnetos a añadir)
// splice() --modify the array
let st = [3, 4, 6, 8, 4, 2];
st.splice(2, 3, "Hello"); // [6,8,4]
st; // now: [3,4,"Hello",2]

let stuff = ["A", "B", "C", "D", "E", "F"];
stuff.splice(2); // ['C', 'D', 'E', 'F']
stuff.splice(2, 2); // ['C', 'D']
stuff.splice(2, 3, "Hello"); //return: ['C', 'D', 'E']
//NOW: stuff = ['A', 'B', 'Hello', 'F']

// slice(indice, hasta esta posicion sin incluir)
stuff.slice(2); // same as splice but doesn't modify the original array
// ['C', 'D', 'E', 'F']
stuff.slice(2, 5); // ['C','D','E']

stuff.toString(); // "A,B,C,D,E,F"
stuff.includes("G"); // false
stuff.at(-1); // 'F'

// Object.keys()
// constructor	Returns the function t                                hat created the Array object's prototype
// prototype	Allows you to add properties and methods to an Array object
for (let value of [3, 7, 4].values()) {
  console.log(value);
} // 3 7 4  each of the numbers in its own line

for (let element of [3, 7, 4].entries()) {
  console.log(element);
} // [0, 3] [1, 7] [2, 4] each of the new arrays in its own line

/// OBJECTS IN JAVASCRIPT
const testScore = {
  damon: 89,
  shawn: 91,
  keenan: 80,
  kim: 89,
};

Object.keys(testScore); // gives all keys: [ 'damon', 'shawn', 'keenan', 'kim' ] --strings
Object.values(testScore); // gives all values: [ 89, 91, 80, 89 ]
Object.entries(testScore); // gives nested arrays of key-value pairs: [ [ 'damon', 89 ], [ 'shawn', 91 ], [ 'keenan', 80 ], [ 'kim', 89 ] ]

// YOU CAN USE ( FOR-IN )  LOOP FOR ITERATION OVER OBJECTS
for (let person in testScore) {
  console.log(testScore[person]);
}

testScore.hasOwnProperty("shadow"); // true

// WE CAN'T DIRECTLY USE ( FOR-OF ) LOOP IN OBJECTS BUT WE CAN DO with THIS:
for (let score of Object.values(testScore)) {
  console.log(score); // 89 91 80 89
}

// Clonar Objetos
const cloneObject = {};
// sirve para clonar objetos solo de primer orden si tiene mas objetos dentro de sim mismo tenemos problemas, al cambiar luego sus valores: como la modificacion de ambas al mismo tiempo, por ende no nos seria util en ese caso.
// solucion para este problema, JSON.parse(JSON.stringify(cloneObject))
Object.assign(cloneObject, testScore, { kim: 94 });
Object.assign(cloneObject, { loppy: 82 });
// el objeto que le añade si existe la propiedad lo reasigna.
// Si no existe esa propiedad la agrega
console.log(cloneObject);

// Array to object
const persona = [
  ["name", "Jose"],
  ["age", 23],
];
// La inversa de entries----Obtener objeto a partir de array
Object.fromEntries(persona, { student: true }); // {name:'Jose',age:23, student: true}

// Congelar, no se puede ni cambiar ni acceder otro codigo
Object.freeze(persona);

Object.isFrozen(persona); // true
// Seal: permite modfificar los valores existentes, pero no permite eliminar ni agregar
Object.seal(persona);
persona["age"] = 40; /// si es posible
delete persona["name"]; /// no es posible
Object.isSealed(persona); //true

console.log("............................");
// NEXT.JS
// array.toReversed();
// array.toSorted()
// array.toSpliced(2,1)
// Array.width(1,2)

// par 2(n)
// impar 1+2(n)
{
  // CONSOLE
  console.table(Object.entries(console).sort());
  // Objeto a array -----> usamos generalmente para pasar objetos complejos a array

  console.time("Cuanto tiempo tarda");
  // CONTAR LA CANTIDAD DE EJECUCION
  for (let i = 0; i <= 10; i++) {
    console.count("codigo for");
    // console.countReset();
    console.log(i);
  }
  console.timeEnd("Cuanto tiempo tarda");
  {
    // PRUEBA
    let x = 6,
      y = 2,
      pruebaXY = "Se espera que X siempre sea menor que Y";
    console.assert(x < y, { x, y, pruebaXY });
  }
  // console.time() ---empieza a contar
  // console.timeLog() ----- muestra el tiempo que transcurrio desde el console.time()
  // console.timeEnd() -----finaliza conteo
  // style en la consola
  console.log(
    "%cdalto",
    "color: white; background: black; padding: 50px 100px; border: 3px solid blue;"
  );
}

{
  // Date
  console.log(fecha.toLocaleString()); // 31/10/2023, 17:37:47
  console.log(fecha.toLocaleTimeString()); // 17:37:47
  console.log(fecha.getTime()); // .........en milisegundos---NO SE RECOMIENDA🚫

  // FECHA TIME STAMP
  console.log(Date.now()); // 1698792602252; segundos que han transcurrido desde el 01/01/1970 --- SE RECOMIENDA✅

  // MI FECHA DE NACIMIENTO
  let cumpleIan = new Date(2002, 5, 7);
  console.log(cumpleIan);
}
{
  // Math
  // Random ::: un numero aleatorio de 0-1
  console.log(Math.random());

  console.log(Math.abs(-7.8)); // 7.8

  console.log(Math.ceil(7.2)); // 8
  console.log(Math.floor(7.8)); // 7
  console.log(Math.round(7.5)); // 8

  // console.log(Math.pow(bace,potencia));
  console.log(Math.pow(3, 4)); // 3^4 == 81

  // ver si el numero es positivo o negativo
  console.log(Math.sign(-4.7)); // -1
  // max()
  document.write(Math.min(30, 3, 4, 10, 20, 80, 74, 32) + "<br>"); //3
  // min()
  document.write(Math.max(30, 3, 4, 10, 20, 80, 74, 32) + "<br>"); //80
}

// OPERADORES DE CORTO CIRCUITO
// Para react ---- renderisado de componentes dinamicos
// DISCRIMINA-a-los falsy: null undefined NaN '' false 0
// || TIENDEN A TRUE SE EJECUTAN
// (true||'buen momento') ---> (true) izquierda tiende a true
// (false||'buen momento')----> ('buen momento') derecha porque de la derecha tiende a falsa

// && TIENDEN A FALSE SE EJECUTAN
// (true&&'buen momento') ---> 'buen momento
// (false&&'buen momento') ---> false

// ?? NULLISH
// como el || pero solo >>>DISCRIMINA-solo-a: null undefined
// (0??'buen momento') ---> (0)
// (null??false)----->(false)

// PARA || and &&---> AL HABER MAS VALORES FALSY y truly
// || ----> Regresa el primer valor que tiende a verdadero, Y Al ultimo que tiende a falso
// 0||' '||'' --->(' ')
// undefined||null|NaN||0||false----->(false)
// &&---> Regresa al primer valor false y Al ultimo verdadero
// undefined&&null&&NaN&&0&&false&&''---->(undefined)
// null&&'hola'&&234---->(null)


{
  // Regular expresion
  let cadena = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta est, et non enim odit dolorum dolore molestias animi dolores lorem cupiditate, atque voluptatibus praesentium ab quasi molestiae magnam repudiandae aspernatur vel.`;
  let expReg = new RegExp("lorem", "ig");
  let expReg2 = /\dlorem/i; // i : ignora mayuscula e minuscula && g: se queda con la ultima considencia
  console.log(expReg2.test(cadena)); // true
  console.log(expReg2.exec(cadena)); // devuelve un arreglo --->con mas detalles index, etc

  console.dir(RegExp);

  console.log(window);
}

((d, w, c) => {
  console.log(d);
  console.log(w);
  console.log(c);
  c.log("Este es un console.log");
})(document, window, console);

{
  // Export-----------------------------------------
  // SOLO PARA DEFAULT:
  // Solo se puede hacer una exportacion de manera default
  // Solo las clases y funciones declaradas de pueden exportar como default en la misma linea; osea por el hosting.
  /* export default function saludar() {
  console.log("Hola con function declarada");
} */
  /* export default class Saludo {
  constructor() {
    console.log("Saludos a todo el mundo con class");
  }
} */

  // funcion declarada(){}
  // const expresada = function(){}

  // const o let ::: primero asignacio y luego exportar

  // const motivation = function () {
  //   console.log(
  //     "Vamos chico, tu puedes ya estas lejos de como comenzaste, sigue adelante::: esto esta hecho con funcion expresada usando const; osea despues de declarar fue exportada"
  //   );
  // };
  // export default motivation;

  // TODO EL RESTO SE PUEDE EXPORTAR EN LA MISMA FILA

  // Import ---------------------------------------------
  {
    // 1) Script va al final en html antes del </body>
    // 2) IMPORTANTE EL type="module"
    // 3) Los import van antes de mi codigo
  }

  {
    // 4) EN EL LUGAR DONDE SE EXPORTA
    // Solo para exportar por default:
    // funcion declarada(){} :: en la misma linea
    // const expresada = function(){} :: en la siguiente linea
    // Solo una funcion o variable puede ser exportada por default
  }
  {
    // 5) LUGAR DONDE SE IMPORTA
    // puedo usar as para ponerle otro nombre a mi funcion o variable
  }
  {
    // EJEMPLO MAS ESTILULANTE DE IMPORT
    // import React, { Component } from "react";
  }
}

// la primera palabra
"hola mundo marabilloso".split(" ", 1).join();
"hola mundo marabilloso".split(" ")[0];

// La penultima
"hola mundo marabilloso".split(" ").at(-2);
"hola mundo marabilloso".split(" ").reverse()[1];

