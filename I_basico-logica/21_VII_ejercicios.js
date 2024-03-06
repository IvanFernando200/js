// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const expArray = (array = undefined) => {
  if (array === undefined) return "No ingreso nada";
  if (!(array instanceof Array))
    return "El valor que ingreso es incorrecto; Se permite solo arreglos";
  if (array.lenght === 0) return "El arreglo no puede ser vacio";
  for (let num of array) {
    if (typeof num !== "number")
      throw new Error(
        "El array solo debe contener numeros"
      );
  }
  return array.map((element) => element ** 2);
};
console.log(expArray([1, 4, 5]));

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const minMax = (array = undefined) => {
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
  return [Math.max(...array), Math.min(...array)];
};
console.log(minMax([1, 4, 5, 99, -60]));
// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const objWithTwoArr = (array = undefined) => {
  if (array === undefined) return "No ingreso nada";
  // if (!Array.isArray(array) || array === null) {
  //   throw new Error("Invalid input. Please provide a valid array.");
  // }
  if (!(array instanceof Array))
    return "El valor que ingreso es incorrecto; Se permite solo arreglos";
  if (array.lenght === 0) return "El arreglo no puede ser vacio";
  for (let num of array) {
    if (typeof num !== "number")
      throw new Error(
        "El valor que ingreso no es un array de numeros por completo"
      );
  }
  // const newObj = array.reduce(
  //   (acc, cur) => {
  //     if (cur % 2 === 0) acc.pares.push(cur);
  //     if (cur % 2 === 1) acc.impares.push(cur);
  //     return acc;
  //   },
  //   { pares: [], impares: [] }
  // );
  // return newObj;
  return {
    pares: array.filter((element) => element % 2 === 0),
    impares: array.filter((element) => element % 2 === 1),
  };
};
console.log(objWithTwoArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const getAvarage = (array) => {
  return array.reduce((acc, curr) => acc + curr) / array.length;
};
console.log(getAvarage([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
