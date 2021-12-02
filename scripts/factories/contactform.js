function contactFormFactory(data) {
  const { name, id } = data;

  function contactFormDOM() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("modal");

    let cardForm = "";

    cardForm += `
<div class="modal-title">
        <h2>Contactez-moi</h2>
        <h2 class="modal-name">${name}</h2>

        <img class="close-form" src="./assets/icons/close.svg" onclick="closeModal()" />
        </div>

        <form action="" role="form">
        <div role="group" aria-labelledby="coordonnees">


          <label for="firstname">Prénom</label>
          <input type="text" name="firstname" id="firstname" />

          <label for="lastname">Nom</label>
          <input type="text" name="lastname" id="lastname" />

          <label for="email">Email</label>
          <input type="email" name="email" id="email" />

          <label for="your_message">Votre message</label>
          <textarea id="your_message" name="your_message"></textarea>

        </div>
        <button class="contact_button">Envoyer</button>
      </form>
`;

    $wrapper.innerHTML = cardForm;
    return $wrapper;
  }
  return { name, id, contactFormDOM };
}
