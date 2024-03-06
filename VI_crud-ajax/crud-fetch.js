const d = document,
  $title = d.querySelector(".crud-title"),
  $form = d.querySelector(".crud-form"),
  $table = d.querySelector(".crud-table"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment();

const render = async () => {
  try {
    const res = await fetch("http://localhost:8790/santos");
    const json = await res.json();
    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    json.forEach((obj) => {
      $template.querySelector(".name").textContent = obj.nombre;
      $template.querySelector(".constellation").textContent = obj.constelacion;
      $template.querySelector(".edit").dataset.name = obj.nombre;
      $template.querySelector(".edit").dataset.constelation = obj.constelacion;
      $template.querySelector(".edit").dataset.id = obj.id;
      $template.querySelector(".delete").dataset.id = obj.id;
      const $clone = d.importNode($template, true);
      // const $clone = $template.cloneNode(true);
      $fragment.append($clone);
    });

    $table.querySelector("tbody").append($fragment);
  } catch (err) {
    let message = err.statusText || "Error";
    $table.insertAdjacentHTML(
      "afterend",
      `<p><b>Error ${err.status}: ${message}</b></p>`
    );
  }
};
d.addEventListener("DOMContentLoaded", render);

d.addEventListener("submit", async (e) => {
  if (e.target === $form) {
    e.preventDefault();
    if (!e.target.id.value) {
      try {
        const res = await fetch("http://localhost:8790/santos", {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=utf8",
          },
          body: JSON.stringify({
            nombre: e.target.nombre.value,
            constelacion: e.target.constelacion.value,
          }),
        });
        const json = res.json();
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        location.reload();
      } catch (err) {
        let message = err.statusText || "Error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${err.status}: ${message}</b></p>`
        );
      }
      e.target.nombre.value = null;
      e.target.constelacion.value = null;
    } else {
      try {
        const res = await fetch(
          `http://localhost:8790/santos/${e.target.id.value}`,
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json; charset=utf8",
            },
            body: JSON.stringify({
              nombre: e.target.nombre.value,
              constelacion: e.target.constelacion.value,
            }),
          }
        );
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        location.reload();
      } catch (err) {
        let message = err.statusText || "Error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${err.status}: ${message}</b></p>`
        );
      }
      e.target.nombre.value = null;
      e.target.constelacion.value = null;
      e.target.id.value = null;
    }
  }
});

d.addEventListener("click", async (e) => {
  if (e.target.matches(".edit")) {
    $title.textContent = "Editar Santo";
    console.log(e.target.dataset.name);
    $form.nombre.value = e.target.dataset.name;
    $form.constelacion.value = e.target.dataset.constelation;
    $form.id.value = e.target.dataset.id;
  }
  if (e.target.matches(".delete")) {
    const isDelete = confirm(
      `Do you really wanna delete the ${e.target.dataset.id} item`
    );
    if (isDelete) {
      try {
        const res = await fetch(
          `http://localhost:8790/santos/${e.target.dataset.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-type": "application/json; charset=utf8",
            },
          }
        );
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        location.reload();
      } catch (err) {
        let message = err.statusText || "Error";
        alert(`Error ${err.status}: ${message}`);
      }
    }
  }
});
