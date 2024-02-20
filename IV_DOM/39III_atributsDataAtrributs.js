const $html = document.documentElement;
console.log($html.lang);
// Mejor: la forma correcta getAttribute
console.log($html.getAttribute("lang"));
//::::::::::::::::::::::::::::::::::::::
// getAttribute: obtener
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

// setAttribute: establecer
document.documentElement.lang = "es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "en-uk");
console.log($html.getAttribute("lang"));

// Mas::::
const $linkDOM = document.querySelector(".link-dom");
$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://www.youtube.com/watch?v=YYEisn-tB6I");

console.log($linkDOM.hasAttribute("rel"));
// noreferrer nofollow
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

// Data-Attributes

// get Obtener::::::
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset); //tipo de dato map
console.log($linkDOM.dataset.description);

// set Establecer:::::
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribate a mi cal y comparte";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));

$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id"));
