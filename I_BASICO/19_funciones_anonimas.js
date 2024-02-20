// Funciones Anonimas Autoejecutadas
(function () {})();
(() => {
  // Si es necesario poner puntos y comas, para separar mi codigo
  console.log("Volvemos a ver funcion anonima utoejecutable, con fuerza");
})();

((d, w, c) => {
  console.log(d);
  console.log(w);
  console.log(c);
  c.log("Este es un console.log");
})(document, window, console);

///////////////////////////////////////////
// Clasica
(function () {
  console.log("Version clasica");
})();

/* // Crockford
((function () {
  console.log("Version Crockford");
})()); */

/* // Unaria
+function () {
  console.log("Version Unaria");
}();

// Facebook
!function () {
  console.log("Version Facebook");
}(); */
