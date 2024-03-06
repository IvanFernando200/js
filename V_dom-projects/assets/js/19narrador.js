const d = document,
  w = window;
export default function speechReader() {
  const $speechSelect = d.getElementById("speech-select"),
    $speechText = d.getElementById("speech-text"),
    $speechBtn = d.getElementById("speech-btn"),
    // 1: Crear el objeto SpeechSynthesisUtterance
    speechMessage = new SpeechSynthesisUtterance();

  // 2: crear una lista vacia para las voces
  let voices = [];

  // 3: Obtener todas las voces disponibles a la carga del documento y añadir a las option
  d.addEventListener("DOMContentLoaded", (e) => {
    // console.log(speechSynthesis);
    // console.log(w.speechSynthesis.getVoices());
    speechSynthesis.addEventListener("voiceschanged", (e) => {
      voices = w.speechSynthesis.getVoices();
      // console.log(voices);
      const $fragment = d.createDocumentFragment();
      voices.forEach((voice) => {
        const $option = d.createElement("option");
        $option.value = voice.lang;
        $option.textContent = voice.name;
        $fragment.appendChild($option);
      });
      $speechSelect.append($fragment);
    });
  });

  //4: encontrar el speechSynthesisUtterance, seleccionado. AL EVENTO CHANGE
  d.addEventListener("change", (e) =>
  {
    if (e.target === $speechSelect)
    {
      speechMessage.voice = voices.find(
        (voice) => voice.lang === e.target.value
      );
      // console.log(speechMessage);
    }
  });

  // 5: agregarle al text del speechMessage, lo que va a hablar. Y hacele hablar con el metodo speak al speechSynthesis. TODO AL EVENTO CLICK
  d.addEventListener("click", (e) => {
    if (e.target === $speechBtn)
    {
      speechMessage.text = $speechText.value;
      w.speechSynthesis.speak(speechMessage);
    }
  });
}

/* let texto = "Hola, soy Ivan y sere programador";
const hablar = (texto) =>
speechSynthesis.speak(new SpeechSynthesisUtterance("nada"));
hablar(texto); */
