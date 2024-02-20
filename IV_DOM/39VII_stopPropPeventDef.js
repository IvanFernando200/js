const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
  $linkEventos = document.querySelector(".eventos-flujo a");

// flujo de eventos;;;; ----> stopPropagation
function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo origino ${e.target.className}`
  );
  e.stopPropagation();
}

$divsEventos.forEach((div) => {
  div.addEventListener("click", flujoEventos);
});
// prevenir la accion de manera por defecto; preventDefault
$linkEventos.addEventListener("click", (e) => {
  alert("Hola soy tu amigo y docente digital... Jonathan Mircha");
  e.preventDefault();
  e.stopPropagation();
});
