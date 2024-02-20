const $cards = document.querySelector(".cards");
console.log($cards);
// Hijos elementos:
console.log($cards.children); // HTMLCollection
console.log($cards.children[3]);
console.log($cards.children.item(2));
// Recorrer::::::::::::: for(of)

// $cards.lastChild // todos tipo de nodos
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
// padre:::::::::
// $cards.parentNode // el nodo que sea padre
console.log($cards.parentElement);
// hermanos:::::::
// $cards.previousSibling // todo tipo de nodos
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);

// ANSESTRO MAS CERCANO ESPECIFICADO::::
console.log($cards.children[2].closest("section"));
// secction
//  En caso de no tener me da null

/////////////////////////////////
/* // TODOS LOS HIJOS NODOS INCLUIDO TEXT
// childNodes   // NodeList
// Recorrer:::::::for(of) && forEach
// firsChild
// lastChild */
