// fetchJSON

function fetchJSON() {
  fetch(
    "https://marcosmene.github.io/MarcosMeneghetti_6_15112021/data/photographers.json"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })

    .catch((error) => console.log("Il y a un error:" + error));
}

// lance l'aplication
fetchJSON();
