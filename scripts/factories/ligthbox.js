function LightboxDOM() {
  // create lightbox
  const modalLightBox = document.createElement("div");
  modalLightBox.classList.add("modal_carousel");

  const modalMediaDiv = document.createElement("div");
  modalMediaDiv.classList.add("modal_media");

  const mediasAll = document.querySelectorAll(".medias_all");

  const mediasTitleAll = document.querySelectorAll(".photograph-catalog-txt");

  // research all medias photographer
  for (var i = 0; i < mediasAll.length; i++) {
    const modalMediaDiv = document.createElement("div");
    modalMediaDiv.classList.add("modal_media");
    modalMediaDiv.appendChild(mediasAll[i].cloneNode(true));
    modalMediaDiv.appendChild(mediasTitleAll[i].cloneNode(true));
    modalLightBox.appendChild(modalMediaDiv);
  }

  // add buttons lightbox
  let buttonsLightBox = `<a href="" class="controls controls-left">
<div role="button">
  <span class="img prev_image">
    <i aria-hidden="true" class="fas fa-chevron-left"></i>
  </span>
  <p class="sr-only">Previous</p>
</div>
</a>
<a href="" class="controls controls_right">
<div role="button">
  <span class="img next_image">
    <i aria-hidden="true" class="fas fa-chevron-right"></i>
  </span>
  <p class="sr-only">Next</p>
</div>

</a>

<button class="modal_close_btn">
&times;
</button>`;

  modalLightBox.innerHTML += buttonsLightBox;
  return modalLightBox;
}
