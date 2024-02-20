const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");
  
  $newCard.innerHTML = `
  <img src="https://picsum.photos/200/200/?any" alt="Any">
  <figcaption>Any</figcaption>`;
$newCard.classList.add("card");

console.log($newCard);

// $cards.replaceChild($newCard, $cards.children[3]);
$cards.removeChild($cards.lastElementChild);
// $cards.insertBefore($newCard, $cards.firstElementChild);


const $cloneCards = $cards.cloneNode(true);
document.body.appendChild($cloneCards);