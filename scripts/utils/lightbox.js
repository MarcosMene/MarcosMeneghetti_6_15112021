function lightboxShow() {
  const modalLightBox = document.querySelector(".lightbox_modal");
  modalLightBox.style.display = "none";
  const bodyDiv = document.querySelector("body");
  const MainDiv = document.getElementById("main");
  MainDiv.setAttribute("aria-hidden", "false");
  modalLightBox.setAttribute("aria-hidden", "true");

  // select all videos
  const imageSelected = document.querySelectorAll(".media_link");

  for (let i = 0; i < imageSelected.length; i++) {
    imageSelected[i].addEventListener("click", (event) => {
      event.preventDefault();
      const modalLightBox = document.querySelector(".lightbox_modal");
      modalLightBox.style.display = "flex";
      MainDiv.setAttribute("aria-hidden", "true");
      bodyDiv.classList.add("no-scroll");
      modalLightBox.setAttribute("aria-hidden", "false");
      currentSlide(i + 1);
    });
  }
  // close lightboxmodal
  const closeLightBoxModal = document.querySelector(".modal_close_btn");
  closeLightBoxModal.addEventListener("click", () => {
    const modalLightBox = document.querySelector(".lightbox_modal");
    modalLightBox.style.display = "none";
    MainDiv.setAttribute("aria-hidden", "false");
    modalLightBox.setAttribute("aria-hidden", "true");
    bodyDiv.classList.remove("no-scroll");
  });

  //close modal using ESC and key code
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      modalLightBox.style.display = "none";
      MainDiv.setAttribute("aria-hidden", "false");
      modalLightBox.setAttribute("aria-hidden", "true");
      bodyDiv.classList.remove("no-scroll");
    }
  });
  // navigation with arrow keys <>
  document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft" || e.code === "Comma") {
      plusSlides(-1);
    } else if (e.code === "ArrowRight" || e.code === "Period") {
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

  // animation of lightbox
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
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
}
