/* Asincrono */
// Callbacks
function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 1000));
}
cuadradoCallback(0, (value, result) => {
  console.log("Inicia Callback");
  console.log(`Callback: ${value},${result}`);
  cuadradoCallback(1, (value, result) => {
    console.log(`Callback: ${value},${result}`);
  //   cuadradoCallback(2, (value, result) => {
  //     console.log(`Callback: ${value},${result}`);
  //     cuadradoCallback(3, (value, result) => {
  //       console.log(`Callback: ${value},${result}`);
  //       cuadradoCallback(4, (value, result) => {
  //         console.log(`Callback: ${value},${result}`);
  //         cuadradoCallback(5, (value, result) => {
  //           console.log(`Callback: ${value},${result}`);
  //           console.log("Fin Callback");
  //         });
  //       });
  //     });
  //   });
  });
});
// Asynchronous operation using Promise-based delay function
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function cuadradoCallback(value, callback) {
  await delay(0 | (Math.random() * 1000));
  callback(value, value * value);
}