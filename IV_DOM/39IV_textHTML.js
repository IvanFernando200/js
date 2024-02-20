const $whatIsDOM = document.getElementById("que-es");

let txt = `
  <p>
   El Modelo de Objetods del Doucmento(<b><i>DOM-Document Object Model</i></b>)es un API para documentos HTML y XML.
  </p>
  <p>
   Este provee una representacion estructural del documento, permitiendo modificar su contenido y peresentaicon visual mediante codigo JS.
  </p>
  <p>
   <mark>El DOM no es parte de la especificaicon de JavaScript, en una API para los navegadores</mark>
  </p>
  `;
// $whatIsDOM.textContent = txt;
// $whatIsDOM.innerHTML = txt;
$whatIsDOM.outerHTML = txt;