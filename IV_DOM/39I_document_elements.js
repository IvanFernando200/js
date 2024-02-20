console.log(window);
console.log(window.document);

console.log(document.doctype); // Doctype
console.log(document.head); // head
console.log(document.body); // body
console.log(document.documentElement); // html

console.log(document.title); // title
console.log(document.links); // HTMLCollection[]
console.log(document.images); // HTMLCollection[]
console.log(document.forms); // HTMLCollection[]

console.log(document.styleSheets); // StyleSheetList{length: 0} -----> lista de los archivos css enlasados a mi documento
console.log(document.scripts); // HTMLCollection[script]-----> coleccion de etiquetas script

// GET SELLECTION
setTimeout(() => {
  console.log(document.getSelection());
  console.log(document.getSelection().toString());
}, 3000);

document.write("<h2>Hola Mundo desde el DOM</h2>");

// primer hijo y continuo + anterior
console.log(document.body.firstElementChild.nextElementSibling);
console.log(document.body.firstElementChild.previousElementSibling);
