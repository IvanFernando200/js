// OPERADORES:
console.groupCollapsed("OPERADORES:");
// aritmeticos(+-*/%)
// relacional (>,<,>=,<=,=,==,===, !=,!==)
// algebraicos
let numb = 8;
numb += 2;
numb *= 9;
numb++;
console.log(numb); //91
{
  // Modulo
  let numb = 5;
  numb %= 2;
  console.log(numb); // 1
}
// LA MAS ADECUADA(operadores unitarios)
console.log(numb++); // ejecuta ::: 91
// Realiza la operacion : 92
{
  // NO ES LA MAS ADECUADA
  console.log(++numb); // Realiza la operacion 93 & ejecuta el codigo ::: 93
}

//logicos
// && || !
console.groupEnd();
