class AppFishEye {
  constructor() {
    this.fetchJSON();
  }

  //lancement de la page demande
  initFishApp() {
    console.log("pathname:", window.location.pathname.split("/").pop());
    switch (window.location.pathname.split("/").pop()) {
      case "index.html":
      case "":
        const homepageFish = new photographerFactory(this.datas);
        homepageFish.PhotographerHeaderDOM();
        break;
      case "photographer.html":
        const photographer = new photographerPageFactory(this.datas);
        photographer.PhotographerHeaderDOM();
    }
  }

  // fetchJSON

  fetchJSON() {
    fetch(
      "https://github.com/MarcosMene/MarcosMeneghetti_6_15112021/blob/main/data/photographers.json"
    )
      .then((response) => response.json())
      .then((datas) => {
        this.datas = datas;
        this.initFishApp();
      })
      .catch((error) => console.error("Il y a un error:" + error));
  }
}

// lance l'aplication
const app = new AppFishEye();
