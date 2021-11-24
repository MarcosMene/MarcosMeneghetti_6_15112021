function photographerPageFactory(data) {
  const { name, portrait, city, country, tagline } = data;

  const picture = `assets/photographers/photographersID/${portrait}`;

  function photographerHeaderDOM() {
    const InfophotographerHeader = document.createElement("div");
    InfophotographerHeader.className = "photograph-info";

    const photographName = document.createElement("div");
    photographName.className = "photograph-name";

    const photographNameTxt = document.createElement("h1");
    photographNameTxt.textContent = name;

    photographName.appendChild(photographNameTxt);

    const photographTxt = document.createElement("div");
    photographTxt.className = "photograph-txt";

    const cityBirth = document.createElement("h2");
    cityBirth.textContent = `${city + ", " + country}`;

    const tagLine = document.createElement("p");
    tagLine.className = "tagline";
    tagLine.textContent = tagline;

    photographTxt.appendChild(cityBirth);
    photographTxt.appendChild(tagLine);

    const buttonContact = document.createElement("button");
    buttonContact.type = "button";
    buttonContact.innerText = "Contactez-moi";
    buttonContact.className = "contact_button";
    buttonContact.onclick = "displayModal()";

    const PhotoimgDiv = document.createElement("div");
    PhotoimgDiv.className = "photograph-img";

    const Photoimg = document.createElement("img");
    Photoimg.setAttribute("src", picture);
    Photoimg.setAttribute("alt", "teste");

    PhotoimgDiv.appendChild(Photoimg);

    InfophotographerHeader.appendChild(photographName);
    InfophotographerHeader.appendChild(photographTxt);
    InfophotographerHeader.appendChild(buttonContact);
    InfophotographerHeader.appendChild(PhotoimgDiv);

    return InfophotographerHeader;
  }
  return { photographerHeaderDOM };
}
