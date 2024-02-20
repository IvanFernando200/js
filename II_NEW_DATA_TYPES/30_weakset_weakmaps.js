// NO SON ITERABLES
// NO TIENEN LA PROPIEDAD SIZE

/* const ws = new WeakSet([1, 2, 3, 3, 4, 5, true, false, false, {}, {}.'hola', 'HOla']); */ //no sierve esto es para Set
// WeakSet
// const ws = new WeakSet();
// let valor1 = { valor1: 1 };
// let valor2 = { valor1: 2 };
// let valor3 = { valor1: 3 };

// // add
// ws.add(valor1);
// ws.add(valor2);

// console.log(ws);
// // METHOD
// // has
// console.log(ws.has(valor2)); // treu
// console.log(ws.has(valor3)); // false

// // delete
// ws.delete(valor2);
// console.log(ws);

// // add
// ws.add(valor2);
// ws.add(valor3);
// console.log("////////////////////////////");
// console.log(ws);

// // setInterval
// setInterval(() => console.log(ws), 1000);
// setTimeout(() => {
//   valor1 = null;
//   valor2 = null;
//   valor3 = null;
// }, 5000);

console.log(".............................");
// WeakMap
/* const wm = new WeakMap(
  ["nombre", "KEnAi"],
  ["edad", 7],
  ["animal", "perro"],
  [null, "nulo"]
); */ //no sirve esto es para Map

const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};
wm.set(llave1, 5);
wm.set(llave2, "U _ Yess!");
console.log(wm);

console.log(wm.has(llave1));
console.log(wm.has(llave3));

console.log(wm.get(llave1));
console.log(wm.get(llave2));
console.log(wm.get(llave3));

wm.delete(llave2);
console.log(wm);

wm.set(llave2, 6);
wm.set(llave3, 8);
console.log(wm);
console.log("----------------------");
setInterval(() => console.log(wm), 1000);

setTimeout(() => {
  llave1 = null;
  llave2 = null;
  llave3 = null;
}, 5000);
