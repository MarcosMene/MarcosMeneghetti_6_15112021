function MediaPageFactory(data) {
  const { photographerId, title, image, likes } = data;

  const catalog = `./assets/photographers/${photographerId}/${image}`;

  function MediaDOM() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("photograph-catalog-card");

    const mediaCard = `
        
        <img src="${catalog}" alt="">

        <div class="photograph-catalog-info">
          <div class="photograph-catalog-txt">
            <p>${title}</p>
          </div>
          <div class="photograph-catalog-icon">
            <p>${likes}</p>
            <i class="fas fa-heart"></i>
          </div>
        </div>
      </div>
        `;

    $wrapper.innerHTML = mediaCard;
    return $wrapper;
  }
  return { MediaDOM };
}
