console.log(Math);

// let matematica = new Math();
// console.log(matematica);
console.log(Math.PI);
console.log(Math.E);

console.log(Math.abs(-7.8)); // 7.8

console.log(Math.ceil(7.2)); // 8
console.log(Math.floor(7.8)); // 7
console.log(Math.round(7.5)); // 8
console.log(Math.round(7.49)); // 7

console.log(Math.sqrt(4)); // 2

// potencia
// console.log(Math.pow(bace,potencia));
console.log(Math.pow(3, 4)); // 3^4 == 81

// ver si el numero es positivo o negativo
console.log(Math.sign(-4.7)); // -1

// Random ::: un numero aleatorio de 0-1
console.log(Math.random());

// Hacemos que sea de 0-1000; multiplicando por 1000
console.log(Math.random() * 1000); // Tiene demasiados decimales
console.log(Math.round(Math.random() * 1000)); // Decimales redondeados