function lightboxShow() {
  // select all videos
  const imageSelected = document.querySelectorAll(".media_link");

  // click for all videos
  for (const imgClicked of imageSelected) {
    imgClicked.addEventListener("click", (event) => {
      event.preventDefault();
      const modalLightBox = document.querySelector(".lightbox_modal");
      modalLightBox.style.display = "flex";
    });
  }
  // close lightboxmodal
  const closeLightBoxModal = document.querySelector(".modal_close_btn");
  closeLightBoxModal.addEventListener("click", () => {
    const modalLightBox = document.querySelector(".lightbox_modal");
    modalLightBox.style.display = "none";
  });

  const linkPrevLightBox = document.querySelector(".prev_image");
  linkPrevLightBox.addEventListener("click", (event) => {
    event.preventDefault();
  });
  const linkNextLightBox = document.querySelector(".next_image");
  linkNextLightBox.addEventListener("click", (event) => {
    event.preventDefault();
  });
}
