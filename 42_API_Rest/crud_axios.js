const d = document,
  $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment();

// axios("http://localhost:8000/santos").then((res) => {
//   res.data.forEach((obj) => {
//     const $cloneTemplate = $template.cloneNode(true);
//     $cloneTemplate.querySelector(".name").textContent = obj.nombre;
//     $cloneTemplate.querySelector(".constellation").textContent =
//       obj.constelacion;
//     $fragment.appendChild($cloneTemplate);
//   });
//   $table.querySelector("tbody").appendChild($fragment);
//   console.log(res.data);
// });

const getAll = async () => {
  try {
    let res = await axios.get("http://localhost:8000/santos"),
      json = await res.data;
    json.forEach((obj) => {
      $template.querySelector(".name").textContent = obj.nombre;
      $template.querySelector(".constellation").textContent = obj.constelacion;
      $template.querySelector(".edit").dataset.id = obj.id;
      $template.querySelector(".edit").dataset.name = obj.nombre;
      $template.querySelector(".edit").dataset.constellation = obj.constelacion;
      $template.querySelector(".delete").dataset.id = obj.id;
      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });
    $table.querySelector("tbody").appendChild($fragment);
  } catch (err) {
    let message = err.statusText || "Ocurrio un error";
    $table.insertAdjacentHTML(
      "afterend",
      `<p style="color: #f00"><b>Error ${err.statusText}: ${message}</b></p>`
    );
  }
};

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", async (e) => {
  if (e.target === $form) {
    e.preventDefault();
    if (!e.target.id.value) {
      // Create -- POST
      try {
        let options = {
            method: "POST",
            headers: {
              "Content-type": "application/json; charset=utf-8",
            },
            data: JSON.stringify({
              nombre: e.target.nombre.value,
              constelacion: e.target.constelacion.value,
            }),
          },
          res = await axios("http://localhost:8000/santos", options),
          json = res.data;
        location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrio un error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p style="color: #f00"><b>Error ${err.statusText}: ${message}</b></p>`
        );
      }
    } else {
      // Update -- PUT
      try {
        let options = {
            method: "PUT",
            headers: {
              "Content-type": "application/json; charset=utf-8",
            },
            data: JSON.stringify({
              nombre: e.target.nombre.value,
              constelacion: e.target.constelacion.value,
            }),
          },
          res = await axios(
            `http://localhost:8000/santos/${e.target.id.value}`,
            options
          ),
          json = await res.data;
        location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrio un error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p style="color: #f00"><b>Error ${err.statusText}: ${message}</b></p>`
        );
      }
    }
  }
});

d.addEventListener("click", async (e) => {
  if (e.target.matches(".edit")) {
    $title.textContent = "Edit Santo";
    $form.nombre.value = e.target.dataset.name;
    $form.constelacion.value = e.target.dataset.constellation;
    $form.id.value = e.target.dataset.id;
  }
  if (e.target.matches(".delete"))
  {
    // Delete ---DELETE
    try {
      let option = confirm(`Desea eliminar la carta ${e.target.dataset.id}`);
      if (option) {
        let options = {
            method: "DELETE",
            headers: {
              "Content-type": "application/json; charset=utf-8",
            },
          },
          res = await axios(
            `http://localhost:8000/santos/${e.target.dataset.id}`,
            options
          ),
          json = await res.data;
        location.reload();
      }
    } catch (err) {
      let message = err.statusText || "Ocurrio n error";
      alert(`Error ${err.statusText}: ${message}`);
    }
  }
});