function photographerPageFactory(dataPage) {
  const { id, name, portrait, city, country, tagline, alt } = dataPage;

  const picturePage = `/assets/photographers/photographersID/${portrait}`;

  function PhotographerHeaderDOM() {
    const $wrapperHeader = document.createElement("div");
    $wrapperHeader.classList.add("photograph_header");
    $wrapperHeader.classList.add(id);

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
    <img src="${picturePage}" alt="${alt}"/>
  </div>  
        `;

    $wrapperHeader.innerHTML = photographerCard;
    return $wrapperHeader;
  }

  return {
    id,
    name,
    portrait,
    city,
    country,
    tagline,
    alt,
    PhotographerHeaderDOM,
  };
}
