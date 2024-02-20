// OBJETO DATE
console.log(Date);
console.dir(console.dir);

console.log(Array);
console.dir(Array);

const arr = Array.of("X", "Y", "Z", 9, 8, 7);
console.log(arr);

const determinate = Array(100).fill(true);
console.log(determinate);

let fecha = new Date();
console.log(fecha); // Tue Oct 31 2023 17:23:11 GMT-0500 (hora estándar de Perú)
console.log(fecha.getTime()); // .........en milisegundos
console.log(fecha.getDate()); // 31
console.log(fecha.getDay()); // 2
console.log(fecha.getMonth()); // 9

console.log(fecha.getYear()); // 123 == (2023-1900)
console.log(fecha.getFullYear()); // 2023
console.log(fecha.getUTCFullYear()); // 2023

console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());

console.log(fecha.toString()); // Tue Oct 31 2023 17:34:28 GMT-0500 (hora estándar de Perú)
console.log(fecha.toDateString()); // Tue Oct 31 2023

console.log(fecha.toLocaleString()); // 31/10/2023, 17:37:47
console.log(fecha.toLocaleDateString()); // 31/10/2023
console.log(fecha.toLocaleTimeString()); // 17:37:47

console.log(fecha.getTimezoneOffset()); // 300

console.log("Hora del meridiano cero: UTC, meridiano de greguich");
console.log(fecha.getUTCHours(), fecha.getUTCMinutes(), fecha.getUTCSeconds());

console.log(fecha.getHours(), fecha.getMinutes(), fecha.getSeconds());

// FECHA TIME STAMP
console.log(Date.now()); // 1698792602252; segundos que han transcurrido desde el 01/01/1970

// MI FECHA DE NACIMIENTO
let cumpleIan = new Date(2002, 5, 7);
console.log(cumpleIan);
