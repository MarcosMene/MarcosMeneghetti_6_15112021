function lightboxShow() {
  const modalLightBox = document.querySelector(".lightbox_modal");
  modalLightBox.style.display = "none";
  const bodyDiv = document.querySelector("body");
  const MainDiv = document.getElementById("main");
  MainDiv.setAttribute("aria-hidden", "false");
  modalLightBox.setAttribute("aria-hidden", "true");

  // add tabindex to medias and text lightbox
  // const modalMediaTab = document.querySelectorAll(".modal_media");
  const mediasAllTab = document.querySelectorAll(".modal_media .medias_all");
  const txtLightBoxTab = document.querySelectorAll(".modal_media h3");

  // for (let i = 0; i < modalMediaTab.length; i++) {
  //   modalMediaTab[i].setAttribute("tabIndex", "0");
  // }
  for (let i = 0; i < mediasAllTab.length; i++) {
    mediasAllTab[i].setAttribute("tabIndex", "0");
  }
  for (let i = 0; i < txtLightBoxTab.length; i++) {
    txtLightBoxTab[i].setAttribute("tabIndex", "0");
  }

  // select all videos
  const imageSelected = document.querySelectorAll(".media_link");

  // open all medias
  for (let i = 0; i < imageSelected.length; i++) {
    imageSelected[i].addEventListener("click", (event) => {
      event.preventDefault();
      const modalLightBox = document.querySelector(".lightbox_modal");
      document.querySelector(".modal_carousel").focus();
      modalLightBox.style.display = "flex";
      document.querySelector("header a").setAttribute("tabIndex", "-1"); //disable tabindex logo

      MainDiv.setAttribute("aria-hidden", "true");

      bodyDiv.classList.add("no-scroll");
      modalLightBox.setAttribute("aria-hidden", "false");
      MainDiv.classList.add("invisible"); //hide main div
      currentSlide(i + 1);
    });
  }

  // navigation with arrow keys <>
  document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft") {
      plusSlides(-1);
    } else if (e.code === "ArrowRight") {
      plusSlides(1);
    }
  });

  //controls lightbox prev/next
  const linkPrevLightBox = document.querySelector(".prev_image");
  linkPrevLightBox.addEventListener("click", (event) => {
    event.preventDefault();
    plusSlides(-1);
  });
  const linkNextLightBox = document.querySelector(".next_image");
  linkNextLightBox.addEventListener("click", (event) => {
    event.preventDefault();
    plusSlides(1);
  });
  let getIndexMediaModal; //get value of media modal

  // animation of lightbox
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
    getIndexMediaModal = slideIndex; //get value of position media modal
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
    getIndexMediaModal = slideIndex; //get value of position media modal
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("modal_media");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }

  // close lightboxmodal
  const closeLightBoxModal = document.querySelector(".modal_close_btn");
  closeLightBoxModal.addEventListener("click", () => {
    const modalLightBox = document.querySelector(".lightbox_modal");
    modalLightBox.style.display = "none";
    MainDiv.setAttribute("aria-hidden", "false");
    modalLightBox.setAttribute("aria-hidden", "true");
    bodyDiv.classList.remove("no-scroll");
    MainDiv.classList.remove("invisible"); //show main div
    document.querySelector("header a").setAttribute("tabIndex", "1"); //enable tabindex logo
  });

  //close modal using ESC and key code
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      modalLightBox.style.display = "none";
      MainDiv.setAttribute("aria-hidden", "false");
      modalLightBox.setAttribute("aria-hidden", "true");
      bodyDiv.classList.remove("no-scroll");
      MainDiv.classList.remove("invisible"); //show main div
      document.querySelector("header a").setAttribute("tabIndex", "1"); //enable tabindex logo

      const lastMediaModal = document.querySelectorAll(".media_link"); //select last media modal
      lastMediaModal[getIndexMediaModal - 1].focus();
    }
  });
}
