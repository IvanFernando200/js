/* 
  insertAdjacent...
    .insertAdjacentElement(position, el)
    .insertAdjacentHTML(position, html)
    .insertAdjacentText(position,text)

  Posiciones:
    beforebegin(hermano anterior)
    afterbegin(primer hijo)
    beforeend(ultimo hijo)
    afterend(hermano siguiente)
*/
const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

$newCard.innerHTML = ` 
  <img src="https://loremflickr.com/200/200?animals" alt="Animals">
  <figcaption>Animals</figcaption>`;
$newCard.classList.add("card");
// insertar Elemento
$cards.insertAdjacentElement("beforeend", $newCard);
// :::::::::::::::::::::::::::::::::::::::
const $newCard2 = document.createElement("figure");
let contentCard = ` 
<img src="https://loremflickr.com/200/200?fiction" alt="Fiction">
<figcaption></figcaption>`;
$newCard2.classList.add("card");

// insertar HTML ---mejor que innerHTML
$newCard2.insertAdjacentHTML("afterbegin", contentCard);
// insertar TEXT
// $newCard2.querySelector("figcaption").textContent = "Fiction";
$newCard2
  .querySelector("figcaption")
  .insertAdjacentText("beforeend", "Fiction");

// $cards.insertAdjacentElement("afterbegin", $newCard2);

// METODOS DE JQUERY: AHORA YA SOPORTA JS
// $cards.before($newCard); // (hermano anterior)
// $cards.prepend($newCard); // (primer hijo)
// $cards.append($newCard); // (ultimo hijo)
// $cards.after($newCard); // (hermano posterior)

$cards.prepend($newCard2);
