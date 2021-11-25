function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price } = data;

  const picture = `./assets/photographers/photographersID/${portrait}`;

  function getPhotographerDOM() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("photographer_card");

    const photograph = `
    <a href="./photographer.html">
      <div class="photographer_img">
        <img src="${picture}" alt="test">
        <h2>${name}</h2>
      </div>
    </a>
    <div class="photographer_info">
      <p class="city">${city + ", " + country}</p>
      <p class="tagline">${tagline}</p>
      <p class="price">${price + "&euro;" + "/jour"}</p>
    </div>
    `;

    $wrapper.innerHTML = photograph;
    return $wrapper;
  }
  return { getPhotographerDOM };
}
