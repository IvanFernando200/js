(() => {
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();
  // console.log(xhr);
  // load
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      const datos = JSON.parse(xhr.response);
      console.log(datos);
      datos.forEach((obj) => {
        const $li = document.createElement("li");
        $li.innerHTML = obj.company.name;
        $fragment.appendChild($li);
      });
      $xhr.appendChild($fragment);
    } else {
      console.log("Error");
      let message = xhr.statusText || "Ocurrio un error";
      $xhr.innerHTML = `Error ${xhr.status}:${message}`;
    }
  });
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.send();
})();

(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();
  fetch("https://jsonplaceholder.typicode.com/users", {
    // method: "POST",
    /*     body: JSON.stringify({
      nombre: "Lucas",
      apellido: "Dalto",
    }),
    headers: { "Content-type": "application/json" } */
  })
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((json) => {
      console.log(json);
      json.forEach((obj) => {
        const $li = document.createElement("li");
        $li.innerHTML = obj.company.name;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrio un error";
      $fetch.innerHTML = `Error ${err.status}:${message}`;
    })
    .finally(() => console.log("No me importa lo que suceda"));
})();

(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();
      // console.log(res, json);

      if (!res.ok)
        throw {
          status: res.status,
          statusText: res.statusText,
        };

      json.forEach((obj) => {
        const $li = document.createElement("li");
        $li.textContent = obj.name;
        $fragment.appendChild($li);
      });
      $fetchAsync.appendChild($fragment);
    } catch (err) {
      console.log(err);
      let message = err.statusText || "Ocurrio un error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    } finally {
      console.log("Siempre me ejecuto");
    }
  }

  getData();
})();

(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      console.log("JJJajajaj");
      // console.log(res.data);
      let json = res.data;
      json.forEach((obj) => {
        const $li = document.createElement("li");
        $li.textContent = obj.username;
        $fragment.appendChild($li);
      });
      $axios.appendChild($fragment);
    })
    .catch((err) => {
      // console.log(err.response);
      let message = err.response.statusText || "Ocurrio un error";
      $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() => {
      console.log(
        "Esto se ejecutara independientemente del resultado de Axios"
      );
    });
})();

(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();
  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/user");
      res.data.forEach((obj) => {
        const $li = document.createElement("LI");
        $li.innerText = obj.email;
        $fragment.appendChild($li);
      });
      $axiosAsync.appendChild($fragment);
    } catch (err) {
      console.log(err.response);
      let message = err.response.statusText || "Ocurrio un error";
      $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
    } finally {
      console.log("OOhhhhh me ejecutare");
    }
  }
  getData();
})();
/* //! FETCH API
const getSth = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((el) => {
        if (el.userId === 9988) {
          console.log(el);
        }
      });
    })

    .catch((err) => console.log(err));
};

getSth();

document.getElementById("btn").addEventListener("click", () => {
  let url = "https://api.github.com/users";
  fetch(url) //!response gönderiyor
    .then((res) => res.json()) //! bununla açıyoruz
    .then((data) => printData(data)); //!fonksiyonu çağırıyoruz,data şeklinde veri alıyor. dizidir
});

const printData = (data) => {
  const container = document.getElementById("icerik");
  data.forEach((obj) => {
    const { login: userName, avatar_url: avatar } = obj;
    container.innerHTML += `<div><h1>${userName}</h1>
        <img src="${avatar}" width="400px" >
         </div>`;
  });
};
 */
