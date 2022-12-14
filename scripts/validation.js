const inputElement = document.getElementById('form-input')
const buttonElement = document.getElementById('submit-button')

if (inputElement.validity.valid === true) { 
  buttonElement.classList.remove('form__submit-button_no-active');
  buttonElement.disabled = ""; 
} else { 
  buttonElement.classList.add('form__submit-button_no-active');
  buttonElement.disabled = "disabled"; 
}

inputElement.addEventListener('input', function () { 
  if (inputElement.validity.valid === true) {
    buttonElement.classList.remove('form__submit-button_no-active');
    buttonElement.disabled = "";
  } else {
    buttonElement.classList.add('form__submit-button_no-active');
    buttonElement.disabled = "disabled";
  }
}); 