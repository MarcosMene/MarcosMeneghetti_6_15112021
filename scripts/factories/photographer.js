function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/photographersID/${portrait}`;

  function getUserCardDOM() {
    const photoCard = document.createElement("article");
    photoCard.className = "photographer_card";

    const photoLink = document.createElement("a");
    photoLink.setAttribute("href", "./photographer.html");

    const photoImg = document.createElement("div");
    photoImg.className = "photographer_img";

    const img = document.createElement("img");
    img.setAttribute("src", picture);

    const h2Name = document.createElement("h2");
    h2Name.textContent = name;

    photoImg.appendChild(img);
    photoImg.appendChild(h2Name);
    photoLink.appendChild(photoImg);
    photoCard.appendChild(photoLink);

    const photoInfo = document.createElement("div");
    photoInfo.className = "photographer_info";

    const cityBirth = document.createElement("p");
    cityBirth.className = "city";
    cityBirth.textContent = `${city + ", " + country}`;

    const tagLine = document.createElement("p");
    tagLine.className = "tagline";
    tagLine.textContent = tagline;

    const priceDay = document.createElement("p");
    priceDay.className = "price";
    priceDay.innerHTML = `${price + "&euro;" + "/jour"}`;

    photoInfo.appendChild(cityBirth);
    photoInfo.appendChild(tagLine);
    photoInfo.appendChild(priceDay);

    photoCard.appendChild(photoLink);
    photoCard.appendChild(photoInfo);

    return photoCard;
  }
  return { getUserCardDOM };
}
