import hamburgerMenu from "./domJsExersise/1_menu_hamburguers.js";
import { alarm, digitalClock } from "./domJsExersise/2_reloj.js";
import { moveBall, shortcuts } from "./domJsExersise/3_teclado.js";
import countdown from "./domJsExersise/4_cuenta_regresiva.js";
import scrollTopBth from "./domJsExersise/5_boton_scroll.js";
// import dark_theme from "./domJsExersise/6_boton_dark_theme.js";
import responsiveMedia from "./domJsExersise/7_objeto_responsive.js";
import responsiveTest from "./domJsExersise/8_prueba_responsive.js";
import userDeviceInfo from "./domJsExersise/9_deteccion_dispositivos.js";
import networkStatus from "./domJsExersise/10_deteccion_red.js";
import webCam from "./domJsExersise/11_detecion_webcam.js";
import getGeolocation from "./domJsExersise/12_geolocalizacion.js";
import searchFilter from "./domJsExersise/13_filtro_busquedas.js";
import draw from "./domJsExersise/14_sorteo.js";
import slider from "./domJsExersise/15_carrusel.js";
import scrollSpy from "./domJsExersise/16_scroll_espia.js";
import smartVideo from "./domJsExersise/17_video_inteligente.js";
import contactFormValidations from "./domJsExersise/18_validaciones_formlario.js";
import speechReader from "./domJsExersise/19_narrador.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("./assetsJs/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown(
    "countdown",
    "June 7,2024 12:00:00",
    "Feliz Dia vos es el mejor; Ahora ya eres programador 😁"
    // 1023455488000
    // May 23,2021 03:23:19
    // Friday, 7 June 2002 13:20:37
  );
  scrollTopBth(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 500px)",
    `<a href="https://youtu.be/NtfbWkxJTHw?si=6LQby3cKuAn_QHgc" target="_blank" rel="noopener">Ver Video</a> `,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/NtfbWkxJTHw?si=JCYbGwgp5DntTu83" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 500px)",
    "Contenido Movil",
    "Contenido Escritorio"
  );
  responsiveTest("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  searchFilter(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

// BOM-eventos: resize, scroll, (DOMContentLoaded)<=(load)

dark_theme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();

