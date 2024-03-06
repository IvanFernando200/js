const d = document,
  $title = d.querySelector(".crud-title"),
  $form = d.querySelector(".crud-form"),
  $table = d.querySelector(".crud-table"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment();

const ajax = (props) => {
  const { method, url, success, error, data } = props;
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      const json = JSON.parse(xhr.responseText);
      success(json);
    } else {
      const message = xhr.statusText || "!Opps ocurrio un error";
      error(`Error ${xhr.status}: ${message}`);
    }
  });
  xhr.open(method || "GET", url);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf8");
  xhr.send(JSON.stringify(data));
};
const render = () => {
  ajax({
    url: "http://localhost:8790/santos",
    success: (res) => {
      console.log(res);
      res.forEach((obj) => {
        $template.querySelector(".name").textContent = obj.nombre;
        $template.querySelector(".constellation").textContent =
          obj.constelacion;
        $template.querySelector(".edit").dataset.constellation =
          obj.constelacion;
        $template.querySelector(".edit").dataset.name = obj.nombre;
        $template.querySelector(".edit").dataset.id = obj.id;
        $template.querySelector(".delete").dataset.id = obj.id;
        const $clone = $template.cloneNode(true);
        // const $clone = d.importNode($template, true);
        $fragment.append($clone);
      });
      $table.querySelector("tbody").append($fragment);
    },
    error: (err) => {
      console.log(err);
    },
  });
};
d.addEventListener("DOMContentLoaded", render);

d.addEventListener("submit", (e) => {
  if (e.target === $form) {
    e.preventDefault();
    if (!e.target.id.value) {
      ajax({
        method: "POST",
        url: "http://localhost:8790/santos",
        success: () => location.reload(),
        error: (err) => console.log(err),
        data: {
          nombre: e.target.nombre.value,
          constelacion: e.target.constelacion.value,
        },
      });
      e.target.nombre.value = null;
      e.target.constelacion.value = null;
    } else {
      ajax({
        method: "PUT",
        url: `http://localhost:8790/santos/${e.target.id.value}`,
        success: () => location.reload(),
        error: (err) => console.log(err),
        data: {
          nombre: e.target.nombre.value,
          constelacion: e.target.constelacion.value,
        },
      });
      e.target.nombre.value = null;
      e.target.constelacion.value = null;
      e.target.id.value = null;
    }
  }
});

d.addEventListener("click", (e) => {
  if (e.target.matches(".edit")) {
    $title.textContent = "Editar Santo";
    $form.nombre.value = e.target.dataset.name;
    $form.constelacion.value = e.target.dataset.constellation;
    $form.id.value = e.target.dataset.id;
  }
  if (e.target.matches(".delete")) {
    const isDelete = confirm(
      `Do you really, wanna delete the ${e.target.dataset.id} item`
    );
    if (isDelete) {
      ajax({
        method: "DELETE",
        url: `http://localhost:8790/santos/${e.target.dataset.id}`,
        success: () => location.reload(),
        error: (err) => console.log(err),
      });
    }
  }
});

// axios({
//   method: "post",
//   url: "/user/12345",
//   data: {
//     firstName: "Fred",
//     lastName: "Flintstone",
//   },
// });
// npm install -g json-server
// json-server --watch db.json
// json-server -w -p 8790 VI_ajax/db.json
