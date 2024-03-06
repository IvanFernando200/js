const d = document;
let x = 0,
  y = 0;
export function moveBall(e, stage, ball) {
  const $stage = d.querySelector(stage),
    $ball = d.querySelector(ball),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();
  // console.log(e.keyCode);
  // console.log(limitsBall, limitsStage);

  switch (e.keyCode) {
    case 37:
      if (limitsBall.left > limitsStage.left) {
        e.preventDefault();
        x--;
      }
      break;
    case 38:
      if (limitsBall.top > limitsStage.top) {
        e.preventDefault();
        y--;
      }
      break;
    case 39:
      if (limitsBall.right < limitsStage.right) {
        e.preventDefault();
        x++;
      }
      break;
    case 40:
      if (limitsBall.bottom < limitsStage.bottom) {
        e.preventDefault();
        y++;
      }
      break;
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}
export function shortcut(e) {
  /*   console.log(e);
  console.log(e.type);
  console.log(e.code);
  console.log(e.key);
  console.log(e.keyCode);
  // code ----> keyQ
  // key -----> Q "o" q
  // e.keyCode -----> 81
  console.log(e.altKey);
  console.log(e.ctrlKey);
  console.log(e.shiftKey); */
  if (e.key === "a" && e.altKey) {
    alert("alert");
  }
  if (e.key === "c" && e.altKey) {
    confirm("Answer it");
  }
  if (e.key === "p" && e.altKey) {
    prompt("Este es un aviso");
  }
}
