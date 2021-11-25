function photographerPageFactory(data) {
  const { name, portrait, city, country, tagline, alt } = data;

  const picture = `./assets/photographers/photographersID/${portrait}`;

  function PhotographerHeaderDOM() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("photograph_header");

    const photographerCard = `
    <div class="photograph-info">
    <div class=photograph-name>
      <h1>${name}</h1>
    </div>
    <div class="photograph-txt">
      <h2>${city}, ${country}</h2>
      <p>${tagline}</p>
    </div>
</div>

  <button class="contact_button" onclick="displayModal()">Contactez-moi</button>

  <div class="photograph-img">
    <img src="${picture}" alt="${alt}">
  </div>  
        `;

    $wrapper.innerHTML = photographerCard;
    return $wrapper;
  }
  return { PhotographerHeaderDOM };
}
