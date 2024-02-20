function* iterable() {
  yield "hola";
  console.log("Hola consola");
  yield "hola 2";
  console.log("Seguimos con mas instrucciones de nuestro codigo");
  yield "hola 3";
  yield "hola 4";
}

let iterador = iterable();
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
for (let y of iterador) {
  console.log(y);
}

const arr = [...iterable()];
console.log(arr);

function cuadrado(valor) {
  setTimeout(() => {
    return console.log({ valor, resultado: valor ** 2 });
  }, Math.random() * 1000);
}
function* generador() {
  console.log("Inicia generator");
  yield cuadrado(0);
  yield cuadrado(1);
  yield cuadrado(2);
  yield cuadrado(3);
  yield cuadrado(4);
  yield cuadrado(5);
  console.log("Termina generator");
}
let gen = generador();
for (let y of gen) {
  console.log(y);
}

const obj1 = {
  a: "a",
  b: "b",
  c: "c",
};
const obj2 = {
  d: "d",
  e: "e",
};
// const nuevoObjeto = Object.assign({}, obj1, obj2);
const nuevoObjeto = { ...obj1, ...obj2 };
console.log(nuevoObjeto);
