const d = document;
export default function draw(btn, selector) {
  const $players = d.querySelectorAll(selector);
  // console.log($players);

  const getWinner = (sls) =>
    sls[Math.floor(Math.random() * sls.length)].textContent;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      alert(getWinner($players));
    }
  });
}

/* const getWinnerComment = (selector) => {
  const $players = document.querySelectorAll(selector);
  return $players[Math.floor(Math.random() * $players.length)].textContent;
};
getWinnerComment('[data-visualcompletion] .x78zum5 .x1rg5ohu a')
*/
