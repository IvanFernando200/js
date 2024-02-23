const d = document,
  $table = d.querySelector(".crud__table"),
  $form = d.querySelector(".crud__form"),
  $title = d.querySelector(".crud__title"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment();

const ajax = (options) => {
  const { url, method, success, error, data } = options;
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      const json = JSON.parse(xhr.responseText);
      success(json);
    } else {
      let message = xhr.statusText || "An error has ocurred";
      error(`Error ${xhr.status}: ${message}`);
    }
  });

  xhr.open(method || "GET", url);

  // Generate a header ----> this is necessary for json format
  xhr.setRequestHeader("content-type", "application/json; charset=utf-8");

  xhr.send(JSON.stringify(data));
};
const readAll = () => {
  ajax({
    url: "http://localhost:8894/santos",
    success(res) {
      res.forEach((obj) => {
        $template.querySelector(".name").textContent = obj.nombre;
        $template.querySelector(".constellation").textContent =
          obj.constelacion;
        $template.querySelector(".edit").dataset.id = obj.id;
        $template.querySelector(".edit").dataset.name = obj.nombre;
        $template.querySelector(".edit").dataset.constellation =
          obj.constelacion;
        $template.querySelector(".delete").dataset.id = obj.id;
        const $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
      });
      $table.querySelector("tbody").appendChild($fragment);
    },
    error(err) {
      $table.insertAdjacentHTML(
        "afterend",
        `<p style="color: red"><b>${err}</b></p>`
      );
    },
  });
};

d.addEventListener("DOMContentLoaded", readAll);
d.addEventListener("submit", (e) => {
  if (e.target === $form) {
    e.preventDefault();
    if (!e.target.id.value) {
      // insert - POST
      ajax({
        url: "http://localhost:8894/santos",
        method: "POST",
        success: (res) => location.reload(),
        error: () =>
          $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
        data: {
          nombre: e.target.nombre.value,
          constelacion: e.target.constelacion.value,
        },
      });
      $form.nombre.value = null;
      $form.constelacion.value = null;
    } else {
      // update - PUT
      ajax({
        url: `http://localhost:8894/santos/${$form.id.value}`,
        method: "PUT",
        success: () => location.reload(),
        error: () =>
          $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
        data: {
          nombre: e.target.nombre.value,
          constelacion: e.target.constelacion.value,
        },
      });
      $form.id.value = null;
      $form.nombre.value = null;
      $form.constelacion.value = null;
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
    e.preventDefault();
    // DELETE
    let option = confirm(`Desea eliminar la carta ${e.target.dataset.id}`);
    if (option) {
      ajax({
        url: `http://localhost:8894/santos/${e.target.dataset.id}`,
        method: "DELETE",
        success: () => location.reload(),
        error: (err) => alert(err),
      });
      $form.id.value = null;
      $form.nombre.value = null;
      $form.constelacion.value = null;
    }
  }
});
