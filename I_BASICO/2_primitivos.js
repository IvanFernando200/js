// Primitivos::: se accede directamente al valor
console.log(window);
// console.groupCollapsed(); se crea cerrado; mientras que console.group() habierto
// STRING
console.group("STRING");
let saludo = new String("Hola tio");

// Metodos de cadena
let nam = "Ian Kinda";
console.log(saludo, nam.__proto__);

console.log(nam.toLowerCase());
console.log(nam.includes("v"));
// trim(): delete spaceses at the end and the start
console.log(nam.trim());
// cut my string the slice that i want
console.log(nam.slice(3));
// string to array
console.log(nam.split(" "));

// concatenacion:::
// ....easy don't need to do it

// Template string::::Interpolacion ${} with this;
// ....easy too; ``bactics, {} curli brase(llaves)
console.groupEnd();

// NUMBER
console.group("NUMBER");
let a = 3;
let b = new Number(2);
let c = 7.19;
let d = "5.6";
console.log(a, b);
// Metododos:::estos cuelgan de la variable c
// Mostrar cantidad de decimales
console.log(c.toFixed(1)); // 7.2
console.log(c.toFixed(5)); // 7.19000
// String to number::
console.log(parseInt(c)); // 7 parte entera
console.log(parseFloat(c)); // 7.19 todo, con parte decimal

// string to number::: estos metodos cuelgan del constructor del objeto Number
// pasa a la parte entera 
console.log(c + Number.parseInt(d)); // 12.190000000000001
// pasa a la parte decimal
console.log(c + Number.parseFloat(d)); // 12.79

// Tipo de dato
console.log(typeof c, typeof d);
console.groupEnd();

// BOOLEAN
console.group("BOOLEAN");
let bool = new Boolean(false);
let boolea = true;
console.log(bool);

// Valores que tienden a true
true, {}, [], 42, "foo", new Date(), -42, 3.14, -3.14, Infinity, -Infinity;

console.log(Boolean(-7)); //true
console.log(Boolean(" ")); //true

// Valores que tienden a false
0, "", null, undefined, NaN, "", ""; //if(document.all) { 1 };

console.log(Boolean(0)); //false
console.log(Boolean("")); //false
console.groupEnd();

// NaN, null, Undefined
console.group("NaN, null, Undefined");
// Undefined: indica que no se ha inicializado una variable y que el valor esta ausente.
let dato;
console.log(dato); // Undefined
// null: indica ausencia de un valor intencionalmente
let dato2 = null;
console.log(dato2); // null
// NaN: operaciones aritmeticas sin sentido
let dato3 = "5 yoyo" * "40";
console.log(dato3); // NaN === Not a Number
console.groupEnd();
