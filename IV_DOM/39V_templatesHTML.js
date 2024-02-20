const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Tecnologia",
      img: "https://picsum.photos/200/200?tecnologia",
    },
    {
      title: "Animales",
      img: "https://picsum.photos/200/200?animales",
    },
    {
      title: "Arquitectura",
      img: "https://picsum.photos/200/200?arquitectura",
    },
    {
      title: "Gente",
      img: "https://picsum.photos/200/200?gente",
    },
    {
      title: "Naturaleza",
      img: "https://picsum.photos/200/200?naturaleza",
    },
  ];

cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;
  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);
