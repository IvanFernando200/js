// Escritura de codigo
// identificadores deben comenzar con: una letra, un signo($), un guion bajo(_), Nunca con numero o caracterres especiales.
const $seguimos = 0;
const _nada = false;
const primero = "first";

// Usar snake_case en: Archivos
mi_archivo_javascript.js;
// usar UPPER_CASE en: Constantes
const UNA_CONSTANTE = "Soy una constante";
PI = 3.141592653589793;
// usar UpeperCamelCase en: Clases
class SerHumano {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }
  miNombreEs() {
    return `Mi nombre es ${this.nombre}`;
  }
}

// usar lowerCamelCase en: Objetos,Primitivos, Funciones, Instancias
const unObjeto = {
  nombre: "Jonathan",
  email: "jonmircha@gmail.com",
};

// primitivos
let unaCadena, unNumero, unBoolean;
unaCadena = "Hola Mundo";
unNumero = 19;
unBoolean = true;

function holaMundo(nombre) {
  alert(`Hola mundo ${nombre}`);
}
holaMundo("Jonathan");

const ajax = new XMLHttpRequest(),
  jon = new SerHumano("JOnathan", "Hombre");

// TIPOS DE DATOS EN JAVASCRIPT
/*
Primitivos: Se accede directamente al valor.

string
number
boolean
null
undefined
NaN
Compuestos: Se accede a la referencia del valor.

object = {}
array = []
function () { }
Class {}
etc. */
