class App {
  constructor() {
    this.$wrapper = document.querySelector(".photographer_section");
    this.PhotographersApi = new PhotographersApi("/data/photographers.json");
  }

  async main() {
    const photographersData = await this.PhotographersApi.getPhotographers();

    photographersData
      .map((photographer) => new photographer(photographer))
      .forEach((photographer) => {
        const Template = new MovieCard(photographer);
        this.$wrapper.appendChild(Template.getPhotographerDOM);
      });
  }
}

const app = new App();
app.main();
