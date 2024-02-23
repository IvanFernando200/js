const d = document,
  $title = d.querySelector(".crud__title"),
  $form = d.querySelector(".crud__form"),
  $table = d.querySelector(".crud__table"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment();

const readAll = async () => {
  // GET
  try {
    const res = await fetch("http://localhost:8894/santos"),
      json = await res.json();
    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    json.forEach((obj) => {
      $template.querySelector(".name").textContent = obj.nombre;
      $template.querySelector(".constellation").textContent = obj.constelacion;

      $template.querySelector(".edit").dataset.name = obj.nombre;
      $template.querySelector(".edit").dataset.constellation = obj.constelacion;
      $template.querySelector(".edit").dataset.id = obj.id;
      $template.querySelector(".delete").dataset.id = obj.id;

      // const $clone = d.importNode($template, true);
      const $clone = $template.cloneNode(true);
      $fragment.appendChild($clone);
    });
    $table.querySelector("tbody").appendChild($fragment);
  } catch (err) {
    // console.log(err);
    let message = err.statusText || "Ocurrio un error";
    $table.insertAdjacentHTML(
      "afterend",
      `<p style="color: red"><b>Error ${err.status}: ${message}</b></p>`
    );
  }
};
d.addEventListener("DOMContentLoaded", readAll);
d.addEventListener("submit", async (e) => {
  if (e.target === $form) {
    e.preventDefault();
    if (!e.target.id.value) {
      // POST
      try {
        const res = await fetch("http://localhost:8894/santos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nombre: e.target.nombre.value,
              constelacion: e.target.constelacion.value,
            }),
          }),
          json = await res.json();
        e.target.nombre.value = null;
        e.target.constelacion.value = null;
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        location.reload();
      } catch (err) {
        // console.error(err);
        let message = err.statusText || "Ocurrio un error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p style="color: red"><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    } else {
      // PUT
      try {
        const res = await fetch(
            `http://localhost:8894/santos/${e.target.id.value}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                nombre: e.target.nombre.value,
                constelacion: e.target.constelacion.value,
              }),
            }
          ),
          json = await res.json();
        e.target.nombre.value = null;
        e.target.constelacion.value = null;
        e.target.id.value = null;
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        location.reload();
      } catch (err) {
        // console.error(err);
        let message = err.statusText || "Ocurrio un error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p style="color: red"><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    }
  }
});

d.addEventListener("click", async (e) => {
  if (e.target.matches(".edit")) {
    // PUT
    $title.innerHTML = "Editar Santo";
    $form.nombre.value = e.target.dataset.name;
    $form.constelacion.value = e.target.dataset.constellation;
    $form.id.value = e.target.dataset.id;
  }
  if (e.target.matches(".delete")) {
    // DELETE
    let option = confirm(`Desea eliminar la carta ${e.target.dataset.id}`);
    if (option) {
      try {
        const res = await fetch(
            `http://localhost:8894/santos/${e.target.dataset.id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          ),
          json = await res.json();
        $form.id.value = null;
        $form.nombre.value = null;
        $form.constelacion.value = null;
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        location.reload();
      } catch (err) {
        // console.error(err);
        let message = err.statusText || "Ocurrio un error";
        alert(`Error ${err.status}: ${message}`);
      }
    }
  }
});
