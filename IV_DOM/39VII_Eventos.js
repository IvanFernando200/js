/* // FORMAS DE APLICAR LOS EVENTOS
// 1) como attributo en html(ejecutando la funcion en html)
function holaMundo() {
  // alert("Hola Mundo");
  console.log(event);
  console.log(event.target);
}
// 2) como atrributo interactivo applicando de js
const $eventoSemantico = document.getElementById("evento-semantico");
$eventoSemantico.onclick = holaMundo;
// desventaja es que solo se puede ejecutar una funcion por evento. La ultima sera la valida.
$eventoSemantico.onclick = function (e) {
  alert("Hola Mundo Manejador de Eventos Semanticos");
  console.log(e);
  console.log(event); // jajaj ya no sirve
};
 */ // NO SIRVE 🚫

// 3) con addEventListener---EVENTO MULTIPLE
// ejecutar mas de una funcion al mismo evento
// a un mismo elemento
const $eventoMultiple = document.getElementById("evento-multiple");
// $eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  // $cards.forEach((el) => el.classList.toggle("sepia"));
  // console.log(e);
  console.log(e.target);
  console.log(e.type);
});
// EVENTOS CON PARAMETROS::::::::::::::::::::::::::
function saludar(nombre = "Desconocid@") {
  console.log("////////////////////////");
  console.log(nombre);
}
$eventoMultiple.addEventListener("click", saludar); // object PointerEvent
$eventoMultiple.addEventListener("click", () => {
  saludar("Michel");
});
// REMOVER EVENTOS::::::::::::::::::::::::::
const $eventoRemover = document.getElementById("evento-remover");

const presentation = (e) => {
  console.log(e.type);
  console.log(e); // MouseEvent
  // e.target.setAttribute('disabled',true)
  $eventoRemover.removeEventListener("dblclick", presentation);
  $eventoRemover.disabled = true;
};
$eventoRemover.addEventListener("dblclick", presentation);
