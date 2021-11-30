// fetchJSON

function fetchJSON() {
  fetch(
    "https://github.com/MarcosMene/MarcosMeneghetti_6_15112021/blob/main/data/photographers.json"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Il y a un error:" + error));
}

// lance l'aplication
fetchJSON();
