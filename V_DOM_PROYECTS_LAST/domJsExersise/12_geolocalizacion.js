const d = document,
  n = navigator;
export default function getGeolocation(id) {
  const $localization = d.getElementById(id);
  // console.log(n.geolocation);
  
  // navigator.geolocation.getCurrentPosition(success, error, options);
  // n.geolocation.watchPosition()
  n.geolocation.getCurrentPosition(
    (pos) => {
      const crd = pos.coords;
      $localization.innerHTML = `<p class="succesGeolocation">Tu pisicion actual es:</p>
      <ul class="succesGeolocation">
        <li>Latitud: <b>${crd.latitude}</b></li>
        <li>Longitud: <b>${crd.longitude}</b></li>
        <li>Precision: <b>${crd.accuracy}</b> metros</li>
      </ul>
      <a href="https://www.google.com/maps/@${crd.latitude},${crd.longitude},15z" target="_blank" rel="noopener">Ver en Google Maps</a>
      `;
    },
    (err) => {
      // console.log(err);
      $localization.innerHTML = `<p>ERROR(${err.code}): ${err.message}</p>`;
      $localization.firstElementChild.classList.add("errorGeolocation");
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
}
