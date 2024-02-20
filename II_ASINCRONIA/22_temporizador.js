/* setTimeout(() => {
  console.log("setTimeout solo una ves, en este caso es en 3 segundos");
}, 3000);
setInterval(() => {
  console.log(
    "setInterval repetida indefinidamente, en este caso cada 1 segundo"
  );
}, 1000); */
let tiempo = setTimeout(() => {
  console.log(new Date().toLocaleTimeString());
}, 100);
clearTimeout(tiempo);

let temporizador = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);
// clearInterval(temporizador)
