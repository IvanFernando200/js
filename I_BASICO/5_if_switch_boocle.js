console.groupCollapsed("If_else_switch_BOOCLE");
// ESTRUCTURAS SE CONTROL:
// if(){} else{}
// Ejemplo de edad:
console.group("ESTRUCTURAS DE CONTROL");
let edad = 23;
if (edad >= 18 && edad < 100) {
  console.log("Sos mayor de edad");
} else if (edad >= 100 || edad <= 0) {
  console.log("No existes");
} else {
  console.log("Sos menor de edad");
}
// Ejemplo de hora
let hora = 5;
if (hora >= 0 && hora <= 5) {
  console.log("Dejame dormir");
} else if (hora >= 6 && hora <= 11) {
  console.log("Buenos dias");
} else if (hora >= 12 && hora <= 18) {
  console.log("Buenas tardes");
} else if (hora >= 19 && hora <= 23) {
  console.log("Buenas noches");
}
// OPERADOR TERNARIO(condicion?true:false).Para una sola linea de codigo::::si deseo usar mas de 2 lineas de codigo uso else if

let age = edad >= 18 ? "Eres mayor de edad" : "Eres menor de Edad";
console.log(age);
// SWITCH CASE
let day = 3;
// new Date().getDay();
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("El dia no existe");
    break;
}
console.groupEnd();

// CICLOS(BOCLES)
console.group("CICLOS(BOCLES)");
let contador = 1;
let array = [];
// while(){};
while (contador <= 100) {
  array.push(contador);
  contador += 2;
}
console.log(array);
// do{}while();
console.log(contador);
do {
  array.push(contador);
  contador++;
} while (contador <= 100);
console.log(array);


// For
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// FOR(...)
for (let i = 0; i < numbers.length; i++) {
  console.log("for(...) = " + numbers[i]);
}
// ARRAY FOR IN AND FOR OF
for (const key in numbers) {
  console.log("for(...in...) = " + numbers[key]);
}
for (const value of numbers) {
  console.log("for(...of...) = " + value);
}
console.log(Ian);

// OBJETOs -- FOR (IN)
/* En objectos no funciona (for of) */

for (const key in Ian) {
  console.log("for(...in...) = indice de objeto: " + key);
}
// STRINGS --FOR IN AND FOR OF:::ambas funcionan
let cadena = "HHHHHHello wwworlddddd";
for (const i of cadena) {
  console.log(i);
}

// For of (para cualquier  objeto en js que sea iterable (0,1,2,3,4,5))
console.groupEnd();
console.groupEnd();
