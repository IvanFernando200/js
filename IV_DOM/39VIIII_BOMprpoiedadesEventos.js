window.addEventListener("resize", (e) => {
  console.clear();
  console.log("****** Evento Resize *******");
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(window.outerWidth);
  console.log(window.outerWidth);
  // console.log(e.target); // window
  console.log(e);
});

window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("****** Evento Scroll *******");
  console.log(window.scrollX);
  console.log(window.scrollY);
  // console.log(e.target); // document
  console.log(e);
});

/* window.addEventListener("load", (e) => {
  console.log("****** Evento load *******");
  console.log(window.screenX);
  console.log(window.screenY);
  // console.log(e.target); // document
  console.log(e);
}); */
document.addEventListener("DOMContentLoaded", (e) => {
  console.clear();
  console.log("****** Evento DOMContentLoaded *******");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e.target); // document
  console.log(e);
});
