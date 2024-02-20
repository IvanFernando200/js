/* 
Cortocircuito OR - cuando el valor de la izquierda en la expresion siempre puecia valida a true, es el valor que se cargara por defecto

Cortocircuito AND - cuando el valor de la izquierda en la expresion se pueda validar a false, es el valor que se cargara por defecto
*/
function saludar(nombre) {
  nombre = nombre || "Deconocido";
  console.log(`Hola ${nombre}`);
}
saludar("Ian");
saludar();
// De la izquierda
console.log(true || "Valor de la derecha");
console.log("cadena" || "Valor de la derecha");
console.log(19 || "Valor de la derecha");
console.log(-2 || "Valor de la derecha");
console.log([] || "Valor de la derecha");
console.log({} || "Valor de la derecha");
// De la derecha
console.log(false || "Valor de la derecha");
console.log(null || "Valor de la derecha");
console.log(undefined || "Valor de la derecha");
console.log("" || "Valor de la derecha");
console.log(0 || "Valor de la derecha");

// && Es la inversa de ||

/* if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity) */

/* if (false) {
  // Not reachable
}
if (null) {
  // Not reachable
}
if (undefined) {
  // Not reachable
}
if (0) {
  // Not reachable
}
if (-0) {
  // Not reachable
}
if (0n) {
  // Not reachable
}
if (NaN) {
  // Not reachable
}
if ("") {
  // Not reachable
} */
