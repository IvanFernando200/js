// api interseccion observer: para scrollspy
const d = document;
export default function scrollSpy() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]"); // 1) Lista de elementos section
  const cb = (entries) => {
    // entries // 4) UNA Lista de objetos  OBSERVANDO. Para cada seccion respectiva
    // console.log(entries);

    // entries.forEach((elemento, posicion, entries) => { });

    entries.forEach((entry) => {
      // console.log(entry); // cada objeto OBSERVANDO   (uno en uno)
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
          "active"
        );
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
          "active"
        );
      }
    });
  };

  const observer = new IntersectionObserver(cb, {
    // root
    // rootMargin: "-250px";
    threshold: [0.5, 0.75],
  }); // 2) Objeto: IntersectionObserver
  // console.log(observer);
  $sections.forEach((el) => observer.observe(el)); // 3) Observar cada seccion
}
