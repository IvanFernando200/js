const d = document;
export function digitalClock(clock, btnPlay, btnStop) {
  let clockTime;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTime = setInterval(() => {
        let now = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${now}</h3>`;
      }, 1000);
      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearInterval(clockTime);
      d.querySelector(clock).innerHTML = null;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}
export function alarm(audioSrc, btnPlay, btnStop) {
  let alarm;
  const $audio = d.createElement("audio");
  $audio.src = audioSrc;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      alarm = setTimeout(() => {
        $audio.play();
      }, 2000);
      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearTimeout(alarm);
      $audio.pause();
      $audio.currentTime = 0; // resetear
      d.querySelector(btnPlay).disabled = false;
    }
  });
}
