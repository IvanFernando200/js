const iterable = [1, 2, 3, 4, 5];
// const iterable ='Hola Mundo';
// const iterable = new Set([1,2,3,4,5]);
// const iterable = new Map(['nombre','Kenai'],['edad',12]);
// Incluso nodos del :: son elementos iterables

// Accedemos al iterador del iterable
//  consumir elementos iterables: merodos for in of, Array.from, spred operator, promesas

// Accdere a la interface directa de un iterador
const iterator = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterator);

// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

let next = iterator.next();
while (!next.done) {
  console.log(next.value);
  next = iterator.next();
}
