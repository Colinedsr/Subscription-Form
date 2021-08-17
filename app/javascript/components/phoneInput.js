const validationInput = () => {

  const form = document.querySelector('simple_form');
  const phone = document.getElementById("subscription_phone");
  const regexp = /^6\d{8}$/;

  phone.addEventListener('input', validate);

  function validate(e) {
    let target = e.target;
    if (target.name == "subscription[phone]") {
      if (regexp.test(target.value)) {
        target.classList.add('valid');
        target.classList.remove('invalid');
  }
      else{
        target.classList.add('invalid');
        target.classList.remove('valid');
      };
    };
  };
};


export { validationInput };
