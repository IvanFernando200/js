{
  // SELECCION: de nodos
  const $paragraph = document.querySelector(".parrafo");
  // querySelector
  // querySelectorAll // NodeList
  // getElementById
}

//  Objeto: dataset, style, classList, children-----atributo global
$etiqueta.dataset; // DOMStringMap
$etiqueta.style; // CSSStyleDeclaration
$etiqueta.classList; // DOMTokenList
$etiqueta.children; // HTMLCollection

{
  // DEFINIR OBTENER Y ELIMINAR: Todo tipo de atributos e incluso (style, dataset y class).
  const $linkDOM = document.querySelector(".link-dom");
  // method()::::::::::::::::::::::::::::
  $linkDOM.getAttribute("href"); // dom.html
  $linkDOM.setAttribute("rel", "noopener");
  $linkDOM.setAttribute("style", "font-family: cursive;color: green");
  // setAttribute
  // getAttribute
  // removeAttribute
  // hasAttribute

  // Notacion punto(.):::::::::::::::::::::Nos da mas detalles como href de pagina nos da con todo https://...;
  $linkDOM.href; // dom.html
  $linkDOM.href = "https://anyoneai.com/";
  {
    // ATRIBUTOS NORMALES(globales)
    // contenteditable-->(true)
    // dir-->(rtl,ltr)
    // hidden-->(true)
    // tabindex-->(0)
    // title
    // Para imputs::::::
    // value
    // type
    // accept-->(image/png)
    // form
    // minLengh
    // placeholder
    // required="true"
  }
}
{
  // DATAATRIBUTES:::::::::::::::::::::::::::::::::::::::::::::.................................
  // method()----Igual----getAttribute, setAttribute, hasAttribute, removeAttribute
  $linkDOM.getAttribute("data-description"); // la descripcion simple.....
  // ----Notacion--punto✅💖
  $linkDOM.dataset; // DOMStringMap
  $linkDOM.dataset.description; // la descripcion simple.....
}

{
  // STYLE::::::::::::::::::::::::::::::::::::::::::::::::::::::................................
  // method()----Igual----getAttribute, setAttribute, hasAttribute, removeAttribute
  $linkDOM.getAttribute("style"); // background: #0ff;color: #222;

  // ----Notacion--punto✅💖
  $linkDOM.style; // CSSStyleDeclaration (normal)
  $linkDOM.style = "color: #929";
  $linkDOM.style.color = "#826";
  $linkDOM.style.visibhility = "hidden";

  // Variables CSS - Custom Properties CSS::::::::::::::::::
  window.getComputedStyle($linkDOM); // CSSStyleDeclaration (with all the default properties)----just to read------
  window.getComputedStyle($linkDOM).getPropertyValue("color"); // #f00

  // more ....... DENTRO DE STYLE
  // SET
  $linkDOM.style.setProperty("background-color", "blue");
  $linkDOM.style.textAlign = "center";

  // GET
  // $linkDOM.style.getProperty ❌---------No existe
  $linkDOM.style.getPropertyValue("background-color"); // rgb(0,0,255)
  $linkDOM.style.backgroundColor; // #00f

  // EXAMPLE::::::::::::
  const $html = document.documentElement,
    $body = document.body;
  // Obtencion:
  let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"); // #222
  // Asignacion: set
  // $body.style.backgroundColor = varDarkColor;
  $body.style.setProperty("bakcground-color", varDarkColor);
  {
    // set a new or change:
    $html.style.setProperty("--aqua-color", "#0ff");
    // get
    varAquaColor = getComputedStyle($html).getPropertyValue("--aqua-color");
    // Asignacion: set
    $body.style.backgroundColor = varAquaColor;
    // $body.style.setProperty("background-color", varAquaColor);
  }
}
{
  // CLASS::::::::::::::::::::::::::::::::::::::::::::::::::::::....................................
  // method()----Igual----getAttribute, setAttribute, hasAttribute, removeAttribute
  $linkDOM.getAttribute("class"); // bg-color, text-center
  // ----Notacion--punto✅💖
  $linkDOM.className; // bg-color, text-center----(solo lectura)
  $linkDOM.classList; // DOMTokenList
  // metodos classlist $$$$$$$$$$$$$ (add, remove, toggle, contains, replace)
  $linkDOM.classList.add("bg-black");
  // (añadir y elminar mas de una clase[add, remove])
  $linkDOM.classList.add("sepia", "opacity-80");
}
{
  // HTML - txt
  // OBTENCION Y MODIFICACION DE ELEMENTOS HTML
  const $parrafo = document.getElementById("parrafo");
  $parrafo.textContent; // contenido dentro de la etiqueta ::textual
  $parrafo.innerHTML; // contenido dentro de la etiqueta ::renderisando otras etiquetas
  $parrafo.outerHTML; // contenido que reemplaza todo :: renderiza etiquetas
}

{
  // DOM : DUM TRAVERSING:::::::.....para hijos elementos✅, hijos nodos💢.
  const $cards = document.querySelector(".cards");
  // a) children // hijos elementos
  $cards.children; // HTMLCollection
  $cards.children;
  $cards.children[3];
  $cards.children.item(3);

  $cards.firstElementChild;
  $cards.lastElementChild;

  $cards.parentElement;

  $cards.previousElementSibling;
  $cards.nextElementSibling;

  // Ancestro mas cercano especificado::::
  $cards.children[2].closest("section"); // secction
  //  En caso de no tener me da null

  // RECORRER
  for (card of $cards.children) {
    console.log(card);
    // No funciona for each
  }
  {
    // OLD STYLE----modificar elementos:::::
    // appendChild
    // insertBefore
    // replaceChild
    // removeChild
    // insertAfter🚫(no hay)
    // clonacion normal::::✅
    const $cloneCards = $cards.cloneNode(true);
    document.body.appendChild($cloneCards);
    // hasChildNodes()
  }
  {
    // COOL STYLE
    // insertAdjacentElement(position, el);
    // insertAdjacentHTML(position, html);
    // insertAdjacentText(position, text);
    // EJM:::::::::::::::::::::::::::::::: insertAdjacentElemnt('beforeend',newChild)
    // METODOS DE JQUERY: AHORA YA SOPORTA JS
    // $cards.before($newCard); // (hermano anterior)
    // $cards.prepend($newCard); // (primer hijo)
    // $cards.append($newCard); // (ultimo hijo)
    // $cards.after($newCard); // (hermano posterior)
  }
}
{
  // CREACION DE NODOS---( element && text )
  const $li = document.createElement("li");
  const $text = document.createTextNode("Texto nodo para contenido");
  const $fragment = document.createDocumentFragment();
  $li.appendChild($text);
}

{
  // TEMPLATE
  // template+fragment ♻️✅
  // <template> ---No se renderiza en el html
  const $template = document.getElementById("template-card").content; // content💖

  array.forEach((el) => {
    // acceder💖
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("figcaption").textContent = el.title;
    // clonar💖
    let $clone = document.importNode($template, true);
    $fragmento.appendChild($clone);
  });

  $cards.appendChild($fragmento);
}
// RESUME:: la mejor forma de insertar elementos es con createElement, createDocumentFragemnt y etiqueta template de html(clonandolo).
{
  // CLONACION:
  // $cloneCards = $cards.cloneNode(true);
  // document.body.appendChild($cloneCards);
  // appendChild()---inserta al finalde de todos los elmentos hijos.

  // RECORRER:
  const $contenedor = document.querySelector(".cards");
  $contenedor.children; // for( of ) //HTMLColection

  const $cards = document.querySelectorAll(".card");
  // for( of ) y forEach //NodeList
  (() => {
    $cards.forEach(($card) => {
      $card.classList.add("rotate-45");
    });
  })();
}

{
  // EVENTOS::::
  const $btn = document.getElementById("evento");
  // evetos multiples
  $btn.addEventListener("click", (e) => {
    console.log(e);
  });
  // remover eventos
  const presentation = (e) => {
    console.log(e.type);
    console.log(e); //  e === event === MouseEvent
    $btn.removeEventListener("dblclick", presentation);
    $btn.disabled = true;
  };
  $btn.addEventListener("dblclick", presentation);
}

{
  // FLUJO DE EVENTOS: Tercer parametro; burbuja, captura. (true === captura, false== burbuja,{})
  const $divEventos = document.querySelectorAll(".eventos-flujo div");
  console.log($divEventos);

  function flujoEventos(e) {
    // this === div
    console.log(
      `Hola te saluda ${this.className}, el click lo origino ${e.target.className}`
    );
  }

  $divEventos.forEach((div) => {
    div.addEventListener("click", flujoEventos, {
      capture: true, //false es por defecto.
      once: true, // ejecuta una sola vez
    });
  });
} // Ya no interesa al utilizar (DELEGACION DE EVENTOS)♻️
// event.type; ---tipo de evento
// event.target; --el elemento que resive el evento✅
// stopPropPreventDef:::::::::::::::::::::::::::::::::
// event.stopPropagation(); ---dentro del addEventListener
// event.preventDefault(); ----dentro del addEventListener✅ (OJO ::Applicarla al event)
{
  // DELEGACION DE EVENTOS: ✅
  function flujoEventos(e) {
    console.log(
      // this === window
      `Hola te saluda ${this}, el click lo origino ${e.target.className}`
    );
  }
  document.addEventListener("click", (e) => {
    if (e.target.matches(".eventos-flujo div")) {
      flujoEventos(e);
    }
    if (e.target.matches(".eventos-flujo a")) {
      alert("Hola jon mircha");
      e.preventDefault();
    }
  });
}

// BOM:
// Eventos:
// resize, window.innerWidth window.outerHeight✅ e.target === window
// scroll, window.scrollX✅ e.target===document

// load; window.screenX🚫 e.target===document
// DOMContentLoaded, carga 7veces mas rapido que load; window.screenX✅ e.target === document

{
  // Eventos: resize, scroll, DOMContentLoaded
  // confirm, alert, prompt, open, close, print
  let ventana;
  window.addEventListener("click", (e) => {
    if (e.target.matches("#abrir-ventana")) {
      // window.open('https://jonmircha.com');
      ventana = open("https://jonmircha.com");
    }
    if (e.target.matches("#cerrar-ventana")) {
      // window.close();
      ventana.close();
    }
    if (e.target.matches("#imprimir-ventana")) {
      window.print();
    }
  });
}

// Objetos BOM: location, history, navigator:
{
  // location. ----> tenemos propiedades (it's easy)
  location.reload();
  location.assign();

  // history -----> propiedad length y ver el objeto (it's easy)
  history.back(3);
  history.forward(3);
  history.go(-3); // positivo adelante, negativo atras

  navigator.language;
  navigator.connection;
  navigator.bluetooth;
  navigator.clipboard;
  navigator.credentials;
  navigator.geolocation; // important
  navigator.mediaDevices; // really important
  navigator.mimeTypes;
  navigator.platform;
  navigator.onLine;
  navigator.serviceWorker; // para progresib web app: pasar un simple sitio web a una applicacion instalable
  navigator.storage; // api de almacenamiento // important
  navigator.usb;
  navigator.userAgent; // important
}

{
  // HTMLCollection to array
  console.log(Array.prototype);
  const arrayFrom = Array.from(d.documentElement.children);
  arrayFrom.forEach((node) => console.log(node));
  //  Igual tambien se puede hacer con los Nodos
  d.documentElement.childNodes;

  // Hijos dierectos
  d.documentElement.firstElementChild;
  d.documentElement.lastElementChild;

  // Hermano siguiente
  d.documentElement.firstElementChild.nextElementSibling;
  // Hermano anterior
  d.documentElement.lastElementChild.previousElementSibling;

  // Curso de algoritmos en academlo Plus
}
