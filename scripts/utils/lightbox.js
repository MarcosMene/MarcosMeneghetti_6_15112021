function lightboxShow() {
  const modalLightBox = document.querySelector(".lightbox_modal");
  modalLightBox.style.display = "none";

  // select all videos
  const imageSelected = document.querySelectorAll(".media_link");

  // click for all videos
  // for (const imgClicked of imageSelected) {
  //   imgClicked.addEventListener("click", (event) => {
  //     event.preventDefault();
  //     const modalLightBox = document.querySelector(".lightbox_modal");
  //     modalLightBox.style.display = "flex";
  //     currentSlide(1);
  //   });
  // }

  for (let i = 0; i < imageSelected.length; i++) {
    imageSelected[i].addEventListener("click", (event) => {
      event.preventDefault();
      const modalLightBox = document.querySelector(".lightbox_modal");
      modalLightBox.style.display = "flex";
      currentSlide(i + 1);
    });
  }
  // close lightboxmodal
  const closeLightBoxModal = document.querySelector(".modal_close_btn");
  closeLightBoxModal.addEventListener("click", () => {
    const modalLightBox = document.querySelector(".lightbox_modal");
    modalLightBox.style.display = "none";
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
