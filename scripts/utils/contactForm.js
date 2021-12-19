function fillForm() {
  //form elements DOM

  const firstName = document.getElementById("first_name");
  const lastName = document.getElementById("last_name");
  const email = document.getElementById("email");
  const textMessage = document.getElementById("your_message");
  const formPhotograph = document.querySelector("#contact_Photograph"); //for reset all data

  //error messages DOM
  const firstNameError = document.querySelector(".firstName_error");
  const lastNameError = document.querySelector(".lastName_error");
  const emailError = document.querySelector(".email_error");
  const textMessageError = document.querySelector(".your_message_error");

  // button contact open form contact modal
  const ContactButton = document.querySelector(".contact_me");
  ContactButton.addEventListener("click", () => {
    const bodyDiv = document.querySelector("body");
    const MainDiv = document.getElementById("main");
    const contactModal = document.getElementById("contact_modal");
    // contactModal.focus();
    const modal = document.querySelector(".modal");

    contactModal.style.display = "block";
    bodyDiv.classList.add("no-scroll");
    MainDiv.setAttribute("aria-hidden", "true");
    MainDiv.classList.add("invisible"); //hide main div
    contactModal.setAttribute("aria-hidden", "false");
    document.querySelector("header a").setAttribute("tabIndex", "-1"); //disable tabindex logo

    // focus modal
    modal.focus();
  });

  //button close form contact modal
  const closeForm = document.querySelector(".close_form");
  closeForm.addEventListener("click", () => {
    const bodyDiv = document.querySelector("body");
    const MainDiv = document.getElementById("main");
    const contactModal = document.getElementById("contact_modal");

    MainDiv.setAttribute("aria-hidden", "false");
    MainDiv.classList.remove("invisible"); //show main div
    contactModal.setAttribute("aria-hidden", "true");

    contactModal.style.display = "none";
    bodyDiv.classList.remove("no-scroll");
  });

  //close modal form using ESC and key code
  document.addEventListener("keydown", (e) => {
    const contactModal = document.getElementById("contact_modal");
    if (e.code === "Escape" && contactModal.style.display === "block") {
      const bodyDiv = document.querySelector("body");
      const MainDiv = document.getElementById("main");

      contactModal.style.display = "none";
      MainDiv.setAttribute("aria-hidden", "false");
      contactModal.setAttribute("aria-hidden", "true");
      bodyDiv.classList.remove("no-scroll");
      document.querySelector(".contact_me").focus();
    }
  });

  /*
  first name
  */

  //hide messages first name
  firstName.addEventListener("focus", (e) => {
    firstNameError.style.display = "none";
  });

  //verify size first name
  firstName.addEventListener("input", (e) => {
    if (e.target.value.length < 2) {
      e.target.style.border = "4px solid red";
      firstNameError.innerHTML =
        "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      firstNameError.style.display = "inline";
    } else {
      e.target.style.border = "4px solid #51d115";
      firstNameError.style.display = "none";
      submitBtn.removeAttribute("disabled");
    }
  });

  /*
  last name
  */

  //hide message error last name
  lastName.addEventListener("focus", (e) => {
    lastNameError.style.display = "none";
  });

  //verify size last name
  lastName.addEventListener("input", (e) => {
    if (e.target.value.length < 2) {
      e.target.style.border = "4px solid red";
      lastNameError.innerHTML =
        "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      lastNameError.style.display = "inline";
      submitBtn.setAttribute("disabled", true);
    } else {
      e.target.style.border = "4px solid #51d115";
      lastNameError.style.display = "none";
      submitBtn.removeAttribute("disabled");
    }
  });

  /*
  email
  */

  //hide message error email
  email.addEventListener("focus", (e) => {
    emailError.style.display = "none";
  });

  //verify format email
  email.addEventListener("input", (e) => {
    if (e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      e.target.style.border = "4px solid #51d115";
      emailError.style.display = "none";
      submitBtn.removeAttribute("disabled");
    } else {
      e.target.style.border = "4px solid red";
      emailError.innerHTML = "Veuillez entrer un adress email valide";
      emailError.style.display = "inline";
      submitBtn.setAttribute("disabled", true);
    }
  });

  /*
  text message
  */

  //hide error message
  textMessage.addEventListener("focus", (e) => {
    textMessageError.style.display = "none";
  });

  //verify size message
  textMessage.addEventListener("input", (e) => {
    if (e.target.value.length < 10) {
      e.target.style.border = "4px solid red";
      textMessageError.innerHTML =
        "Veuillez entrer 10 caractères ou plus pour le champ du message.";
      textMessageError.style.display = "inline";
      submitBtn.setAttribute("disabled", true);
    } else {
      e.target.style.border = "4px solid #51d115";
      textMessageError.style.display = "none";
      submitBtn.removeAttribute("disabled");
    }
  });

  // submit button clicked
  const submitBtn = document.querySelector(".contact_form_button");
  submitBtn.addEventListener("click", (e) => {
    // var format_txt = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    // submit event first name
    if (
      firstName.value === "" &&
      lastName.value === "" &&
      email.value === "" &&
      textMessage.value === ""
    ) {
      firstNameError.innerHTML = "Le prénom ne doit pas être vide";
      firstNameError.style.display = "inline";
      firstName.style.border = "4px solid red";

      lastNameError.innerHTML = "Le nom ne doit pas être vide";
      lastNameError.style.display = "inline";
      lastName.style.border = "4px solid red";

      emailError.innerHTML = "Le email ne doit pas être vide";
      emailError.style.display = "inline";
      email.style.border = "4px solid red";

      textMessageError.innerHTML = "Le message ne doit pas être vide";
      textMessageError.style.display = "inline";
      textMessage.style.border = "4px solid red";
      submitBtn.setAttribute("disabled", true);

      // verify if imput is empty
    }
    if (firstName.value === "") {
      firstNameError.innerHTML = "Le prénom ne doit pas être vide";
      firstNameError.style.display = "inline";
      firstName.style.border = "4px solid red";
      submitBtn.setAttribute("disabled", true);
    } else if (firstName.value.length < 2) {
      firstNameError.innerHTML =
        "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      firstNameError.style.display = "inline";
      firstName.style.border = "4px solid red";
      submitBtn.setAttribute("disabled", true);
    } else if (firstName.value.length > 20) {
      firstNameError.innerHTML =
        "Le prénom ne doit pas être plus grande que 20 caractères";
      firstNameError.style.display = "inline";
      firstName.style.border = "4px solid red";
      submitBtn.setAttribute("disabled", true);
    } else if (firstName.value.match(/[ !@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?]/)) {
      firstNameError.innerHTML =
        "Le prénom ne doit pas avoir des espaces et symboles";
      firstNameError.style.display = "inline";
      firstName.style.border = "4px solid red";
      submitBtn.setAttribute("disabled", true);
    } else if (lastName.value === "") {
      lastNameError.innerHTML = "Le nom ne doit pas être vide";
      lastNameError.style.display = "inline";
      lastName.style.border = "4px solid red";
      submitBtn.setAttribute("disabled", true);
    } else if (lastName.value.length < 2) {
      lastNameError.innerHTML =
        "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      lastNameError.style.display = "inline";
      lastName.style.border = "4px solid red";
      submitBtn.setAttribute("disabled", true);
    } else if (lastName.value.length > 20) {
      lastNameError.innerHTML =
        "Le nom ne doit pas être plus grande que 20 caractères";
      lastNameError.style.display = "inline";
      lastName.style.border = "4px solid red";
      submitBtn.setAttribute("disabled", true);
    } else if (lastName.value.match(/[ !@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?]/)) {
      lastNameError.innerHTML =
        "Le nom ne doit pas avoir des espaces et symboles";
      lastNameError.style.display = "inline";
      lastName.style.border = "4px solid red";
      submitBtn.setAttribute("disabled", true);
    } else if (email.value === "") {
      emailError.innerHTML = "Le email ne doit pas être vide";
      emailError.style.display = "inline";
      email.style.border = "4px solid red";
      submitBtn.setAttribute("disabled", true);
    } else if (
      !email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      emailError.innerHTML = "Veuillez entrer un adress email valide";
      emailError.style.display = "inline";
      email.style.border = "4px solid red";
      submitBtn.setAttribute("disabled", true);
    } else if (textMessage.value === "") {
      textMessageError.innerHTML = "Le message ne doit pas être vide";
      textMessageError.style.display = "inline";
      textMessage.style.border = "4px solid red";
      submitBtn.setAttribute("disabled", true);
    } else if (textMessage.value.length < 5) {
      textMessageError.innerHTML =
        "Le message doit être plus grande que 5 caractères";
      textMessageError.style.display = "inline";
      textMessage.style.border = "4px solid red";
      submitBtn.setAttribute("disabled", true);
    } else {
      // hide error messages
      firstNameError.style.display = "none";
      lastNameError.style.display = "none";
      emailError.style.display = "none";
      textMessageError.style.display = "none";

      //hide border of inputs
      firstName.style.border = "4px solid #fff";
      lastName.style.border = "4px solid #fff";
      email.style.border = "4px solid #fff";
      textMessage.style.border = "4px solid #fff";

      // prevent refresh page
      e.preventDefault();
      console.log("Prénom: " + firstName.value);
      console.log("Nom: " + lastName.value);
      console.log("Email: " + email.value);
      console.log("Votre message: " + textMessage.value);

      //the page will be not refresh when submit button will be clicked
      formPhotograph.reset();
    }
  });
}
