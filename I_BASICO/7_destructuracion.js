const numero = [1, 2, 3];
// Sin destructuracion
let uno = numero[0],
  dos = numero[1],
  tres = numero[2];
console.log(uno, dos, tres);

// CON DESTRUCTURACION
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

let { nombre, apellido, edad } = persona;
console.log(nombre, apellido, edad);
