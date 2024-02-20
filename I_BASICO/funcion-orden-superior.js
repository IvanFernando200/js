// Son las metodos que ya se encuentras agregados al prototype: Como filter, find, map y reduce

// Esto es para saber la nocion
const myArray = [1, 2, 3, 4];
const metodo = {
  recorrer(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
    }
  },
};

metodo.recorrer(myArray, (element, index, array) => {
  console.log(element);
  console.log(index);
  console.log(array);
});

Array.prototype.recorrer = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// Asi se creo el forEach
myArray.recorrer((el, ind, arr) => {
  console.log(el);
  console.log(ind);
  console.log(arr);
});

// Closures
// Es una funcion que permite acceder al ambito de una funcion exterior desde una IntersectionObserver. Funciones que regresan otras fucniones.

function sayHi() {
  return function () {
    return "Hi";
  };
}
console.log(sayHi()()); // Hi

// La manera mas utilizada
function sayHiWithName(name) {
  return function () {
    return `Hola ${name}`;
  };
}

const saludo = sayHiWithName("Ivan");
console.log(saludo()); // 'Hola Ivan'

// Ejemplo con counter

function counter() {
  let contador = 0;
  function incrementer() {
    return contador++;
  }
  return incrementer;
}

const contador = counter();
console.log(contador()); // 0
console.log(contador()); // 1
console.log(contador()); // 2
console.log(contador()); // 3
console.log(contador()); // 4

const contador2 = counter();
console.log(contador2()); // 0
console.log(contador2()); // 1
console.log(contador2()); // 2
console.log(contador2()); // 3
console.log(contador2()); // 4

