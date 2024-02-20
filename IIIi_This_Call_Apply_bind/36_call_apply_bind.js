// call apply bind
console.log(this);
this.lugar = "Contexto Global";

function saludar(saludo, aQuien) {
  console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

saludar("Bienvenido", "Miu"); // Bienvenido Miu desde el Contexto Global

const obj = {
  lugar: "Contexto Objeto",
};

saludar.call(obj, "Hola", "Jon"); // Hola Jon desde el Contexto Objeto
saludar.call(null, "Hola", "Jon"); // Hola Jon desde el Contexto Global
saludar.call(this, "Hola", "Jon"); // Hola Jon desde el Contexto Global
saludar.apply(obj, ["Adios", "Mircha"]); // Adios Mircha desde el Contexto Objeto
this.nombre = "Window";
const persona = {
  nombre: "Jon",
  saludar() {
    console.log(`Hola ${this.nombre}`);
  },
};

persona.saludar(); // Hola Jon

/* const otraPersona = {
  saludar: persona.saludar.bind(persona),
};
otraPersona.saludar(); // Hola Jon */

const otraPersona = {
  saludar: persona.saludar.bind(this),
};
otraPersona.saludar(); // Hola Window
