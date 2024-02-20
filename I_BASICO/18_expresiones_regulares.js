// Expresiones regulares:::buscar las que ya estan hechas, en google o mdn;

let cadena = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta est, et non enim odit dolorum dolore molestias animi dolores lorem cupiditate, atque voluptatibus praesentium ab quasi molestiae magnam repudiandae aspernatur vel.`;
/* let expReg = new RegExp("lorem", "ig"); 
console.log(expReg.test(cadena));
console.log(expReg.exec(cadena)); */

let expReg2 = /\dlorem/i; // i : ignora mayuscula e minuscula && g: se queda con la ultima considencia
console.log(expReg2.test(cadena)); // true
console.log(expReg2.exec(cadena)); // devuelve un arreglo

console.dir(RegExp);

console.log(window)