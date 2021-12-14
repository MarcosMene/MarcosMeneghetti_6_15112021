function MediaPageFactory(data) {
  const { id, photographerId, video, title, image, likes, date, price, alt } =
    data;

  const catalog = `./assets/photographers/${photographerId}/${image}`;

  //list media selon id
  function MediaDOM() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("photograph-catalog-card");

    let cardmedias = "";
    cardmedias += `<a href="#" class="media_link" data-mediaid="${id}" role="button" aria-label="${alt}">
`;
    if (video !== undefined) {
      cardmedias += `<video class="card_video medias_all" aria-label="${alt}" controls>
      <source src="./assets/photographers/${photographerId}/${video}" type="video/mp4">
      </video>`;
    } else {
      cardmedias += `<img class="card_image medias_all" src="${catalog}" alt="${alt}">`;
    }
    cardmedias += `
    </a>
    <div class="photograph-catalog-info">
       <div class="photograph-catalog-txt">
          <p>${title}</p>
       </div>
        <div class="photograph-catalog-icon">
            <p class="photograph-catalog-like">${likes}</p>
            <i class="fas fa-heart like_img" arial-label="likes"></i>
         </div>
       </div>
    `;

    $wrapper.innerHTML = cardmedias;
    return $wrapper;
  }
  return {
    id,
    photographerId,
    video,
    title,
    image,
    likes,
    date,
    price,
    alt,
    MediaDOM,
  };
}
