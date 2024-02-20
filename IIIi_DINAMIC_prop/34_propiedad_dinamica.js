const objUsuarios = {
  propiedad: "valor",
  [`id_${Math.round(Math.random() * 100 + 5)}`]: "valor aleatorio",
};
console.log(objUsuarios);

const usuarios = ["Jon", "Irma", "Miguel", "Matias", "Noimi"];
usuarios.forEach((usuario, index) => {
  objUsuarios[`id_${index}`] = usuario;
});

console.log(objUsuarios);
