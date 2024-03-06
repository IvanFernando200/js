// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

function esPrimo(numero = undefined) {
  if (numero === undefined) return "Ingresa un numero";
  if (typeof numero !== "number") return "El valor que ingreso no es un numero";
  // Los números menores o iguales a 1 no son primos
  if (Math.sign(numero) === -1) return "Deve ingresar valores positivos";
  if (numero === 0) return "numero No puede ser 0";
  if (numero === 1) return "numero No puede ser 1";
  // Verificar si el número es divisible por algún otro número, excluyendo 1 y el propio número
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return `El numero ${numero} no es primo, por lo tanto ${false}`; // No es primo
    }
  }
  return `El numero ${numero} es primo, por lo tanto ${true}`; // Es primo
}
console.log(esPrimo(7)); // Devuelve true, ya que 5 es primo

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const isParOImPar = (number = undefined) => {
  if (number === undefined) return "Ingresa un numero";
  if (typeof number !== "number") return "El valor que ingreso no es un numero";
  return number % 2 === 0
    ? `El numero ${number}, es un numero Par`
    : `El numero ${number}, es un numero Impar`;
};
console.log(isParOImPar(29)); // El numero 29, es un numero Impar
// 2(n) ---par
// 2(n)+1 ---impar

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const fahrToCel$celToFahr = (temperature = undefined, unit = undefined) => {
  if (typeof temperature !== "number" || (unit !== "C" && unit !== "F")) {
    throw new Error(
      "Invalid input. Please provide a valid temperature and unit."
    );
  }
  //  (unit !== "C" && unit !== "F") ===> !/C|F/.test(unit))
  if (unit === "C") {
    return `${temperature}°C = ${Math.round((temperature * 9) / 5 + 32)}°F`;
    // F=(9°F/5°C)C+32°F   ----> (temperature * 9/5) + 32;
  }
  if (unit === "F") {
    return `${temperature}°F = ${Math.round(((temperature - 32) * 5) / 9)}°C`;
    // C=(F-32°F)(5°C/9°F) -----> (temperature - 32) * 5/9;
  }
};
console.log(fahrToCel$celToFahr(212, "F")); // 212°F
