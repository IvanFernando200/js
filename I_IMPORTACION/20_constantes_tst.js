export const PI = Math.PI;

export let usuario = "Ian";
let password = "nextscript";

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

export const aritmetica = {
  sumar,
  restar, 
};

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
const motivation = function () {
  console.log(
    "Vamos chico, tu puedes ya estas lejos de como comenzaste, sigue adelante::: esto esta hecho con funcion expresada usando const; osea despues de declarar e inicializar fue exportada"
  );
};
export default motivation;

// TODO EL RESTO SE PUEDE EXPORTAR EN LA MISMA FILA
export class Saludo {
  constructor() {
    console.log("Saludos a todo el mundo con class");
  }
}
export function nada() {
  console.log("No se nadar; veamos esta funcion declarada");
}

export const numero = function () {
  console.log(200);
};
