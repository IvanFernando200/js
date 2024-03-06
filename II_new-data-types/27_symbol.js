// Symbols
let id = Symbol("id");
let id2 = Symbol("id");
console.log(id === id2); //false

console.log(id);
console.log(typeof id);

const NAME = Symbol("name");
const GREETINGS = Symbol("greetings");

const person = {
  [NAME]: "Ian",
  edad: 21,
};
console.log(person);
person.NAME = "Ian Silva";
console.log(person);
console.log(person.NAME);
console.log(person[NAME]);

person[GREETINGS] = function () {
  console.log(`Hola ${person[NAME]} Buen dia`);
};

console.log(person);
person[GREETINGS]();

for (let propiedad in person) {
  console.log(propiedad);
  console.log(person[propiedad]);
}

console.log(Object.getOwnPropertySymbols(person));
