const formButtonSetUp = () => {

  // selecting the elements
  const submitButton = document.getElementById("button");
  const name = document.getElementById("subscription_name");
  const email = document.getElementById("subscription_email");
  const phone = document.getElementById("subscription_phone");

  // by default the button is disabled
  submitButton.disabled = true;


  // checking if each input is correct
  // - min 2 caracters for the name
  // - a regex for email
  // - the regex for phone used in validations


  const isValidName = () => {
    return name.value.match(/.{2,}/);
  };

  const isValidEmail = () => {
    return email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  };

  const isValidPhone = () => {
    return phone.value.match(/^6\d{8}$/);
  };

  // if every condition OK then we enable the button
  // --> change of color and submission made possible


  const checkForm = () => {
    if (isValidName() && isValidEmail() && isValidPhone()) {
      submitButton.classList.add('enable');
      submitButton.disabled = false;
    };
  };
  name.addEventListener ('change', checkForm);
  email.addEventListener ('change', checkForm);
  phone.addEventListener ('change', checkForm);
};


export { formButtonSetUp };
