// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const reverseString = (txt = "") =>
{
  if (!txt)
  {
    throw new Error(`Input must be a non-empty string`);
  }
  if (txt === null) {
    throw new Error("Input cannot be null");
  }
  if (typeof txt !== "string") {
    throw new Error("Input must be a string");
  }
  return Array.from(txt).reverse().join("");
}
console.log(reverseString("Hola Mundo"));//odnuM aloH

const invertirCadena = (cadena = '') => (!cadena) ? console.warn('Hola Mundo') : console.info(cadena.split('').reverse().join(''));
invertirCadena('Hola mama mia')//aim amam aloH

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const vecesRep = (txt = "", word = "") => {
  if (!txt ||!word|| (typeof txt !== "string" && typeof word !== "string"))
    throw new Error("Woow you made a mistake, just insert corect variables");
  // let nWords = txt.trim().toLowerCase().split(" ").filter((item) => item === word);
  // return nWords.length;
  let nWords = txt.trim().toLowerCase().split(" ").reduce((count, current) => {
      if (current.toLowerCase() === word.toLowerCase()) {
        count++;
      }
      return count;
    }, 0);
  return nWords;
};
console.log(vecesRep("Hola mundo adios mundo", "mundo"));//2
const textoEnCadena = (cadena = '', texto = '') =>
{
  if (!cadena) return console.warn('No ingresaste el texto largo');
  if (!texto) return console.warn('No ingresaste la palabra a evaluar');

  let i = 0, contador = 0;
  while (i !== -1)
  {
    i = cadena.indexOf(texto, i);
    if (i !== -1)
    {
      i++;
      contador++; 
    }
  }
  return console.info(`La palabra ${texto}, se repite ${contador} veces`);
}
textoEnCadena('Hola mundo, welcome to the mundo si mundo', 'mundo')//La palabra mundo, se repite 3 veces

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const isPalindrome = (word = "") =>
  !word || typeof word !== "string"
    ? "Inster a valid string"
    : word.trim().toLowerCase().split("").reverse().join("") === word.trim().toLowerCase();
// !word ....jaja isn't too much especific
// word === "" .....better option
console.log(isPalindrome("Salas"));


// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const justNumbers = (array, data='') => {
  if (!Array.isArray(array) || data==="" || typeof data !== "string")
    throw new Error("There is a big mistake in your variables");
  if (!array.every((element) => typeof element === "string")) {
    throw new Error("The 'array' parameter must contain only strings");
  }
  return array.map((element) => Number(element.replace(data, "")));
  // return array.map((element) => Number(element.replace(new RegExp(data,'ig'),'')));
};
// JAJAJA HICE PARA UN ARRAY
console.log(justNumbers(["xyz1", "xyz2", "xyz3", "xyz4", "xyz5"], "xyz"));
// PARA UN STRING
let tst = "xyz1, xyz2, xyz3, xyz4 y xyz5";
console.log(tst.replaceAll('xyz', ''));

const eleminarCaracteres = (texto = '', patron = '') => !texto ? console.warn('No ingresaste un texto') : !patron ? console.warn('NO ingresaste un patron de caracteres') : console.info(texto.replace(new RegExp(patron, 'ig'), ''));
eleminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
