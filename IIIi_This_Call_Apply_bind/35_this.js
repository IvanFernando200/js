console.log(this);
console.log(window);
console.log(this === window);

this.nombre = "Contexto global";
console.log(this.nombre); // Contexto global

function imprimir() {
  console.log(this.nombre);
}
imprimir(); // Contexto global

const obj = {
  nombre: "Contexto Objeto",
  /* imprimir: function () {
    console.log(this.nombre);
  }, */
  imprimir() {
    console.log(this.nombre);
  },
};
obj.imprimir(); // Contexto Objeto

const obj2 = {
  nombre: "Contexto Objeto 2",
  imprimir,
};
obj2.imprimir(); // Contexto Objeto 2

const obj3 = {
  nombre: "Context Objeto 3",
  imprimir: () => {
    console.log(this.nombre);
  },
};
obj3.imprimir(); // Contexto global

function Persona(nombre) {
  const that = this;
  // this.nombre = nombre;
  that.nombre = nombre;

  // return console.log(this.nombre); //Jon
  /* return function ()
  {
    console.log(this.nombre); // Objeto global
  } */
  // reuturn ()=>console.log(this.nombre); // Jon
  return function () {
    console.log(that.nombre); // Jon
  };
}

let jon = new Persona("Jon");
jon();
// console.dir(document);
// console.dir(console);
