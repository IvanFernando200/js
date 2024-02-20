// Una funcion fabrica es una funcion que devuelve un objeto(presumiblemente nuevo), sin ser una clase o un constructor

// CRUD: CREATE, READ, UPDATE, DELETE

function crud(params) {
  let usuarios = [];
  return {
    create(usuario) {
      usuarios.push(usuario);
    },
    read(callback) {
      callback(usuarios);
    },
    update(usuario) {
      usuarios = usuarios.map((user) =>
        user.name === usuario.name ? usuario : user
      );
    },
    delete(usuario) {
      usuarios = usuarios.filter((user) => user.nombre !== usuario.name);
    },
  };
}

const groupGen35 = crud();
// create
groupGen35.create({ name: "Ivan" });
groupGen35.create({ name: "Meylin" });

// read
groupGen35.read((users) => {
  console.log(users); // [{name: 'Ivan'}, {name: 'Meylin'}]
});

// update
groupGen35.update({ name: "Ivan", ege: 24 });
groupGen35.read((users) => {
  console.log(users); // [{name: 'Ivan', age: 24},{name: 'Meylin'}]
});

// delete
groupGen35.delete({ name: "Meylin" });
groupGen35.read((users) => {
  console.log(users); // [{name: 'Ivan', age: 24}]
});

const grupo2 = crud();
grupo2.create({ name: "Meylin" });
grupo2.read((users) => {
  console.log(users); // [{name: 'Meylin'}]
});
