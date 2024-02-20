const $card = document.querySelector(".card");
// method()----Igual--getAttribute, setAttribute, hasAttribute, removeAttribute;
console.log($card.getAttribute("class"));
console.log($card.className); // solo lectura

// Notacion punto (.) (classList)
// METHODOS PARA classList:::::::::::::::::::
console.log($card.classList); //DOMTokenList
console.log($card.classList.contains("rotate-45")); // false
// add()
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45")); // true
// toggle---añade si no tiene y si tiene lo quita
// $card.classList.toggle("rotate-45");

console.log($card.className);
console.log($card.classList);
// replace:::::de uno en uno
$card.classList.replace("rotate-45", "rotate-135");
// AGREGAR, QUITAR e INTERCAMBIAR --- MAS DE UNA CLASE(add,remove)
$card.classList.add("sepia", "opacity-80");
$card.classList.remove("rotate-135", "opacity-80");
$card.classList.add("rotate-45");


