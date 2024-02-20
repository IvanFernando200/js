// Una funcion rescursiva es una funcion que se llama a si misma de forma repetida hasta que se alcanza una condicion de salida
function factorial() {
  console.log(n); // 5, 4, 3, 2, 1, 0
  // caso base: Condicion de salida
  if (n === 0) {
    return 1;
  }
  // caso recursivo: Llamada a la funcion a si misma
  else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // 120

const users = [
  {
    nombre: "Mia",
    age: 60,
  },
  {
    nombre: "Matias",
    age: 34,
  },
  {
    nombre: "Noe",
    age: 32,
  },
  {
    nombre: "Liliana",
    age: 41,
  },
  {
    nombre: "Jorge",
    age: 29,
  },
];
// Dos formas de pensar

// JUNIOR
// Pensamiento iterativo: el bucle for
for (let i = 0; i < users.length; i++) {
  console.log(users[i].nombre); // 'Mia', 'Matias', 'Noe', 'Liliana', 'Jorge'
}

// SENIOR:::: recursividad
// Pensamiento recursivo: simplifica la tarea y se llama a si misma
function recursivo(usuarios, i = 0) {
  if (i < usuarios.length) {
    console.log(usuarios[i].nombre); // 'Mia', 'Matias', 'Noe', 'Liliana', 'Jorge'
    recursivo(usuarios, ++i);
  }
}


