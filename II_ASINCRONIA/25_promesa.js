// PROMESA -----Mejora de la anterior 24
function cuadradoPromise(value) {
  if (typeof value !== "number")
    return Promise.reject(
      `Error, el valor "${value}" ingresado no es un numero`
    );
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value: value,
        result: value ** 2,
      });
    }, 0 | (Math.random() * 1000));
  });
}
cuadradoPromise(0)
  .then((obj) => {
    // console.log(obj);
    console.log("Inicio Promise");
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(1);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(2);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise("jjj");
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(4);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(5);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log("Fin");
  })
  .catch((err) => console.error(err));


