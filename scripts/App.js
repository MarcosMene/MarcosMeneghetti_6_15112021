class App {
  constructor() {
    this.fetchJSON();
  }

  //route pour la page cherche
  initApp() {
    console.log("pathname:", window.location.pathname.split("/").pop());

    switch (window.location.pathname.split("/").pop()) {
      case "index.html":
      case "":
        const home = new photographerFactory(this.data);
        home.getPhotographerDOM();
        break;
      case "photographer.html":
        const photographer = new photographerPageFactory(this.data);
        photographer.PhotographerHeaderDOM(this.data);
        break;
    }
  }

  fetchJSON() {
    fetch()(
      "https://marcosmene.github.io/MarcosMeneghetti_6_15112021/data/photographers.json"
    )
      .then((response) => response.json())
      .then((datas) => {
        this.datas = datas;
        this.initApp();
      })
      .catch((error) => console.error("Error:" + error));
  }
}

const app = new App();
