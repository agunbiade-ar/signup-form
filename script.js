let first_name = document.getElementById('first_name');
let last_name = document.getElementById('last_name');
let phone = document.getElementById('phone');
let email = document.getElementById('email');

let password = document.getElementById('password');
let confirm_password = document.getElementById('confirm_password');
let submit = document.querySelector('button');

submit.addEventListener('click', function (e) {
  e.preventDefault();

  if (validate_all_fields()) {
    alert('please fill all fields');
  } else if (first_name.value === '' || last_name.value === '') {
    alert('please put your first name and last name');
  } else if (
    phone.value === '' ||
    email.value === '' ||
    !phone.value.match(/^\+\d{3}\-\d{8,}$/)
  ) {
    alert(
      'please put your phone number in the form +234-8148342428 and your email'
    );
  } else if (password.value !== confirm_password.value) {
    alert(
      'passwords must match: with a minimum of 8 characters, at least one small and one capital letter each, a number and a special character like @_+% etc '
    );
  } else {
    if (validate_password()) alert('details submitted successfully');
  }
});

confirm_password.addEventListener('keyup', validate_password);

function validate_password() {
  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[a-z]/g;
  let digits = /[/d]/g;
  let specialCharacters = /[/W_]/g;

  if (password.value !== confirm_password.value) {
    password.style.backgroundColor = 'red';
    confirm_password.style.backgroundColor = 'red';
    return false;
  } else {
    if (
      confirm_password.value.match(lowerCaseLetters) &&
      confirm_password.value.match(upperCaseLetters) &&
      confirm_password.value.match(digits) &&
      confirm_password.value.match(specialCharacters) &&
      password.value.match(lowerCaseLetters) &&
      password.value.match(upperCaseLetters) &&
      password.value.match(digits) &&
      password.value.match(specialCharacters)
    ) {
      if (password.value === '' && confirm_password.value === '') return false;
      if (password.value === confirm_password.value) {
        password.style.backgroundColor = 'green';
        confirm_password.style.backgroundColor = 'green';
        return true;
      }
    }
  }
  return false;
}

function validate_all_fields() {
  if (
    first_name.value === '' &&
    last_name.value === '' &&
    phone.value === '' &&
    email.value === '' &&
    password.value === '' &&
    confirm_password.value === ''
  ) {
    return true;
  }
  return false;
}
