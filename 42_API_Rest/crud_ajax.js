const d = document,
  $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment();
  // npm install -g json-server
  // json-server -watch assets-JS/db.json
// json-server -w -p 8000 assets-JS/db.json

const ajax = (options) => {
  let { url, method, succes, error, data } = options;
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      const json = JSON.parse(xhr.responseText);
      console.log(json);
      succes(json);
    } else {
      let message = xhr.statusText || "Ocurrio un error";
      error(`Error, ${xhr.status}:${message}`);
    }
  });
  xhr.open(method || "GET", url);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.send(JSON.stringify(data));
};

const getAll = () => {
  // Obtener GET
  ajax({
    url: "http://localhost:8000/santos",
    // method: "GET",
    succes: (res) => {
      res.forEach((obj) => {
        $template.querySelector(".name").textContent = obj.nombre;
        $template.querySelector(".constellation").textContent =
          obj.constelacion;

        $template.querySelector(".edit").dataset.id = obj.id;
        $template.querySelector(".edit").dataset.name = obj.nombre;
        $template.querySelector(".edit").dataset.constellation =
          obj.constelacion;
        $template.querySelector(".delete").dataset.id = obj.id;

        let $clone = d.importNode($template, true);
        // let $clone = $template.cloneNode(true);
        $fragment.appendChild($clone);
      });
      $table.querySelector("tbody").appendChild($fragment);
    },
    error: (err) => {
      console.warn(err);
      $table.insertAdjacentHTML(
        "afterend",
        `<p><b style='color: red'>${err}</b></p>`
      );
    },
    // data: null,
  });
};
d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", (e) => {
  if (e.target === $form) {
    e.preventDefault();

    if (!e.target.id.value) {
      // Create - POST
      ajax({
        url: "http://localhost:8000/santos",
        method: "POST",
        succes: () => location.reload(),
        error: (err) =>
          $form.insertAdjacentElement("afterend", `<p><b>${err}</b></p>`),
        data: {
          nombre: e.target.nombre.value,
          constelacion: e.target.constelacion.value,
        },
      });
    } else {
      // Update - PUT
      ajax({
        url: `http://localhost:8000/santos/${e.target.id.value}`,
        method: "PUT",
        succes: () => location.reload(),
        error: (err) =>
          $form.insertAdjacentElement("afterend", `<p><b>${err}</b></p>`),
        data: {
          nombre: e.target.nombre.value,
          constelacion: e.target.constelacion.value,
        },
      });
    }
  }
});

d.addEventListener("click", (e) => {
  if (e.target.matches(".edit")) {
    // alert("Boton edit");
    $title.textContent = "Edit Santo";
    $form.nombre.value = e.target.dataset.name;
    $form.constelacion.value = e.target.dataset.constellation;
    $form.id.value = e.target.dataset.id;
  }
  if (e.target.matches(".delete")) {
    // DELETE
    // $form.id.value = e.target.dataset.id;
    // if ($form.id.value) {
    let option = confirm(`Desea eliminar la carta ${e.target.dataset.id}`);
    if (option) {
      ajax({
        url: `http://localhost:8000/santos/${e.target.dataset.id}`,
        method: "DELETE",
        succes: () => location.reload(),
        error: (err) => alert(err),
        // data: {},
      });
    }
    // }
  }
});
