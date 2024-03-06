import networkStatus from "./assets/js/10deteccion_red.js";
import webCam from "./assets/js/11deteccion_webcam.js";
import getGeolocation from "./assets/js/12geolocalizacion.js";
import searchFilters from "./assets/js/13filtros_busquedas.js";
import draw from "./assets/js/14sorteo.js";
import sliderCarrucel from "./assets/js/15carrucel.js";
import scrollSpy from "./assets/js/16scroll-spia.js";
import smartVideo from "./assets/js/17video-inteligente.js";
import contactFormValidations from "./assets/js/18validaciones_formulario.js";
import speechReader from "./assets/js/19narrador.js";
import hamburgerMenu from "./assets/js/1hamburger.js";
import { alarm, digitalClock } from "./assets/js/2reloj.js";
import { moveBall, shortcut } from "./assets/js/3teclado.js";
import countDown from "./assets/js/4coundown.js";
import scrollTopBotton from "./assets/js/5boton_scroll.js";
import darkTheme from "./assets/js/6dark_mode.js";
import responsiveMedia from "./assets/js/7objeto_responsive.js";
import responsiveTester from "./assets/js/8prueba_responsive.js";
import userDeviceInfo from "./assets/js/9deteccion_dispositivos.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("./assets/media/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countDown(
    "countdown",
    "february 02, 2026 15:49:00",
    "Feliz cumpleaños tio continua, now Meylin can be your grilfriend"
  );
  scrollTopBotton(".scroll_top_btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    "<a href='https://youtu.be/57vu_tjAGDw?si=inrN7iM0b20z4nAF' target='_blank'>Andrew tate's advice</a>",
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/GQNthuipMDo?si=SsGbQAyql_QKVU1D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    "Contenido Movile",
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/tmv-6FgYnx4?si=RIgBnPEIOVlWtDmJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  searchFilters("#card-filter", ".card");
  draw("#winner-btn", ".player");
  sliderCarrucel();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

d.addEventListener("keydown", (e) => {
  shortcut(e);
  moveBall(e, ".stage", ".ball");
});

darkTheme(".dark-mode-btn", "dark-mode");
networkStatus(); //no necesita que se ejecute a la carga del documento por eso va fuera --- online y offline[n.onLine, window.adEventListener('online',),window.adEventListener('offline',)]

speechReader();