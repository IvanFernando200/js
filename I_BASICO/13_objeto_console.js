// OBJETO CONSOLE
// class> constructor + metodo
// Herencia: class>(constructor>super)+metodo
console.log(console);
console.log(console.memory);

console.groupCollapsed("error, warn, info, log");
console.error("Esto es un erro: console.error()");
console.warn("Esto es un aviso: console.warn()");
console.info("Esto es un mensaje informativo: console.info()");
console.log(
  "Un registro de lo que ha pasado en nuestra aplicacion: console.log()"
);
console.groupEnd();

console.groupCollapsed("Propiedades y Objeto window mas Objeto document");
let nombre = "Jon",
  apellido = "MirCha",
  edad = 35;
console.log(nombre, apellido, edad);
console.log(`Hola mi nombre es ${nombre}${apellido} y tengo ${edad} años`);

console.log(`Hola mi nombre es %s %s y tengo %d años.`, nombre, apellido, edad);

console.log(window);
console.log(document);

// dir : es para ver las propiedades y los metodos
console.dir(window); //en el caso de window, es igual
console.dir(document);
console.groupEnd();

// TABLAS
console.log(console);
console.table(Object.entries(console).sort());
// .sort() --- ordenar mi array
// ARRAYS
const fruits = ["apple", "orange", "banana", "pear"];
console.table(fruits.sort());
// OBJETOS
const perro = {
  nombre: "boby",
  raza: "chiwawa",
  color: "negro",
  edad: 2,
};
console.table(perro);

console.time("Cuanto tiempo tarda mi codigo");
const arreglo = Array(1000000);
for (let i = 0; i < arreglo.length; i++) {
  arreglo[i] = i;
}
// console.timeLog();
console.timeEnd("Cuanto tiempo tarda mi codigo");
console.log(arreglo);

console.time("Cuanto tiempo tarda");
// CONTAR LA CANTIDAD DE EJECUCION
for (let i = 0; i <= 10; i++) {
  console.count("codigo for");
  console.log(i);
}
console.timeEnd("Cuanto tiempo tarda");

// PRUEBA 
let x = 6,
  y = 2,
  pruebaXY = "Se espera que X siempre sea menor que Y";
console.assert(x < y, {x, y, pruebaXY});
