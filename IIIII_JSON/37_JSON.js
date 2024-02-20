const json = {
  cadena: "Jon",
  numero: 35,
  boolean: true,
  arreglo: ["correr", "programar", "cocinar"],
  objeto: {
    twitter: "@jonmircha",
    email: "jonmircha@gmail.com",
  },
  nulo: null,
};

console.log(JSON);
console.log(json);
console.log(JSON.stringify(json));

const jsonC =
  '{"cadena": "Jon","numero":"35","boolean": "true","arreglo":["correr", "programar", "cocinar"],"objeto": {"twitter": "@jonmircha","email": "jonmircha@gmail.com"},"nulo": "null"}';

console.log(JSON.parse(jsonC));
