(() => {
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      // console.log("Exit");
      // console.log(xhr);
      const json = JSON.parse(xhr.responseText);
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.textContent = `${el.name} -- ${el.email} -- ${el.id}`;
        $fragment.append($li);
      });
      $xhr.appendChild($fragment);
    } else {
      // console.log("Error");
      let message = xhr.statusText || "Ocurrio un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
    //console.log("Este mensaje cargara de cualquier forma");
  });
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.send();
})();

(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  fetch("./users.json", {
    methodd: "GET",
  })
    // .then((res) => {
    //   // res.text() --- pasar a texto para html
    //   // res.blob() --- para imagenes
    //   console.log(res);
    //   return res.ok ? res.json() : Promise.reject(res);
    // })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      // console.log(json);
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.textContent = `${el.name} -- ${el.email} -- ${el.id}`;
        // $li.innerHTML = el.name + " <mark>fetch</mark>";
        $fragment.appendChild($li);
      });
      $fetch.append($fragment);
    })
    .catch((err) => {
      let message = err.statusText || "Ocurrio un error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() => {
      // console.log('Esto se ejecuta sin importar si ocurrase error')
    });
})();

(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();
  async function asynFetch() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();
      // if (!res.ok) throw new Error("Ocurrio un errro al socitar los datos");
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      // console.log(json);
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.textContent = `${el.name} -- ${el.email} -- ${el.id}`;
        $fragment.appendChild($li);
      });
      $fetchAsync.append($fragment);
    } catch (err) {
      // console.log(err);
      let message = err.statusText || "Ocurrio un error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    } finally {
      // console.log("Esto se ejecuta sin importar si ocurrase error");
    }
  }
  asynFetch();
})();

(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      const json = res.data;
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.textContent = `${el.name} -- ${el.email} -- ${el.id}`;
        $fragment.appendChild($li);
      });
      $axios.append($fragment);
    })
    .catch((err) => {
      // en axios me devuelve en el objeto response del error
      // err.response;
      let message = err.response.statusText || "Ocurrio un error";
      $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() => {
      // console.log(
      //   "Esto se ejecutara independientemente del resultado de Axios"
      // );
    });
})();

(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  async function axisoAsync() {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = res.data;
      
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.textContent = `${el.name} -- ${el.email} -- ${el.id}`;
        $fragment.appendChild($li);
      });
      $axiosAsync.append($fragment);
    } catch (err) {
      let message = err.response.statusText || "Ocurrio un error";
      $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
    } finally {
      // console.log(
      //   "Se ejecuta sin importar la respuesta de la peticion axios-async"
      // );
    }
  }

  axisoAsync();
})();
