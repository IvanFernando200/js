function flujoEventos(e) {
  console.log(
    // this === window
    `Hola te saluda ${this}, el click lo origino ${e.target.className}`
  );
}
document.addEventListener("click", (e) => {
  console.log("Click en ", e.target);
  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }
  if (e.target.matches(".eventos-flujo a")) {
    alert("Hola jon mircha");
    e.preventDefault();
  }
});
