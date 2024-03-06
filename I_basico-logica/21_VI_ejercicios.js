// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const countVocals_countConstants = (text = "") => {
  if (typeof text !== "string" || !text) return "Ingrese un texto";
  let vocales = 0,
    consonantes = 0;
  text = text.toLowerCase();
  // Expresion regular
  for (let letra of text) {
    if (/^[aeiouáéíóúü]+$/.test(letra)) vocales++;
    if (/^[bcdfghjklmnñpqrstvwxyz]+$/.test(letra)) consonantes++;
  }
  return { text, vocales, consonantes };
};
console.log(
  countVocals_countConstants(
    "<<<wuuuw, Quiero ser el mejor que pueda,no solo eso. No me rendire, intentare hasta conseguirlo"
  )
);

// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
const isNameValid = (name = "") => {
  if (typeof name !== "string" || !name) {
    throw new Error("Insert a string");
  }
  // validar nombreconst
  return /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(name)
    ? "The name is valid"
    : "The name is invalid";
};
console.log(isNameValid("Jonathan MirCha"));

// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
const isEmailValid = (email = "") => {
  if (!email) {
    throw new Error("Insert an email");
  }
  if (typeof email !== "string") {
    throw new Error("Insert a valid variable");
  }
  // /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
    email
  )
    ? "The email is valid"
    : "The email is invalid";
};
console.log(isEmailValid("jonmircha@gmail.com"));

// 19-20
const validarPatron = (cadena = "", patron = undefined) => {
  if (!cadena) return "No ingresaste una cadena de texto a evaluar";
  if (patron === undefined) return "No ingresaste un patron a evaluar";
  if (typeof cadena !== "string")
    return `El valor ${cadena} ingresado, NO es una cadena de texto`;
  if (!(patron instanceof RegExp))
    return `El valor ${patron} ingresaso, NO es una expresion regular`;

  return patron.test(cadena)
    ? "Cumple con el patron ingresado"
    : "No cumple con el patron ingresado";
};
console.log(validarPatron("joni@gmail.com", /^[^\s@]+@[^\s@]+\.[^\s@]+$/));
console.log(
  validarPatron("Jonathan Mircha", new RegExp("/^[^s@]+@[^s@]+.[^s@]+$/", "i"))
);

console.log(
  /\dlorem/.test(
    `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, sit, exercitationem rerum nostrum harum id, fuga unde optio impedit veniam reprehenderit omnis velit voluptatem necessitatibus similique cum tempore. Soluta, consectetur!`
  )
);
