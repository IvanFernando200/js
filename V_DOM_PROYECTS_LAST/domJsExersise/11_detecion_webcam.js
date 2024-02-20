// API---funcion---->getUserMedia
// Objeto---media divices
const d = document,
  n = navigator;
export default function webCam(id) {
  const $video = d.getElementById(id);
  // console.log(n);
  // console.log(n.mediaDevices);
  // console.log(n.mediaDevices.getUserMedia)
  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((streamObject) => {
        // console.log(streamObject);
        $video.srcObject = streamObject;
        $video.play();
      })
      .catch((err) => {
        $video.insertAdjacentHTML(
          "beforebegin",
          `<p>
          <mark>${err}</mark>
        </p>`
        );
        // console.log(`${err}`);
      });
  }
}
