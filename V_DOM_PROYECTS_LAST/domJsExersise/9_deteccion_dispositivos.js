// ***** window.navigator.userAgent ***** //
// objeto navigator
const d = document,
  n = navigator,
  ua = n.userAgent;

export default function userDeviceInfo(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|eimobile/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.ie() ||
          this.edge() ||
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera()
        );
      },
    };

  // console.group("---DETECCION DE DISPOSITIVOS");
  // console.log(n);
  // console.log(ua);

  // console.log(isMobile.android());
  //   console.log(isMobile.ios());
  //   console.log(isMobile.any());

  // console.groupEnd();

  $id.innerHTML = `
  <ul>
    <li>User Agent: <b>${ua}</b></li>
    <li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</li>
    <li>Navegador: <b>${isBrowser.any()}</b></li>
  </ul>
  `;
  /* Contenido exclusivo */
  if (isBrowser.chrome()) {
    $id.innerHTML += `<p>
      <mark>Este contenido solo se ve en Chrome</mark>
    </p>`;
  }
  if (isBrowser.firefox()) {
    $id.innerHTML += `<p>
    <mark>Este contenido solo se ve en Firefox</mark>
  </p>`;
  }
  if (isDesktop.linux()) {
    $id.innerHTML += `<p>
    <mark>Descarga nuestro software para Linux</mark>
  </p>`;
  }
  if (isDesktop.mac()) {
    $id.innerHTML += `<p>
    <mark>Descarga nuestro software para Mac</mark>
  </p>`;
  }
  if (isDesktop.windows()) {
    $id.innerHTML += `<p>
    <mark>Descarga nuestro software para Windows</mark>
  </p>`;
  }
  // if (isMobile.android()) {
  //   window.location =
  //     "https://www.academlo.com/curso-programacion-web-full-stack?gclid=Cj0KCQiAj_CrBhD-ARIsAIiMxT86cZmUF7dlp-ZkVp8o0p-FOYH6H9OjbOdDG8Kmekk4CDL7T6ZcfHoaAsDkEALw_wcB";
  // }
}
