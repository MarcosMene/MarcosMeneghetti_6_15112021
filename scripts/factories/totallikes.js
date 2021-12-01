function TotalLikesFactory(data) {
  const { id, photographerId, likes, price } = data;

  //list media selon id
  function TotalLikesDOM() {
    const $wrapper = document.createElement("aside");
    $wrapper.classList.add("likes-price");

    let cardTotalLikes = "";

    cardTotalLikes += `<div class="total_likes">`;

    cardTotalLikes += `<h3 class="total_likes_txt">${likes}</h3>`;

    cardTotalLikes += `<i class="fas fa-heart"></i>`;

    cardTotalLikes += ` </div>
    <div class="price">
    <p>${price}&euro; / jour</p>
    </div>
    `;

    $wrapper.innerHTML = cardTotalLikes;
    return $wrapper;
  }
  return {
    id,
    photographerId,
    likes,
    price,
    TotalLikesDOM,
  };
}
