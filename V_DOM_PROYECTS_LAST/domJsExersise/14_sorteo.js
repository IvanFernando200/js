const d = document;
export default function draw(btn, selector) {
  const getWinner = (selector) => {
    const $players = d.querySelectorAll(selector),
      random = Math.floor(Math.random() * $players.length);
    return `El ganador es: ${$players[random].textContent}`;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      // alert(result);
      console.log(result);
    }
  });
}

/* const getWinnerComment = (selector) => {
  const $players = document.querySelectorAll(selector),
    random = Math.floor(Math.random() * $players.length);
  return `El ganador es: ${$players[random].textContent}`;
}; */
// getWinnerComment(
//   "ytd-comment-thread-renderer #author-text yt-formatted-string"
// ); youtube
