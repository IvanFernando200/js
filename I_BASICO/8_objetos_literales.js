let nombre = "TutKa",
  edad = 4;
// Forma antigua
const perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function () {
    console.log("Guauu guauuu!!!");
  },
};
console.log(perro);
perro.ladrar();


//NUEVA FORMA Y LA MAS RECOMENDADA
// Usando Objetos literales( ) ESCRIPT_6
const cat = {
  nombre,
  edad,
  raza: "faithful",
  maullar() {
    console.log("Miau miau!!!");
  },
};
console.log(cat);
// Ojo no olvidarme los parentesis (), al llamar la funcion(metodo)
cat.maullar();
