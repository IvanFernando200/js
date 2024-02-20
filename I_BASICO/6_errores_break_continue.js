// CONTROL DE ERRORES
"use strict";
console.groupCollapsed("CONTROL DE ERRORES");
try {
  console.log("En el Try se agrega el codigo a evaluar");
  noExiste;
  console.log("Segundo mensaje en ele try");
} catch (error) {
  console.log(
    "Catch, captura cualquier error surgido o lanzado en el try " + error
  );
} finally {
  console.log(
    "El bloque finally se ejecutara siempre al final de unbloque try-catch"
  );
}
console.log("");
try {
  let numero = "p";
  if (isNaN(numero)) {
    throw new Error("El caracter introducido no es un Numero");
  }
  console.log(numero * numero);
} catch (error) {
  console.log(`Se produjo el siguiente error: ${error}`);
}

/* Break and continue */
console.group("break and continue: if-while-for-switch etc");
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = 0; i < numeros.length; i++) {
  if (i === 5) {
    break;
  }
  console.log(numeros[i]);
}
console.log(" ");
for (let i = 0; i < numeros.length; i++) {
  if (i === 5) {
    continue;
  }
  console.log(numeros[i]);
}
console.groupEnd();
console.groupEnd();
