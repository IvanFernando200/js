const d = document,
  w = window;
export default function scrollTopBotton(btn) {
  const $scrollBtn = d.querySelector(btn);
  // console.log(window.scrollY);
  w.addEventListener("scroll", (e) => {
    // w.pageXOffset
    let scrollTop = w.pageXOffset || d.documentElement.scrollTop;
    if (scrollTop >= 600) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      // w.scroll(0, 0);
      w.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}
