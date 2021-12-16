function contactFormFactory(data) {
  const { name, id } = data;

  function contactFormDOM() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("modal");

    let cardForm = "";

    cardForm += `
<div class="modal-title">
        <h2>Contactez-moi</h2>
        <h2 class="modal_name">${name}</h2>

      

        <form id="contact_Photograph" role="form" action="photographer.html" method="post">
       
        <div role="group" aria-labelledby="coordonnees">

          <label for="first_name">Prénom</label>
          <input type="text" name="first_name" id="first_name" aria-required="true" minlength="2"/>
          <p class="firstName_error error_msn"></p>

          <label for="last_name">Nom</label>
          <input type="text" name="last_name" id="last_name" aria-required="true" minlength="2"/>
          <p class="lastName_error error_msn hide"></p>

          <label for="email">Email</label>
          <input type="email" name="email" id="email" aria-required="true"/>
 <p class="email_error error_msn"></p>
          <label for="your_message">Votre message</label>
          <textarea id="your_message" name="your_message" aria-required="true"></textarea>
          <p class="your_message_error error_msn hide"></p>
        </div>

        <button class="contact_form_button contact_button" type="submit">Envoyer</button>
      </form>
      <a href="#" aria-label="Close" class="close_form" >
      <img src="./assets/icons/close.svg" />
      </a>
      
      </div>
`;

    $wrapper.innerHTML = cardForm;
    return $wrapper;
  }
  return { name, id, contactFormDOM };
}
