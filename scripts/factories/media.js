function MediaPageFactory(data) {
  const { id, photographerId, title, image, likes, date } = data;

  function MediaDOM() {
    const InfophotographerHeader = ` 
      <div class="photograph-catalog-card">

      <img src="./assets/photographers/${photographerId}/${image}" alt="">

      <div class="photograph-catalog-info">
        <div class="photograph-catalog-txt">
          <p>${title}</p>
        </div>
        <div class="photograph-catalog-icon">
          <p>${likes} </p>
          <i class="fas fa-heart"></i>
        </div>
      </div>
    </div>`;

    return InfophotographerHeader;
  }
  return { MediaDOM };
}
