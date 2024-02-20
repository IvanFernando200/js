const $cards = document.querySelector(".cards");

const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $text = document.createTextNode("Fruits");
// setAttribute()
$img.src = "https://loremflickr.com/200/200?fruits";
$img.alt = "Fruits";
$figcaption.appendChild($text);

$figure.appendChild($img);
$figure.appendChild($figcaption);

$figure.classList.add("card");

$cards.appendChild($figure);
//// Otra forma::::::::::------
const $figure2 = document.createElement("figure");
$figure2.innerHTML = `
  <img src="https://picsum.photos/200/200/?math" alt="Math">
  <figcaption>Math</figcaption>`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

// LISTA DINAMICA:::::::::::::::
// Estaciones:::::
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");
document.write(`<h3>Estaciones del Año</h3>`);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

document.body.appendChild($ul);
// Continentes:::::
document.write(`<h3>Contientes del Mundo</h3>`);
const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
  $ul2 = document.createElement("ul");

// $figure2.innerHTML = "";
continentes.forEach((el) => {
  $ul2.innerHTML += `<li>${el}</li>`;
});

document.body.appendChild($ul2);

// DOCUMENT FRAGMENT:::::
document.write("<h3>Meses del Año:</h3>");
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

$ul3.appendChild($fragment);
document.documentElement.appendChild($ul3);

