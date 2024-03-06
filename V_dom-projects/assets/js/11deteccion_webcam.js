const d = document,
  n = navigator;
export default function webCam(id) {
  const $video = d.getElementById(id);
  // es una promesa::::
  if (n.mediaDevices.getUserMedia) {
    // console.log(n.mediaDevices.getUserMedia({ video: true, audio: true }));
    n.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((strem) => {
        console.log(strem);
        $video.srcObject = strem;
        $video.play();
      })
      .catch((err) => {
        $video.insertAdjacentHTML(
          "beforebegin",
          `<p><mark>${err}</mark</p>`
        );
      });
  }
}
