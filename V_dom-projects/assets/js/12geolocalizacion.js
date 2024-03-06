const d = document,
  n = navigator;
export default function getGeolocation(id) {
  const $id = d.getElementById(id),
    options = {
      enabledHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
  // console.log(n.geolocation);
  const succes = (position) => {
    // console.log(position); // GeoloctionPosition
    let coords = position.coords;

    $id.innerHTML = `
    <p>Tu posicion actual es:</p>
    <ul>
      <li>Latitud: <b>${coords.latitude}</b></li>
      <li>Longitud: <b>${coords.longitude}</b></li>
      <li>Precisión: <b>${coords.accuracy} </b>metros </li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en Google Maps</a>
    `;
  };
  const error = (err) => {
    // console.log(err);
    $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
    console.log(`Error ${err.code}: ${err.message}`);
  };
  n.geolocation.getCurrentPosition(succes, error, options);
}

// console.log(window.navigator);
// console.log(window.navigator.userAgent);
//  BOM
// screen
// navigator
// history
// frames
// location
// fetch

