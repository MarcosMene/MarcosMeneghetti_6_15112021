function MediaPageFactory(dataMedia) {
  const { photographerId, title, image, likes } = dataMedia;

  const catalog = `./assets/photographers/${photographerId}/${image}`;

  function MediaDOM() {
    const divCard = document.createElement("div");
    divCard.className = "photograph-catalog-card";

    const img = document.createElement("img");
    img.setAttribute("src", `${catalog}`);

    const divCardInfo = document.createElement("div");
    divCardInfo.className = "photograph-catalog-info";

    const divCardTxt = document.createElement("div");
    divCardTxt.className = "photograph-catalog-txt";

    const paragraphTitle = document.createElement("p");
    paragraphTitle.innerHTML = `${title}`;

    divCardTxt.appendChild(paragraphTitle);
    divCardInfo.appendChild(divCardTxt);

    const divIcon = document.createElement("div");
    divIcon.className = "photograph-catalog-icon";

    const paragraph = document.createElement("p");
    paragraph.innerHTML = `${likes}`;

    const icon = document.createElement("i");
    icon.classList = ("fas", "fa-heart");

    divIcon.appendChild(paragraph);
    divIcon.appendChild(icon);

    divCardTxt.appendChild(paragraphTitle);
    divCardInfo.appendChild(divCardTxt);

    divCard.appendChild(img);
    divCard.appendChild(divCardInfo);
    return divCard;
  }
  return { MediaDOM };
}
