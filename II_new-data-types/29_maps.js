const mapa = new Map();
mapa.set("name", "Ian");
mapa.set("apellido", "Mircha");
mapa.set("edad", 23);

console.log(mapa);
console.log(mapa.size);
// tiene?
console.log(mapa.has("correo"));
console.log(mapa.has("name"));
// obtener valor:
console.log(mapa.get("name"));
// reasignar
mapa.set("name", "Ian Silva");
// obtener valor:
console.log(mapa.get("name"));
mapa.delete("apellido");

mapa.set(19, "diecinueve");
mapa.set(false, "falso");
mapa.set({}, {});
console.log(mapa);

mapa.clear();
console.log(mapa);

for (let [key, value] of mapa) console.log(`Lave: ${key}, Valor: ${value}`);

console.log("---------------------------");
const mapa2 = new Map([
  ["nombre", "Boby"],
  ["edad", 7],
  ["animal", "perro"],
  [null, "nulo"],
]);
console.log(mapa2);

const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);
