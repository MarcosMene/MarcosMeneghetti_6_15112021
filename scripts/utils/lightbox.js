// close lightbox modal
function lightboxShow() {
  // close lightboxmodal
  const closeLightBoxModal = document.querySelector(".modal_close_btn");
  closeLightBoxModal.addEventListener("click", () => {
    const modalLightBox = document.querySelector(".lightbox_modal");
    modalLightBox.style.display = "none";
  });

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
}
