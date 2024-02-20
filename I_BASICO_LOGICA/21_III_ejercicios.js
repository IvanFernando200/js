// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const randomNumbers = () => Math.round(Math.random() * 100 + 500);
console.log(randomNumbers());
// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const isCapicua = (number = 0) =>
  !number
    ? "Insert a number"
    : Array.from(number.toString()).reverse().join("") === number.toString();
console.log(isCapicua(7887));

const numeroCapicua = (numb = 0) => {
  if (!numb) return console.warn("ingresa un numero");
  if (typeof numb !== "number")
    return console.error(`El valor ${numb} ingredado, No es un numero`);
  let number = numb.toString();
  let reverseNumber = number.split("").reverse().join("");
  return number === reverseNumber
    ? console.info(
        `Si numero ${number} es caplicúa, a la inversa es ${reverseNumber}`
      )
    : console.info(`No el numero ${number} no es un numero capicúa`);
};
numeroCapicua();

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const factorial = (number = undefined) => {
  if (number === undefined) return "Insert a number";
  if (!Number.isInteger(number)) return "you can just insert a number here"; // solo permite numeros positivos y negativos
  if (Math.sign(number) === -1) return "is necesary a positive number";
  if (number === 0 || number === 1) return 1;
  return number * factorial(number - 1);
};
console.log(factorial(5));

const numberFactorial = (number = undefined) => {
  if (number === undefined) return "No ingresaste un numero";
  if (typeof number !== "number") 
    return `El valor ${number}ingresado no es un numero`;// permite numeros positivos y negativos
  if (Math.sign(number) === -1) return "Ingresa un numero positivo";
  // number < 0
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return `El factorial de ${number} es ${result}`;
};
console.log(numberFactorial(4));
///////////////////////////////////////
let n = 10;
let acc = 1;
for (let i = n; i > 1; i--) {
  acc *= i;
}
console.log(
  "Factorial de " + n + " es " + acc + " ------>!Esta no es una funcion"
);
////////////////////////////////////
const num = 10;
console.log(Array.from({ length: num }, (_, index) => index + 1));
function calcularFactorial(numero) {
  return numero > 1
    ? Array.from({ length: numero }, (_, index) => index + 1).reduce(
        (acc, curr) => acc * curr,
        1
      )
    : 1;
}
// Ejemplo de uso
var numero = 5;
var resultado = calcularFactorial(numero);
console.log("El factorial de " + numero + " es: " + resultado);

// console.dir(document);
// console.dir(window);
console.dir(console);