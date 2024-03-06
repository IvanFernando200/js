// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
const caracterNumb2 = (a = "") => {
  if (!a) throw new Error("Error, no ingreso una cadena de texto");
  if (typeof txt !== "string") throw new Error("Insert a valida text");
  return `Numero de caracters ${a.length}`;
};
console.log(caracterNumb2("Vale tio")); // 8
///////////////////////////////////////////////////////////////////////////
const caracterNumb = (a = "") =>
  !a
    ? console.warn("Error, no ingreso una cadena de texto")
    : console.info(`Numero de caracters ${a.length}`);
caracterNumb("Hola mundo"); // 10

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// seleccionar un numero; devolver la pa  labra que tenga esa cantidad de palabras;
function sliceText(text = "", targetLength = undefined) {
  if (typeof text !== "string" || !text || targetLength === undefined) {
    throw new Error(
      "Invalid input parameters. Plese provide a valid string and tagrget lenght"
    );
  }
  const words = text.split(" ");
  const foundWord = words.find((element) => element.length === targetLength);
  return foundWord;
}
try {
  const result = sliceText("El mundo es adverso", 7);
  console.info(result);
} catch (err) {
  console.error(err.message);
} // adverso
/* let numeros = "2 4 5 7 9";
let arrayNumeros = numeros.split(" ").map(Number);
console.log(arrayNumeros); */
////////////////////////////////////////////////////////////////////////////
const recortarTxt = (txt = "", lngToRecort = undefined) =>
  !txt
    ? console.warn("No ingresaste txt")
    : lngToRecort === undefined
    ? console.warn("No ingreso la longitud a recortar")
    : console.info(txt.slice(0, lngToRecort));
recortarTxt("Hola Mundo", 4);

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
const sentenceToArray = (sentence = "", condition = undefined) => {
  if (
    typeof sentence !== "string" ||
    !sentence ||
    condition === undefined ||
    typeof condition !== "string"
  ) {
    throw new Error("Error, revise que su codigo sea correcto y coherente");
  }
  return sentence.split(condition);
};
const array = sentenceToArray("hola que tal", " ");
console.log(array);
///////////////////////////////////////////////////////////////////////////////
const txtToArry = (txt = "", sep = undefined) => {
  !txt
    ? console.warn("No ingreso un string")
    : sep === undefined
    ? console.warn("separador incorrecto")
    : console.info(txt.split(sep));
};
txtToArry("Hi how's it going", " ");

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
const repeatText = (text = "", n = undefined) => {
  // text === "" <===> !text
  // !Number.isInteger(n); avarca todo ese ambito<=== no es necesario (n === undefined)
  if (n <= 0 || !text || typeof text !== "string" || !Number.isInteger(n))
    throw new Error(
      "Invalid input parameters. sentence must be a string and n must be a number also text "
    );
  let repeatedText = text + " ";
  return repeatedText.repeat(n).trim();
  // let repeatedText = Array(n).fill(text).join(" ");
  // return repeatedText;
};
const newText = repeatText("Hola Mundo", 3);
console.log(newText);
//////////////////////////////////////////////////////////////////////////////////
const repTxt = (txt = "", veces = undefined) => {
  if (!txt) return console.warn("No ingresaste un texto");
  if (veces === undefined)
    return console.warn("No ingresaste el numero de veces a repetir el texto");
  if (veces === 0) return console.error("El numero de veces no puede ser 0");
  if (Math.sign(veces) === -1)
    return console.error("El numero de veces no puede ser negativo");
  if (true) {
    return Array(veces).fill(txt).join(" ");
  }
};
console.log(repTxt("Hello world", 3));
