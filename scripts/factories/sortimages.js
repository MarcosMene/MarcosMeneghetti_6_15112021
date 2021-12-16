function sortImagesDOM() {
  const $wrapper = document.createElement("div");
  $wrapper.classList.add("sort_medias");
  $wrapper.setAttribute("tabIndex", "0");

  let buttonSortImages = "";

  buttonSortImages = `
    <label for="select_images" id="sort">Trier par</label>
    <select aria-label="sort images" id="select_images" data-trigger="select">
      <option value="popularity">Popularité</option>
      <option value="date">Date</option>
      <option value="title">Titre</option>
    </select>
    <i class="fas fa-chevron-down arrow-down"></i>
    
    `;

  $wrapper.innerHTML = buttonSortImages;
  return $wrapper;
}
