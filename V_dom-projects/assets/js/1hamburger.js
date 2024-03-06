export default function hamburgerMenu(btn_menu, panel) {
  const d = document,
    $btn = d.querySelector(btn_menu),
    $panel = d.querySelector(panel);

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn_menu) || e.target.matches(`${btn_menu} *`)) {
      $btn.classList.toggle("is-active");
      $panel.classList.toggle("is-active");
    }
    if (e.target.matches(`${panel} a`)) {
      $btn.classList.remove("is-active");
      $panel.classList.remove("is-active");
    }
  });
}
