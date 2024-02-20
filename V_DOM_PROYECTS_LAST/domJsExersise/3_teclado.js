const d = document;
let x = 0,
  y = 0;
export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    litmitsStage = $stage.getBoundingClientRect();

  // console.dir($ball);
  // console.log(limitsBall, litmitsStage);

  switch (e.keyCode) {
    case 37:
      if (limitsBall.left > litmitsStage.left) {
        e.preventDefault();
        x--;
      }
      break;
    case 38:
      if (limitsBall.top > litmitsStage.top) {
        e.preventDefault();
        y--;
      }
      break;
    case 39:
      if (limitsBall.right < litmitsStage.right) {
        e.preventDefault();
        x++;
      }
      break;
    case 40:
      if (limitsBall.bottom < litmitsStage.bottom) {
        e.preventDefault();
        y++;
      }
      break;
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}
export function shortcuts(e) {
  // console.log(e);
  // console.log(e.type);
  // console.log(e.target);
  // console.log(e.key); // Nombre
  // console.log(e.code); // keyNombre
  // console.log(e.keyCode); // 13

  // Shift: 16
  // Ctrl: 17
  // Alt: 18
  // Teclas especiales: para crear atajos
  /* console.log("///////////");
  console.log(`shift: ${e.shiftKey}`);
  console.log(`ctrl: ${e.ctrlKey}`);
  console.log(`alt: ${e.altKey}`); */

  if (e.altKey && e.keyCode === 65) {
    alert("Haz lanzaso una alerta con el teclado");
  }
  if (e.altKey && e.keyCode === 67) {
    confirm("Haz lanzaso una confirmacion con el teclado?");
  }
  if (e.altKey && e.keyCode === 80) {
    prompt("Haz lanzaso un aviso con el teclado");
  }
}
