// CUELGAN EN EL OBJETO WINDOW

/* console.log("*******Objeto URL (location)*******");
console.dir(location); /// objeto URL
console.log(location.origin); // http://127.0.0.1:5501
console.log(location.protocol); // http:
console.log(location.host); // 127.0.0.1:5501
console.log(location.hostname); // 127.0.0.1
console.log(location.port); // 5501
console.log(location.href); // http://127.0.0.1:5501/JS/39_dom.html#contacto?nombre=Jon&edad=36
console.log(location.hash); // #contacto
console.log(location.search); // ?nombre=Jon&edad=36
console.log(location.pathname); // /JS/39_dom.html
// location.reload();
// location.assign(); */

/* console.log("***** Objeto Historial (history) *****");
console.log(history);
console.log(history.length);
// history.back(3); <--
// history.forward(3); -->
// go(), es como back y forward con negativo y positivo
history.go(3);
history.go(0);
history.go(-3);
 */

console.log("******* Objeto Navegador (navigator) ********");
console.log(navigator);
// console.log(window.document.documentElement.lang);
console.log(navigator.language);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);// really important
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker); // para progresib web app: pasar un simple sitio web a una applicacion instalable
console.log(navigator.storage); // api de almacenamiento (important)
console.log(navigator.usb);
console.log(navigator.userAgent);

