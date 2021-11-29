function handleWishButton() {
  const buttons = document.querySelectorAll(".photographer_card");
  for (const button of buttons) {
    idresult = "";
    button.addEventListener("click", function (event) {
      if (button.classList.contains(243)) {
        idresult = 243;

        return idresult;
      } else if (button.classList.contains(930)) {
      } else if (button.classList.contains(82)) {
      } else if (button.classList.contains(527)) {
      } else if (button.classList.contains(82)) {
      }
    });
  }
}
handleWishButton();
