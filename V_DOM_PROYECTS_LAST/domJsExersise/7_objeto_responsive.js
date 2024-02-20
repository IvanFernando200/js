const d = document,
  w = window;
export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
  // Objeto Media Query list
  let breakpoint = w.matchMedia(mq);
  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }
    // console.log(breakpoint, e.matches);
  };
  // al realizar un cambio
  // breakpoint.dispatchEvent;
  breakpoint.addListener(responsive);
  // al momento que carga
  responsive(breakpoint);
}

