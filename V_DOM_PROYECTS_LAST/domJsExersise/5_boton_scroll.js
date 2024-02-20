const w = window,
  d = document;
export default function scrollTopBth(btn) {
  const $scrollBtn = d.querySelector(btn);
  d.addEventListener("scroll", (e) => {
    // console.log(w);
    // console.log(d);
    // console.log(d.documentElement.scrollTop);
    // d.querySelector('h1')
    // window.scrollY
    if (d.documentElement.scrollTop > 590) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      w.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}
