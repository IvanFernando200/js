// LAS IMPORTACIONES VAN ADELANATE
import motivation, {
  Saludo,
  PI,
  usuario,
  // Alias: darle un nuevo nombre
  aritmetica as calculos,
  nada,
  numero,
} from "./20_constantes_tst.js";
// import { saludar } from "22_methods.js";
// saludar();

// EJEMPLO MAS ALUCINANTE

console.log("Archivo modulos.js");

console.log(PI, usuario);

console.log(calculos.restar(200, 130));

motivation();

let saludo = new Saludo();
saludo;

nada();
numero();

{
  // 1) Script va al final en html antes del </body>
  // 2) IMPORTANTE EL type="module"
  // 3) Los import van antes de mi codigo
}

{
  // 4) EN EL LUGAR DONDE SE EXPORTA
  // Solo para exportar por default:
  // funcion declarada(){} :: en la misma linea
  // const expresada = function(){} :: en la siguiente linea
  // Solo una funcion o variable puede ser exportada por default
}
{
  // 5) LUGAR DONDE SE IMPORTA
  // puedo usar as para ponerle otro nombre a mi funcion o variable
}
{
  // EJEMPLO MAS ESTILULANTE DE IMPORT
  // import React, { Component } from "react";
}
