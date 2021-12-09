function lightboxDOM(){
    const $wrapper = document.createElement("div")
    let ligthboxImages = ""
    ligthboxImages = `
    <ul class="carousel" arial-label="Les photos de Mimi">

    <li class="carousel_item item_0" aria-hidden="false">
      <div role="button" class="controls controls-left">
        <span class="img prev_image">
          <i aria-hidden="true" class="fas fa-chevron-left"></i>
        </span>
        <p class="sr-only">Previous</p>
      </div>
      <div role="button" class="controls controls_right">
        <span class="img next_image">
          <i aria-hidden="true" class="fas fa-chevron-right"></i>
        </span>
        <p class="sr-only">Next</p>
      </div>
      <div class="carousel_img">
        <img src="/assets/photographers/195/Architecture_Corner_Room.jpg" alt="">
      </div>
    </li>
  </ul>
  <button class="modal_close_btn">
    &times;
  </button>



    `
$wrapper.innerHTML = ligthboxImages
return $wrapper
}
