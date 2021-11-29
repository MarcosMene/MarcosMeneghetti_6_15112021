class App {
  constructor() {
    this.$wrapper = document.querySelector(".photographer_section");
    this.PhotographersApi = new PhotographersApi("./data/photographers.json");
  }

  async main() {
    const photographersData = new PhotographersApi();

    photographersData
      .map((photographer) => new photographerFactory(photographer))
      .forEach((photographer) => {
        const Template = new getPhotographerDOM(photographer);
        this.$wrapper.appendChild(Template.getPhotographerDOM);
      });
  }
}

const app = new App();
app.main();
