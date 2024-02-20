const d = document;

export default function responsiveTest(form) {
  const $form = d.getElementById(form);
  let tester;

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      // console.log($form.direccion);
      tester = window.open(
        $form.direccion.value,
        "tester",
        `innerWidth=${$form.ancho.value},innerHeight=${$form.alto.value}`
      );

    }
  });
  d.addEventListener("click", (e) => {
    if (e.target === $form.cerrar) {
      e.preventDefault();
      tester.close();
    }
  });
}

