const $linkDOM = document.querySelector(".link-dom");

// GET::::::::::::::::::::::
console.log($linkDOM.style); // mas frecuente
console.log($linkDOM.getAttribute("style"));

console.log($linkDOM.style.backgroundColor);

// WEB API DE LOS NAVEGADORES
// Forma de mostrarnos de las propiedades css de las ventanas
// COMPUTED properties:::propiedades dinamicas o propiedadesa computadas

console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("background-color"));

// SET:::::::::::::::::::::::
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "40%";
$linkDOM.style.border = "2px solid #f00";
$linkDOM.style.textAlign = "center";
$linkDOM.style.margin = "0 auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

// console.log($linkDOM.style) // el objeto
console.log($linkDOM.getAttribute("style")); // text
console.log(getComputedStyle($linkDOM));

// Variables CSS - Custom Properties CSS
const $html = document.documentElement,
  $body = document.body;
 
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellocolor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellocolor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellocolor;

$html.style.setProperty("--yellow-color", "#00f");
varYellocolor = getComputedStyle($html).getPropertyValue("--yellow-color");
console.log(varYellocolor);
$body.style.setProperty('color',varYellocolor);

console.log($body.style.getPropertyValue('color'))