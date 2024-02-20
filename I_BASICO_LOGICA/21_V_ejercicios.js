// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
// Base especificada a base 10  ===> parseInt(number, base)
// SOLO BASE 2
const DecimalBase = (number = undefined, base = undefined) => {
  if (number === undefined)
    return "No ingresaste el numero a convertir en el value";
  if (typeof number !== "number")
    return "El valor que ingreso en value no es un numero";
  if (base === undefined)
    return "No ingresaste el numero a convertir en la bas";
  if (typeof base !== "number")
    return "El valor que ingresaste en la base no es un numero";
  if (base === 2) {
    return `${number} base ${base} = ${parseInt(number, base)} base 10`;
  } else if (base === 10) {
    return `${number} base 10 = ${number.toString(2)} base 2`;
  } else {
    return "Lo lamentamos por esta vez SOLO SE ACEPTA BASE 2 Para pasar a base 10; De poner 10 en la base SE PASA AUTOMATICAMENTE A LA base 2";
  }
};
// console.log(toDecimalBase("40dhfe", 19));
console.log(DecimalBase(100, 10));

/////////////////////////////////////////
// De base 10 a la base que elija
const toDecimalB = (number, base) => {
  // return parseInt(number, base);
  return `${number} base 10 = ${number.toString(base)} base ${base}`;
};
console.log("yes: " + toDecimalB(8875, 16));

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const nDespuesDelDescuento = (precio = undefined, descuento = 0) => {
  if (precio === undefined) return "No ingresaste el monto";
  if (typeof precio !== "number") return "El precio ingresaso NO es un numero";
  if (precio === 0) return "El PRECIO no puede ser 0";
  if (Math.sign(precio) === -1) return "El PRECIO NO puede ser NEGATIVO";

  if (typeof descuento !== "number")
    return "El valor ingresado en DESCUENTO NO es un numero";
  if (Math.sign(descuento) === -1) return "El DESCUENTO NO puede ser NEGATIVO";

  return precio - (precio * descuento) / 100;
};
console.log(nDespuesDelDescuento(1000, 20));

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
const calculateAgeFromBirthDate = (fecha = undefined) => {
  if (fecha === undefined) return "No ingresaste la fecha";
  // if (!fecha instanceof Date)
  //   return "El valor ingresado no es una fecha valida";
  if (!(fecha instanceof Date) || isNaN(fecha.getTime())) {
    throw new Error("Invalid date");
  }
  let hoMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMS = 1000 * 60 * 60 * 24 * 365,
    aniosHumanos = Math.floor(hoMenosFecha / aniosEnMS);
  // años en MiliSegundos === aniosEnMS
  return Math.sign(aniosHumanos) === -1
    ? `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`
    : Math.sign(aniosHumanos) === 1
    ? `Han transcurrido ${aniosHumanos} años desde ${fecha.getFullYear()}`
    : `Honor a buena!!! Estamos en el año actual ${fecha.getFullYear()}`;
};
console.log(calculateAgeFromBirthDate(new Date(2002, 6, 7)));
console.log(calculateAgeFromBirthDate(new Date(2070, 3, 23)));

// [] instanceof Array
// true
// new Date() instanceof Date
// true

// MI FECHA DE NACIMIENTO
console.log("////////////////////////////////");
let cumpleIan = new Date(2002, 5, 7);
console.log(cumpleIan);
console.log([] instanceof Array);