// window.prompt();
// window.confirm();
// window.alert();

let ventana;
window.addEventListener("click", (e) => {
  if (e.target.matches("#abrir-ventana")) {
    // window.open('https://jonmircha.com');
    ventana = open("https://jonmircha.com");
  }
  if (e.target.matches("#cerrar-ventana"))
  {
    // window.close();
    ventana.close();
  }
  if (e.target.matches("#imprimir-ventana")) {
    window.print();
  }
});
