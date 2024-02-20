// let texto =
//   "Hola, soy Ivan el nuevo programador; estoy aprendiendo programacion para la web y luego me especializare en blockchain y machinelearning";
// const hablar = (texto) =>
//   speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
// hablar(texto);

const d = document,
  w = window;
export default function speechReader() {
  const $speechSelect = d.getElementById("speech-select"),
    $speechText = d.getElementById("speech-text"),
    $speechBtn = d.getElementById("speech-btn"),
    speechMessage = new SpeechSynthesisUtterance();
  // console.log(speechMessage);

  let voices = [];

  d.addEventListener("DOMContentLoaded", (e) => {
    // console.log(speechSynthesis.getVoices());
    w.speechSynthesis.addEventListener("voiceschanged", (e) => {
      voices = w.speechSynthesis.getVoices();
      // console.log(voices);
      voices.forEach((voice) => {
        const $option = d.createElement("option");
        $option.value = voice.name;
        $option.textContent = `${voice.name} *** ${voice.lang}`;
        $speechSelect.appendChild($option);
      });
    });
  });
  d.addEventListener("change", (e) => {
    if (e.target === $speechSelect) {
      speechMessage.voice = voices.find(
        (voice) => voice.name === e.target.value
      );
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target === $speechBtn) {
      speechMessage.text = $speechText.value;
      w.speechSynthesis.speak(speechMessage);
    }
  });
}
