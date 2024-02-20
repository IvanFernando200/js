export default function hamburgerMenu(panelBth, panel, menuLink) {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBth) || e.target.matches(`${panelBth} *`)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBth).classList.toggle("is-active");
    }
    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBth).classList.remove("is-active");
    }
  });
}
