/* 
Antes de explicar como funciona el modelo de JavaScript es importante entender algunos conceptos:

Procesamiento Single thread y Multi thread.
Operaciones de CPU y Operaciones de I/O.
Operaciones Concurrentes y Paralelas.
Operaciones Bloqueantes y No Bloqueantes.
Operaciones Sincronas y Asingcronas.

JavaScript usa un modelo asincrono y no bloqueante, con un loop de eventos implementado en un solo hilo, (single thread) para operaciones de entrada y salida ( input/output).
*/
/* Codigo sincrono Bloqueante */
(() => {
  console.log("Codigo Sincrono");
  console.log("Inicio");

  function dos() {
    console.log("Dos");
  }

  function uno() {
    console.log("Uno");
    dos();
    console.log("Tres");
  }
  uno();
  console.log("Fin");
})();
/* Codigo Asincrono No Bloqueante */
console.log("******************************");
(() => {
  console.log("Codigo asincrono");
  console.log("Inicio");
  function dos() {
    setTimeout(function () {
      console.log("Dos");
    }, 1000);
  }
  function uno() {
    setTimeout(function () {
      console.log("Uno");
    }, 0);
    dos();
    console.log("Tres");
  }
  uno();
  console.log("Fin");
})();

// LIFO
// LAST IN, FIRST OUT
// funcion anonima autoejecutable
// los setTimeout se pasan a la pila de tareas(aplilamiento de tareas)son asincronas.
// CODIGO ASINCRONO
// setTimeout ----no bloqueante--asincrono
// console.log----bloqueante--sincrono

// mecanismos de js para trabajar como la asincronia: callback, promesa y funciones asicronas