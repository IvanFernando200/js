const $divEventos = document.querySelectorAll(".eventos-flujo div");
console.log($divEventos);

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo origino ${e.target.className}`
  );
}

$divEventos.forEach((div) => {
  // Fase de burbuja === false
  // div.addEventListener("click", flujoEventos);
  // div.addEventListener("click", flujoEventos, false);
  // Fase de captura === true
  // div.addEventListener("click", flujoEventos, true);
  div.addEventListener("click", flujoEventos, {
    capture: true, //false es por defecto.
    once: true, // ejecuta una sola vez
  });
});
console.log(menu);
