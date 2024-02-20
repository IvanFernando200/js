// Parametro REST
function sumar(a, b, ...c) {
  let resultado = a + b;
  c.forEach(function (n) {
    resultado += n;
  });
  return resultado;
}
console.log(sumar(10, 5, 55, 30, 100, 800));

// Operador Spread
const arr1 = [1, 2, 3, 4, 5],
  arr2 = [6, 7, 8, 9, 0];
console.log(arr1, arr2);

arrH = [...arr1, ...arr2];
console.log(arrH)