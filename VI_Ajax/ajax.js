(() => {
  // XMLHttpRequest--
  // Inconveniente: No puedo usar funcines asincronas.

  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      const json = JSON.parse(xhr.responseText);
      // console.log(json);
      json.forEach((obj) => {
        const $li = document.createElement("li");
        $li.textContent = `${obj.name} - ${obj.username}`;
        $fragment.append($li);
      });
      $xhr.append($fragment);
    } else {
      const message = xhr.statusText || "!Opps ocurrio un error";
      $xhr.textContent = `Error ${xhr.status}: ${message}`;
    }
    // console.log("se ejecut sin importar");
  });
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.send();
})();

(() => {
  // fetch
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      json.forEach((obj) => {
        const $li = document.createElement("li");
        $li.textContent = `${obj.name} - ${obj.username}`;
        $fragment.append($li);
      });
      $fetch.append($fragment);
    })
    .catch((err) => {
      const message = err.statusText || "!Opps ocurrio un error";
      $fetch.textContent = `Error ${err.status}: ${message}`;
    });
})();

((d) => {
  // fetch +async
  // Inconveniente: Tengo problemas con el manejo de errores
  const $fetchAsync = d.getElementById("fetch-async"),
    $fragment = d.createDocumentFragment();
  const render = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      // if(!res.ok)throw new Error('Ocurrio un Eroro al solicitar los Datos');
      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      if (res.status >= 300)
        Promise.reject(new Error("Whoops! Ocurro un maldito error"));
      json.forEach((obj) => {
        const $li = document.createElement("li");
        $li.textContent = `${obj.name} - ${obj.username}`;
        $fragment.append($li);
      });
      $fetchAsync.append($fragment);
    } catch (err) {
      const message = err.statusText || "!Opps ocurrio un error";
      $fetchAsync.textContent = `Error ${err.status}: ${message}`;
    }
  };
  render();
})(document);

((d) => {
  // axios
  const $axios = d.getElementById("axios"),
    $fragment = d.createDocumentFragment();
  axios
    .get("https://jsonplaceholder.typicode.com/user")
    .then((res) => {
      const json = res.data;
      json.forEach((obj) => {
        const $li = d.createElement("li");
        $li.textContent = `${obj.name} - ${obj.username}`;
        $fragment.append($li);
      });
      $axios.append($fragment);
    })
    .catch((err) => {
      const message = err.response.statusText || "!Opps ocurrio un error";
      $axios.textContent = `Error ${err.response.status}: ${message}`;
    });
})(document);

((d) => {
  const $axiosAsync = d.getElementById("axios-async"),
    $fragment = d.createDocumentFragment();
  const render = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      const json = await res.data;
      json.forEach((obj) => {
        const $li = d.createElement("li");
        $li.textContent = `${obj.name} - ${obj.username}`;
        $fragment.append($li);
      });
      $axiosAsync.append($fragment);
    } catch (err) {
      const message = err.response.statusText || "!Opps ocurrio un error";
      $axiosAsync.textContent = `Error ${err.response.status}: ${message}`;
    }
  };
  render();
})(document);