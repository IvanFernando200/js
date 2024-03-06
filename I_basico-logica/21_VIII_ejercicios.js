// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const orderArrayAssDess = (arr = undefined) => {
  if (arr === undefined) return "No ingreso nada";
  if (!(arr instanceof Array))
    return "El valor que ingreso es incorrecto; Se permite solo arreglos";
  if (arr.lenght === 0) return "El arreglo no puede ser vacio";
  for (let num of arr) {
    if (typeof num !== "number")
      throw new Error(
        "El valor que ingreso no es un array de numeros por completo"
      );
  }
  // const array = arr;
  // const array2 = [...arr];

  // Ordenar sin datos repetitivos; El nuevo tipo de dato Set() no permite datos repepetidos
  return {
    asc: new Set([...arr].sort((a, b) => a - b)),
    desc: new Set([...arr].sort((a, b) => b - a)),
  };
};
console.log(orderArrayAssDess([7, 5, 7, 8, 6]));
// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
function eliminarRepetidos(arr = undefined) {
  if (arr === undefined) return "No ingreso nada";
  if (!(arr instanceof Array))
    return "El valor que ingreso es incorrecto; Se permite solo arreglos";
  if (arr.lenght === 0) return "El arreglo no puede ser vacio";
  if (arr.length === 1) return "El arreglo debe tener al menos 2 elementos";
  // METODO FILTER:
  // arr.filter((value, index, self) => self.indexOf(value) === index);
  return [...new Set(arr)];
  // return Array.from(new Set(arr));
}
console.log(eliminarRepetidos(["x", 10, "x", 2, "10", 10, true, true]));
// Despues de dom y programacion asincrona: set, map, weekset, weekmap
// new Set();
// new Map();
// new WeakSet();
// new WeakMap();
// new Proxy();

// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
const promedio = (array = undefined) => {
  if (array === undefined) return "No ingreso nada";
  if (!(array instanceof Array))
    return "El valor que ingreso es incorrecto; Se permite solo arreglos";
  if (array.lenght === 0) return "El arreglo no puede ser vacio";
  for (let num of array) {
    if (typeof num !== "number")
      throw new Error(
        "El valor que ingreso no es un array de numeros por completo"
      );
  }
  return array.reduce((total, num, index, arr) => {
    total += num;
    if (index === arr.length - 1) {
      return `El promedio de ${arr.join("+")} es ${total / arr.length}`;
    } else {
      return total;
    }
  });
  // return array.reduce((acc, cur) => acc + cur, 0) / array.length;
};
console.log(promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
