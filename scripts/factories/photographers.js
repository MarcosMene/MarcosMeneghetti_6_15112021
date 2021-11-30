function photographerFactory(data) {
  const { id, name, portrait, city, country, tagline, price, alt } = data;
  const picture = `/assets/photographers/photographersID/${portrait}`;

  function getPhotographerDOM() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("photographer_card");
    $wrapper.classList.add(id);

    const photograph = `
    <a href="./photographer.html?id=${id}">
      <div class="photographer_img">
        <img src="${picture}" alt="${alt}">
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
  return {
    id,
    name,
    portrait,
    city,
    country,
    tagline,
    price,
    alt,
    getPhotographerDOM,
  };
}
