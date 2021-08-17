const formButtonSetUp = () => {

  const submitButton = document.getElementById("button");
  const name = document.getElementById("subscription_name");
  const email = document.getElementById("subscription_email");
  const phone = document.getElementById("subscription_phone");


  submitButton.disabled = true;



  const isValidName = () => {
    return name.value.match(/.{2,}/);
  };

  const isValidEmail = () => {
    return email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  };

  const isValidPhone = () => {
    return phone.value.match(/^6\d{8}$/);
  };

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
