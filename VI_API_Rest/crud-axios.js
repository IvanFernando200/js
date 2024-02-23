// import axios from "axios";
const d = document,
  $form = d.querySelector(".crud__form"),
  $title = d.querySelector(".crud__title"),
  $table = d.querySelector(".crud__table"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment();

const readAll = async () => {
  try {
    const res = await axios.get("http://localhost:8894/santos");
    const json = res.data;
    console.log(json);

    json.forEach((obj) => {
      $template.querySelector(".name").textContent = obj.nombre;
      $template.querySelector(".constellation").textContent = obj.constelacion;

      $template.querySelector(".edit").dataset.name = obj.nombre;
      $template.querySelector(".edit").dataset.constellation = obj.constelacion;
      $template.querySelector(".edit").dataset.id = obj.id;
      $template.querySelector(".delete").dataset.id = obj.id;

      const $clone = $template.cloneNode(true);
      $fragment.append($clone);
    });

    $table.querySelector("tbody").append($fragment);
  } catch (err) {
    console.log(err);
    // const message = err.response.statusText || "We have probles";
    // $table.insertAdjacentHTML(
    //   "afterend",
    //   `<p style="color: red"><b>Error ${err.response.status}: ${message}</b></p>`
    // );
    $table.insertAdjacentHTML(
      "afterend",
      `<p style="color: red"><b>Error ${err.message}</b></p>`
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
        const res = await axios({
          url: "http://localhost:8894/santos",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify({
            nombre: e.target.nombre.value,
            constelacion: e.target.constelacion.value,
          }),
        });
        const json = res.data;
        e.target.nombre.value = null;
        e.target.constelacion.value = null;
        location.reload();
      } catch (err) {
        const message = err.response.statusText || "We have probles";
        $form.insertAdjacentHTML(
          "afterend",
          `<p style="color: red"><b>Error ${err.response.status}: ${message}</b></p>`
        );
      }
    } else {
      // PUT
      try {
        const res = await axios({
          url: `http://localhost:8894/santos/${e.target.id.value}`,
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify({
            nombre: e.target.nombre.value,
            constelacion: e.target.constelacion.value,
          }),
        });
        const json = res.data;
        e.target.id.value = null;
        e.target.nombre.value = null;
        e.target.constelacion.value = null;
        location.reload();
      } catch (err) {
        const message = err.response.statusText || "We have probles";
        $form.insertAdjacentHTML(
          "afterend",
          `<p style="color: red"><b>Error ${err.response.status}: ${message}</b></p>`
        );
      }
    }
  }
});

d.addEventListener("click", async (e) => {
  if (e.target.matches(".edit")) {
    $title.textContent = "Editar Santo";
    $form.nombre.value = e.target.dataset.name;
    $form.constelacion.value = e.target.dataset.constellation;
    $form.id.value = e.target.dataset.id;
  }
  if (e.target.matches(".delete")) {
    const option = confirm(`Desea eliminar la targeta ${e.target.dataset.id}`);
    if (option) {
      try {
        const res = await axios({
          url: `http://localhost:8894/santos/${e.target.dataset.id}`,
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = res.data;
        $form.id.value = null;
        $form.nombre.value = null;
        $form.constelacion.value = null;
        location.reload();
      } catch (err) {
        alert(err.message || "Error deleting the card");
      }
    }
  }
});
