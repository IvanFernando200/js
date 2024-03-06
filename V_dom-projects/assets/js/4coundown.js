const d = document;
export default function countDown(id, limitDate, finalMessage) {
  const $content = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();
  let countdownTempo = setInterval(() => {
    const now = Date.now();
    let limitTime = countdownDate - now,
      years = Math.floor(limitTime / (1000 * 60 * 60 * 24 * 360)),
      days = Math.floor(
        (limitTime % (1000 * 60 * 60 * 24 * 360)) / (1000 * 60 * 60 * 24)
      ),
      hours = Math.floor(
        (limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2),
      seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);
    
    $content.innerHTML = `<h3>Faltan: ${years} Years ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds</h3>`;
    if (limitTime < 0) {
      clearInterval(countdownTempo);
      $content.innerHTML = `<h3>${finalMessage}</h3>`;
    }
  });
}
