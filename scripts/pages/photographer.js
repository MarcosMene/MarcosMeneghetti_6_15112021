// header for each photographer
function displayPhotographerData(photograph) {
  const PhotographerSection = document.querySelector(
    ".photograph_header_section"
  );

  photograph.filter((person) => {
    const PhotographerPageModel = photographerPageFactory(person);
    const PhotographerDOM = PhotographerPageModel.PhotographerHeaderDOM();
    PhotographerSection.appendChild(PhotographerDOM);
  });
}

// button sort popularity/title/date
function displaySortImages() {
  const SortButtonSection = document.querySelector(".select-dropdown");
  const buttonSort = sortImagesDOM();
  SortButtonSection.appendChild(buttonSort);
}

// create contact form
function displayContactForm(photographerNameCard) {
  const cardFormSection = document.getElementById("contact_modal");

  photographerNameCard.forEach((name) => {
    const cardFormModel = contactFormFactory(name);
    const cardFormDOM = cardFormModel.contactFormDOM();
    cardFormSection.appendChild(cardFormDOM);
  });

  // start fill form photographer
  fillForm();
}

function displayTotalLikes(photographerLike) {
  const TotalLikesSection = document.querySelector(".main");
  photographerLike.forEach((likes) => {
    const TotalLikesModel = TotalLikesFactory(likes);
    const TotalLikesDOM = TotalLikesModel.TotalLikesDOM();
    TotalLikesSection.append(TotalLikesDOM);
  });
}
// display images by photographer
function displayMediaData(mediasphotographer, filterBy) {
  const MediaSection = document.querySelector(".photograph-catalog-cards");

  let mediasphotographerFiltered = null;

  console.log(mediasphotographerFiltered);

  mediasphotographerFiltered = mediasphotographer.sort((a, b) => {
    return a.likes - b.likes;
  });

  if (filterBy === "popularity") {
    mediasphotographerFiltered = mediasphotographer.sort((a, b) => {
      return a.likes - b.likes;
    });
  }
  if (filterBy === "title") {
    mediasphotographerFiltered = mediasphotographer.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  }
  if (filterBy === "date") {
    mediasphotographerFiltered.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  }
  MediaSection.innerHTML = "";
  mediasphotographerFiltered.forEach((media) => {
    const MediaModel = MediaPageFactory(media);
    const MediaDOM = MediaModel.MediaDOM();
    MediaSection.appendChild(MediaDOM);
  });
  console.log(mediasphotographerFiltered);
  // click each image for lightbox
  lightboxShow();
}

function initPhotographer() {
  // Récupère les datas des photographes
  fetch("./data/photographers.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      //Récupère id photographe du URL
      const IDphotographer = new URLSearchParams(
        document.location.search.substring(1)
      );
      const idURL = IDphotographer.get("id");

      const { photographers } = data;
      const { media } = data;

      //filtre photographe avec id
      const Showphotographer = photographers.filter(
        (photographer) => photographer.id == idURL
      );

      displayPhotographerData(Showphotographer);

      displaySortImages();

      //filtre media avec id
      const ShowMediaphototgrapher = media.filter(
        (media) => media.photographerId == idURL
      );

      // variable accumule likes photographer
      let totallikes = 0;

      // calcule total de likes par photographe
      ShowMediaphototgrapher.forEach((media) => {
        totallikes = totallikes + media.likes;
      });

      // display sort images for photographer

      displayMediaData(ShowMediaphototgrapher, "popularity");

      // get info sort by button
      const sortByType = document.getElementById("select_images");
      sortByType.addEventListener("change", (e) => {
        const hideByType = document.querySelectorAll(
          ".photograph-catalog-card"
        );
        if (e.target.value === "date") {
          displayMediaData(ShowMediaphototgrapher, "date");
        }
        if (e.target.value === "title") {
          displayMediaData(ShowMediaphototgrapher, "title");
        }
        if (e.target.value === "popularity") {
          displayMediaData(ShowMediaphototgrapher, "popularity");
        }
      });

      //display filtre likes footer
      displayTotalLikes(Showphotographer);
      const tst = document.querySelector(".total_likes_txt");
      tst.innerHTML = totallikes;

      // display formulaire
      displayContactForm(Showphotographer);
    });
}
initPhotographer();
