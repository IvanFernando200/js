console.log(window);
console.log(window.navigator);
console.log(window.navigator.geolocation);
console.log(window.history);
// pequeña base de datos en el navegador(indexedDB)
console.log(window.indexedDB);

// LINK:
console.log(window.location);
// almacenamiento local(localStorage)
console.log(window.localStorage);
console.log(window.document);
console.log(alert);

let texto =
  "Hola, soy Ivan y sere programador";
const hablar = (texto) =>
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto);

