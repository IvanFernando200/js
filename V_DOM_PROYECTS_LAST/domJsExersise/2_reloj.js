const d = document;
export function digitalClock(clock, btnPlay, btnStop) {
  let temporizador;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      temporizador = setInterval(() => {
        const clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);
      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearInterval(temporizador);
      d.querySelector(clock).innerHTML = null;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}
export function alarm(sound, btnPlayAlarma, btnStopAlarma) {
  let alarmaTempo;
  const $alarma = d.createElement("audio");
  $alarma.src = sound;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlayAlarma)) {
      alarmaTempo = setTimeout(() => {
        $alarma.play();
      }, 2000);
      e.target.disabled = true;
    }
    if (e.target.matches(btnStopAlarma)) {
      clearTimeout(alarmaTempo);
      $alarma.pause();
      $alarma.currentTime = 0;
      d.querySelector(btnPlayAlarma).disabled = false;
    }
  });
}
